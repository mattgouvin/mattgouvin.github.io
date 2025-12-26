# Quick Start Guide

## First Time Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Deploy to GitHub Pages

```bash
npm run deploy
```

Your site will be live at [https://mattgouvin.github.io](https://mattgouvin.github.io) in 2-3 minutes.

---

## Common Tasks

### Test Production Build Locally

```bash
# Build
npm run build

# Serve
npx serve -s build
```

### Update Resume PDF

```bash
# Replace the file
cp /path/to/new/resume.pdf public/Resume.pdf

# Redeploy
npm run deploy
```

### Update Headshot

```bash
# Replace the image
cp /path/to/new/headshot.jpg public/headshot.jpg

# Redeploy
npm run deploy
```

### Update Work Experience

1. Edit `src/components/Experience.jsx`
2. Add new role to the `experiences` array
3. Save and test: `npm start`
4. Deploy: `npm run deploy`

### Update Skills

1. Edit `src/components/Skills.jsx`
2. Modify the `skillCategories` array
3. Save and test: `npm start`
4. Deploy: `npm run deploy`

---

## File Locations

| What to Update | File Location |
|----------------|---------------|
| Contact info | `src/components/Hero.jsx` |
| About section | `src/components/About.jsx` |
| Skills | `src/components/Skills.jsx` |
| Work experience | `src/components/Experience.jsx` |
| Education | `src/components/Education.jsx` |
| Awards | `src/components/Awards.jsx` |
| Projects | `src/components/Projects.jsx` |
| Resume PDF | `public/Resume.pdf` |
| Headshot | `public/headshot.jpg` |
| Colors | `tailwind.config.js` |

---

## Troubleshooting

### Site not updating?
```bash
# Hard refresh browser
Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not showing?
```bash
# Verify files exist
ls -la public/

# Should show:
# headshot.jpg
# Resume.pdf
```

---

## Full Documentation

- **Setup & Usage**: [README.md](README.md)
- **Deployment Details**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Architecture & Customization**: [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)

---

## Support

**Email**: mattgouvin@gmail.com
**LinkedIn**: [linkedin.com/in/matthew-gouvin](https://www.linkedin.com/in/matthew-gouvin/)
