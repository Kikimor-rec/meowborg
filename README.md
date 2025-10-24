# MEOW BORG Website

Landing page for MEOW BORG - a feline post-meowcalyptic tabletop roleplaying game.

An independent production by Blazing Well, not affiliated with Ockult Örtmästare Games or Stockholm Kartell. Published under the MÖRK BORG Third Party License.

## 🎮 About

**MEOW BORG** is a tabletop roleplaying game where you play as cats exploring the harsh and mysterious world of feline dreams. Survive. Hunt. Purr.

## 🚀 Tech Stack

- **Framework:** Next.js 16.0 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Permanent Marker (headings), Inter (body)
- **Email:** Resend API
- **Deployment:** Vercel

## 📦 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## ⚙️ Environment Variables

Required environment variables (see `.env.example`):

- `RESEND_API_KEY` - Resend API key for sending emails
- `PLAYTEST_EMAIL` - Email address to receive playtest requests (default: meow@meowborg.com)
- `NEXT_PUBLIC_SITE_URL` - Site URL (http://localhost:3000 for dev)

## 📁 Project Structure

```
meow-borg/
├── app/
│   ├── api/playtest/ # API endpoint for form submissions
│   ├── layout.tsx    # Root layout with fonts & metadata
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx     # About section
│   ├── PlaytestForm.tsx # Playtest signup form
│   └── Footer.tsx    # Footer with social links
├── lib/
│   └── email.ts      # Resend email utility
├── public/
│   └── images/       # Character artwork
├── doc/              # Documentation
└── ...config files
```

## 🎨 Features

- ✅ Hero section with character artwork
- ✅ About section with game philosophy
- ✅ Playtest signup form with validation
- ✅ Email notifications via Resend
- ✅ Social media links (X/Twitter, Telegram)
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Accessibility features

## 🚢 Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for Vercel deployment instructions.

## 📚 Documentation

- [`vision.md`](./vision.md) - Technical vision and principles
- [`conventions.md`](./conventions.md) - Code conventions and standards
- [`doc/tasklist.md`](./doc/tasklist.md) - Development task list
- [`doc/workflow.md`](./doc/workflow.md) - Development workflow
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) - Deployment guide
- [`lib/README.md`](./lib/README.md) - Email configuration

## 🔗 Links

- **X/Twitter:** https://x.com/meowborg
- **Telegram:** https://t.me/meowborg
- **Repository:** https://github.com/Kikimor-rec/meowborg

## 📄 License

This is an independent production by Blazing Well and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License.

MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm Kartell.
