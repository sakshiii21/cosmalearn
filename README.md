# CosmaLearn

CosmaLearn is a Next.js astronomy academy website with course, instructor, webinar, and course-detail pages. The current repository contains a frontend and local course data; it does not include a backend or user progress-tracking service.

**Live site:** [cosmalearn.vercel.app](https://cosmalearn.vercel.app/)

**Source:** [github.com/sakshiii21/cosmalearn](https://github.com/sakshiii21/cosmalearn)

## Stack

Next.js · React · TypeScript · CSS

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/sakshiii21/cosmalearn.git
cd cosmalearn
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the Next.js development server.
- `npm run build` — create a production build.
- `npm start` — serve the production build.
- `npm run lint` — run the configured lint command.

## Project layout

- `src/app/` — home, courses, and contact pages.
- `src/components/` — page sections and reusable interface components.
- `src/data/courses-detail.json` — course content used by the frontend.
- `public/` — static assets.

There are no environment variables required by the current codebase.
