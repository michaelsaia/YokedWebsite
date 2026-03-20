import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/shared/StructuredData';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} - Yoked Blog`,
    description: post.description,
    alternates: {
      canonical: `https://yoked.fitness/blog/${post.slug}/`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://yoked.fitness/blog/${post.slug}/`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(
          <li key={i} className="text-dark-500 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(lines[i].slice(2)) }} />
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 mb-4">
          {listItems}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const text = lines[i].replace(/^\d+\.\s/, '');
        listItems.push(
          <li key={i} className="text-dark-500 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(text) }} />
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-2 mb-4">
          {listItems}
        </ol>
      );
      continue;
    }

    // Table
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split('|').filter(Boolean).map(h => h.trim());
        const rows = tableLines.slice(2).map(row =>
          row.split('|').filter(Boolean).map(cell => cell.trim())
        );
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-200">
                  {headers.map((h, hi) => (
                    <th key={hi} className="text-left text-dark-400 py-3 pr-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-dark-200/50">
                    {row.map((cell, ci) => (
                      <td key={ci} className="text-dark-500 py-3 pr-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="text-dark-500 leading-relaxed mb-4">
        <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }} />
      </p>
    );
    i++;
  }

  return elements;
}

function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-dark-400 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yoked',
      url: 'https://yoked.fitness',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yoked.fitness/images/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yoked.fitness/blog/${post.slug}/`,
    },
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <Header />
      <main className="pt-28 pb-24 bg-dark min-h-screen">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/blog/" className="text-primary hover:text-primary-400 text-sm">
                &larr; Back to Blog
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <time dateTime={post.date} className="text-sm text-dark-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-dark-300">|</span>
                <span className="text-sm text-dark-500">{post.readingTime}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-dark-500 leading-relaxed">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-dark-200 text-dark-500 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Content */}
            <div className="prose-dark">
              {renderMarkdown(post.content)}
            </div>

            {/* Author */}
            <footer className="mt-12 pt-8 border-t border-dark-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  Y
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-sm text-dark-500">{post.authorRole}</p>
                </div>
              </div>
            </footer>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
