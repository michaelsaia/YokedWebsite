import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Yoked | AI Fitness Tips & Training Science',
  description: 'Learn about AI-powered fitness, workout programming, and training science from the Yoked team. Tips for beginners and experienced lifters alike.',
  alternates: {
    canonical: 'https://yoked.fitness/blog/',
  },
  openGraph: {
    title: 'Yoked Blog - AI Fitness Tips & Training Science',
    description: 'Learn about AI-powered fitness, workout programming, and training science.',
    url: 'https://yoked.fitness/blog/',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-dark min-h-screen">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Yoked <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-dark-500 mb-12">
              AI fitness insights, workout science, and training tips.
            </p>

            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="block group"
                >
                  <article className="p-6 md:p-8 rounded-2xl bg-dark-100 border border-dark-200 hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <time
                        dateTime={post.date}
                        className="text-sm text-dark-500"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="text-dark-300">|</span>
                      <span className="text-sm text-dark-500">
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-dark-500 mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-dark-200 text-dark-500 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
