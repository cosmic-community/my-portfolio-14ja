# My Portfolio
![App Preview](https://imgix.cosmicjs.com/2aeca620-5241-11f1-8305-f921d082af6c-autopilot-photo-1521737711867-e3b97375f902-1779057527154.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, beautiful developer portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🏠 Beautiful homepage with hero section and featured content
- 💼 Project showcase with galleries, tech stacks, and live demos
- 🛠️ Skills organized by category with proficiency levels
- 🏢 Work experience timeline
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 16
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0a4310a6022ba888907ed0&clone_repository=6a0a443aa6022ba888907f0b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Inter Font](https://rsms.me/inter/) - Typography

## Getting Started

### Prerequisites

- Bun installed
- A Cosmic account with the bucket configured

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Set up your environment variables:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all projects with depth for connected objects
const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three content models: projects, skills, and work-experience. Each is fetched server-side using the Cosmic SDK.

## Deployment Options

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set your environment variables in the platform dashboard.

<!-- README_END -->