# Yoked Website

Marketing landing page for **Yoked** - Your AI-Powered Gains Partner.

**Live:** [yoked.fitness](https://yoked.fitness)

## About Yoked

Yoked is an AI-powered fitness app that creates personalized workout programs based on your goals, experience, and schedule. Features include:

- AI Program Generator
- Smart Workout Tracking
- Progress Photos
- Community Programs
- Personal Records Tracking

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Motion](https://motion.dev/) - Animation library (Framer Motion)
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/michaelsaia/YokedWebsite.git
cd YokedWebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production (static export)
npm run build

# Preview production build
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js pages
├── components/
│   ├── animations/        # Animation components
│   ├── forms/             # Form components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   ├── shared/            # Shared components
│   └── ui/                # UI primitives
├── lib/
│   ├── constants.ts       # Site content & config
│   └── utils.ts           # Utilities
public/
├── images/                # Static images
└── screenshots/           # App screenshots
```

## Deployment

The site is automatically deployed to GitHub Pages on push to `main`. The custom domain `yoked.fitness` is configured via the `CNAME` file.

## Screenshots

App screenshots are captured from the iOS Simulator and displayed in an interactive phone mockup carousel on the landing page.

## Contributing

This is a private project for Yoked. For questions or access, contact the maintainers.

## License

Private - All rights reserved.
