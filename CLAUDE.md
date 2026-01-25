# Yoked Website - Claude Code Instructions

## Project Overview
This is the marketing/landing website for **Yoked**, an AI-powered fitness app. The website is built with Next.js 16, React 19, Tailwind CSS 4, and Motion (Framer Motion) for animations.

**Live site:** https://yoked.fitness

## Tech Stack
- **Framework:** Next.js 16 (App Router, static export)
- **UI:** React 19, Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Deployment:** GitHub Pages with custom domain
- **Font:** Inter (Google Fonts)

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles & Tailwind
│   └── privacy/           # Privacy policy page
├── components/
│   ├── animations/        # Reusable animation components
│   │   ├── AnimatedEgg.tsx
│   │   ├── FadeInView.tsx
│   │   └── CountUp.tsx
│   ├── forms/
│   │   └── WaitlistForm.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections (main content)
│   │   ├── HeroSection.tsx
│   │   ├── AppScreenshotsSection.tsx  # Interactive phone mockup carousel
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── CTASection.tsx
│   ├── shared/
│   │   └── AppStoreBadges.tsx
│   └── ui/                # Reusable UI primitives
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Input.tsx
├── lib/
│   ├── constants.ts       # Site config, features, copy
│   └── utils.ts           # Utility functions (cn for classnames)
public/
├── images/                # App icons, logos
└── screenshots/           # App screenshots for carousel
```

## Key Files to Know
- `src/lib/constants.ts` - All marketing copy, features list, stats, links
- `src/app/layout.tsx` - SEO metadata, Open Graph tags
- `src/components/sections/AppScreenshotsSection.tsx` - Interactive screenshot carousel with phone mockup

## Design System
- **Colors:** Dark theme with amber/gold primary (`#F59E0B`), defined in `globals.css`
- **Typography:** Inter font, responsive sizing
- **Components:** Cards with hover effects, gradient accents, subtle glows

## Development Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production (static export)
npm run lint     # Run ESLint
```

## Deployment
The site uses GitHub Pages with static export. On push to `main`:
1. GitHub Actions runs `npm run build`
2. Outputs to `out/` directory
3. Deploys to GitHub Pages
4. Custom domain: yoked.fitness

## App Screenshots
Screenshots are captured from the iOS Simulator using the ios-simulator MCP. Current screenshots in `public/screenshots/`:
- `home-screen.png` - Daily dashboard
- `create-program.png` - Program creation options
- `workout-detail.png` - Workout preview with Coach's Game Plan
- `active-workout.png` - Live workout tracking
- `training-programs.png` - Programs list
- `discover-programs.png` - Community programs
- `progress-prs.png` - Personal records tracking

**Note:** Avoid capturing screenshots with personal photos (e.g., progress comparison photos on the Profile/Progress screens).

## Common Tasks

### Adding a new section
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Use `FadeInView` or Motion for animations
4. Use `Container` for consistent max-width

### Updating marketing copy
Edit `src/lib/constants.ts` - contains features, how-it-works steps, stats, etc.

### Updating screenshots
Use the ios-simulator MCP to capture new screenshots, save to `public/screenshots/`, and update the array in `AppScreenshotsSection.tsx`.

## Related Projects
- **Yoked App:** The main iOS/Android fitness app (separate repo)
- This website promotes the app and collects waitlist signups

## Notes
- The waitlist form currently has a placeholder - needs backend integration
- App Store/Play Store links in constants.ts are placeholders
- Stats in StatsSection are marketing placeholders
