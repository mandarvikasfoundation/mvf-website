# Mandar Vikas Foundation — Website

Built with Next.js (App Router) and TypeScript.

## Getting started (on your own machine)

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

- `app/` — every page. Each folder under `app/` is a URL route.
- `components/` — shared pieces (Header, Footer, PhotoStack, etc.)
- `app/globals.css` — the site's full design system: colors, fonts, spacing,
  reused as CSS variables everywhere.
- `public/images/` — put real photos here (campus gate, logo, etc.) with the
  exact filenames referenced in the code, or update the code to match your
  filenames.

## Status

This is being built page by page. So far:
- [x] Home page
- [ ] About
- [ ] Mandar's Pride
- [ ] Our Other Work
- [ ] Get Involved
- [ ] News & Updates
- [ ] Contact
- [ ] Gallery
- [ ] Admin panel (private, unlisted URL, for posting news/photos and
      viewing form submissions)

## Deploying

This project is set up to deploy on Vercel. Once pushed to GitHub, connect
the repo at vercel.com and it will build and deploy automatically.
