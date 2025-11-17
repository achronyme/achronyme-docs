# Achronyme Documentation

Official documentation website for the Achronyme programming language.

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

## Overview

This repository contains the source code for the Achronyme language documentation website. Built with Astro, it provides comprehensive documentation for learning and using Achronyme.

**Live Site**: https://docs.achrony.me

## Tech Stack

- **[Astro 5.x](https://astro.build)** - Static site generator
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Utility-first CSS framework
- **[Alpine.js](https://alpinejs.dev)** - Lightweight JavaScript framework
- **Markdown** - Content authoring with frontmatter

## Project Structure

```
achronyme-docs/
├── public/                 # Static assets (images, fonts)
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/           # Markdown content (docs & changelog)
│   │   ├── language/      # Language documentation
│   │   └── changelog/     # Version history
│   ├── layouts/           # Page layouts
│   ├── lib/               # Utilities and navigation config
│   ├── pages/             # Route pages
│   └── styles/            # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/achronyme/achronyme-docs.git
cd achronyme-docs

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The static site will be generated in the `dist/` directory.

## Content Structure

### Documentation (`src/content/language/`)

Documentation files use Markdown with YAML frontmatter:

```markdown
---
title: "Page Title"
description: "Brief description for SEO"
section: "getting-started"
order: 1
draft: false
---

# Content here...
```

**Available sections:**
- `getting-started` - Installation and basics
- `core-language` - Syntax, types, functions
- `data-structures` - Arrays, records, strings
- `functional-programming` - HOFs, recursion
- `mathematical-computing` - Linear algebra, stats
- `specialized-modules` - DSP, graphs, optimization
- `advanced-topics` - Best practices, examples

### Changelog (`src/content/changelog/`)

Version history files follow semantic versioning:

```markdown
---
version: "0.7.0"
date: 2025-12-01
title: "Feature Release"
description: "Summary of changes"
breaking: false
status: "Released"
highlights:
  - "New feature 1"
  - "New feature 2"
---

## New Features
...
```

## Adding Content

### New Documentation Page

1. Create a Markdown file in the appropriate section:
   ```
   src/content/language/core-language/new-topic.md
   ```

2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "New Topic"
   description: "Description of the topic"
   section: "core-language"
   order: 6
   ---
   ```

3. Update navigation in `src/lib/navigation.ts` to include the new page.

### New Changelog Entry

1. Create a file named `v{version}.md`:
   ```
   src/content/changelog/v0.7.0.md
   ```

2. Add frontmatter following the schema.

3. The changelog page automatically sorts entries by version.

## Deployment

The site generates static HTML and can be deployed to any static hosting:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **HostGator** (via FTP/cPanel)
- **AWS S3/CloudFront**

### Manual Deployment

```bash
npm run build
# Upload contents of dist/ to your server
```

### CI/CD

Configure GitHub Actions or similar for automated deployments. See `.github/workflows/` for examples.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Content Guidelines

- Use clear, concise language
- Include code examples where applicable
- Follow existing formatting patterns
- Test locally before submitting

## Related Projects

- **[achronyme-core](https://github.com/achronyme/achronyme-core)** - Language compiler/interpreter
- **[achronyme-vscode](https://github.com/achronyme/achronyme-vscode)** - VS Code extension

## License

MIT License - Copyright (c) 2025 Eduardo Alonso

---

**Built for the Achronyme community**
