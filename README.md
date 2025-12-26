# Matt Gouvin - Software Engineer Portfolio

A modern, responsive single-page React portfolio website built with Tailwind CSS and deployed to GitHub Pages.

## Features

- **Modern Design**: Clean, professional design with a blue color scheme and smooth animations
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Interactive Timeline**: Expandable/collapsible work experience timeline with detailed role descriptions
- **Scroll Animations**: Smooth fade-in effects as you scroll through sections
- **Accessible**: Keyboard navigable with proper contrast ratios
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## Tech Stack

- **React 19** - UI framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **Google Fonts** - Inter & Poppins fonts
- **GitHub Pages** - Hosting and deployment

## Project Structure

```
mattgouvin.github.io/
├── public/
│   ├── headshot.jpg          # Professional headshot
│   ├── Resume.pdf            # Downloadable resume
│   └── index.html            # HTML template
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with intro
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Technical skills grid
│   │   ├── Experience.jsx    # Interactive timeline
│   │   ├── Education.jsx     # Education details
│   │   ├── Awards.jsx        # Awards and honors
│   │   ├── Projects.jsx      # Projects (coming soon)
│   │   └── Footer.jsx        # Contact footer
│   ├── App.js                # Main app component
│   ├── index.js              # React entry point
│   └── index.css             # Global styles & Tailwind
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mattgouvin/mattgouvin.github.io.git
cd mattgouvin.github.io
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server:
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000). The page will automatically reload when you make changes.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

This creates a `build/` folder with optimized static files.

### Preview Production Build Locally

After building, you can preview the production build locally:

1. Install a static file server (if you don't have one):
```bash
npm install -g serve
```

2. Serve the build folder:
```bash
serve -s build
```

The production build will be available at [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Deployment to GitHub Pages

### Initial Setup

1. Ensure you have a GitHub repository at `https://github.com/mattgouvin/mattgouvin.github.io`

2. The repository is already configured for GitHub Pages in `package.json`:
   - `"homepage": "https://mattgouvin.github.io/"`
   - Deploy scripts are set up

### Deploy

Run the deploy command:
```bash
npm run deploy
```

This command will:
1. Build the production version (`npm run build`)
2. Push the build folder to the `gh-pages` branch
3. Make the site live at [https://mattgouvin.github.io](https://mattgouvin.github.io)

### GitHub Pages Settings

After your first deployment:

1. Go to your repository on GitHub: `https://github.com/mattgouvin/mattgouvin.github.io`
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

The site will be published at `https://mattgouvin.github.io` within a few minutes.

### Updating the Site

To make updates:

1. Edit your code locally
2. Test with `npm start`
3. Deploy with `npm run deploy`

The changes will be live within a few minutes.

## Customization

### Updating Content

- **Personal Info**: Edit [src/components/Hero.jsx](src/components/Hero.jsx)
- **About Section**: Edit [src/components/About.jsx](src/components/About.jsx)
- **Skills**: Edit [src/components/Skills.jsx](src/components/Skills.jsx)
- **Experience**: Edit [src/components/Experience.jsx](src/components/Experience.jsx)
- **Education**: Edit [src/components/Education.jsx](src/components/Education.jsx)

### Changing Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color scheme. The primary blue color is defined in the `colors.primary` section.

### Adding Projects

When you're ready to add projects, edit [src/components/Projects.jsx](src/components/Projects.jsx) to replace the "Coming Soon" placeholder with actual project cards.

## SEO & Metadata

Meta tags are configured in [public/index.html](public/index.html). Update these for better SEO:
- Title
- Description
- Keywords
- Open Graph tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Matt Gouvin. All rights reserved.

## Contact

- Email: mattgouvin@gmail.com
- LinkedIn: [linkedin.com/in/matthew-gouvin](https://www.linkedin.com/in/matthew-gouvin/)
- Website: [mattgouvin.github.io](https://mattgouvin.github.io)
