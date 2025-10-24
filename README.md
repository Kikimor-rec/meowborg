# MEOW BORG Website

Landing page for MEOW BORG - a feline post-apocalyptic TTRPG system.

An independent production by Blazing Well, not affiliated with Ockult Örtmästare Games or Stockholm Kartell. Published under the MÖRK BORG Third Party License.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend API
- **Deployment:** Vercel

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your values.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

Required environment variables (see `.env.local.example`):

- `RESEND_API_KEY` - Resend API key for sending emails
- `PLAYTEST_EMAIL` - Email address to receive playtest requests
- `NEXT_PUBLIC_SITE_URL` - Site URL (http://localhost:3000 for dev)

## Project Structure

```
meow-borg/
├── app/              # Next.js App Router
├── components/       # React components
├── lib/              # Utilities and helpers
├── public/           # Static files
│   └── images/       # Images
├── doc/              # Documentation
└── ...config files
```

## Development Workflow

See [`doc/workflow.md`](./doc/workflow.md) for detailed development process.

## Documentation

- [`vision.md`](./vision.md) - Technical vision
- [`conventions.md`](./conventions.md) - Code conventions
- [`doc/tasklist.md`](./doc/tasklist.md) - Development task list
- [`doc/workflow.md`](./doc/workflow.md) - Development workflow

## License

This is an independent production by Blazing Well and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License.

MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm Kartell.
