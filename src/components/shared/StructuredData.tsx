interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yoked',
  url: 'https://yoked.fitness',
  logo: 'https://yoked.fitness/images/icon.png',
  description:
    'AI-powered fitness app that creates personalized workout programs tailored to your goals, experience, and schedule.',
  sameAs: [] as string[],
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Yoked',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  description:
    'AI-powered fitness app with personalized workout programs. Get a custom training plan in seconds — no personal trainer required.',
  url: 'https://yoked.fitness',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free to download with workout tracking, community programs, and progress logging. AI program generation available via subscription.',
  },
};

export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
