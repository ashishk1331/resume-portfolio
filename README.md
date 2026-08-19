# ashishk1331.vercel.app

Personal site and engineering notebook for Ashish Khare — Software Engineer.

Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4 and MDX.
Every route is statically generated.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Layout

```
app/
  page.tsx              homepage — bio, masthead, work, experience, stack, writing, experiments
  about/                long-form about page
  blog/[slug]/          one route per post, rendered from blogs/*.mdx
  projects/[slug]/      case studies for the featured projects
  sitemap.ts robots.ts  generated from the content
blogs/                  posts as .mdx with frontmatter (title, pubDate, description, draft)
components/
  home/                 homepage sections
  ui/                   Section and TechList primitives
constants/              site, projects and experience content lives here, not in JSX
```

## Writing a post

Add `blogs/<slug>.mdx` with frontmatter, and a banner at
`public/assets/<slug>/banner.webp`. Posts marked `draft: true` are visible in
development only. `/blog` redirects to the writing list on the homepage.
