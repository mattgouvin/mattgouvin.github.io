# mattgouvin.github.io

Personal site for Matt Gouvin, built with [Hugo](https://gohugo.io/) and the [Hugoplate](https://github.com/zeon-studio/hugoplate) theme (Hugo + TailwindCSS).

## Requirements

- Hugo Extended (>= 0.165)
- Go (for Hugo modules)
- Node.js 20+

## Local development

```bash
npm install
npm run dev      # starts hugo server + tailwind watcher at http://localhost:1313
```

## Build

```bash
npm run build    # outputs the static site to ./public
```

## Deployment

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## Editing content

- `content/english/_index.md` — homepage (banner + feature sections)
- `content/english/about/_index.md` — about page (bio, experience, education, skills)
- `content/english/blog/` — blog posts (one Markdown file per post)
- `content/english/authors/matt-gouvin.md` — author profile
- `data/projects.json` — projects shown on the homepage
- `data/social.json` — social links
- `assets/images/` — images (e.g. `headshot.jpg`); reference them in frontmatter without a leading slash, e.g. `image: "images/headshot.jpg"`
- `config/_default/` — site config, params, menus, languages
- `layouts/home.html`, `layouts/about.html` — local layout overrides

The theme lives in `themes/hugoplate/`.
