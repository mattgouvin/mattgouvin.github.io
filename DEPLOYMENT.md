# Deployment Guide

## Quick Deployment to GitHub Pages

### One-Command Deploy

```bash
npm run deploy
```

That's it! Your site will be live at `https://mattgouvin.github.io` within 2-3 minutes.

---

## Detailed Deployment Instructions

### First-Time Setup

1. **Ensure Git is initialized and connected to GitHub**:
   ```bash
   git remote -v
   ```
   Should show:
   ```
   origin  https://github.com/mattgouvin/mattgouvin.github.io.git (fetch)
   origin  https://github.com/mattgouvin/mattgouvin.github.io.git (push)
   ```

2. **Commit your changes** (if any):
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### What Happens During Deployment

The `npm run deploy` command:

1. Runs `npm run build` (creates optimized production build)
2. Creates/updates the `gh-pages` branch
3. Pushes the `build/` folder contents to the `gh-pages` branch
4. GitHub Pages automatically serves the site from this branch

### Configure GitHub Pages Settings

After your first deployment:

1. Go to: `https://github.com/mattgouvin/mattgouvin.github.io/settings/pages`
2. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

**Note**: Since this is a user site (`username.github.io`), it will be served from the root path at `https://mattgouvin.github.io/`.

### Verify Deployment

1. Check the Actions tab: `https://github.com/mattgouvin/mattgouvin.github.io/actions`
2. Wait for the "pages build and deployment" workflow to complete (usually 1-2 minutes)
3. Visit: `https://mattgouvin.github.io/`

---

## Making Updates

### Update Workflow

1. **Make your changes** locally
   ```bash
   # Edit files in src/components/, public/, etc.
   ```

2. **Test locally**:
   ```bash
   npm start
   ```
   View at `http://localhost:3000`

3. **Build and preview production**:
   ```bash
   npm run build
   npx serve -s build
   ```
   Test the production build locally

4. **Commit changes** (optional but recommended):
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

The site will update within 2-3 minutes.

---

## Common Issues & Solutions

### Issue: "gh-pages not found"

**Solution**: The `gh-pages` package creates the branch automatically on first deploy. Just run:
```bash
npm run deploy
```

### Issue: "Updates not showing"

**Solutions**:
1. Hard refresh your browser: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Check GitHub Actions completed: `https://github.com/mattgouvin/mattgouvin.github.io/actions`
3. Verify the correct branch is selected in Settings → Pages

### Issue: "404 when visiting the site"

**Solutions**:
1. Ensure GitHub Pages is enabled in Settings → Pages
2. Verify branch is set to `gh-pages` and folder to `/ (root)`
3. Wait 5-10 minutes for DNS propagation on first deploy

### Issue: "Images or Resume not loading"

**Solutions**:
1. Verify files exist in `public/` folder:
   ```bash
   ls -la public/
   ```
   Should show: `headshot.jpg` and `Resume.pdf`

2. Rebuild and redeploy:
   ```bash
   npm run deploy
   ```

---

## Deployment Checklist

Before deploying, ensure:

- [ ] All images are in `public/` folder
- [ ] Resume PDF is in `public/Resume.pdf`
- [ ] Headshot is in `public/headshot.jpg`
- [ ] Local build succeeds: `npm run build`
- [ ] Production preview works: `npx serve -s build`
- [ ] All content is up-to-date
- [ ] No broken links or console errors

Then deploy:
```bash
npm run deploy
```

---

## Custom Domain (Optional)

To use a custom domain like `www.mattgouvin.com`:

1. Add a `CNAME` file to the `public/` folder:
   ```bash
   echo "www.mattgouvin.com" > public/CNAME
   ```

2. Update `package.json`:
   ```json
   "homepage": "https://www.mattgouvin.com",
   ```

3. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `mattgouvin.github.io`
   - Or add A records pointing to GitHub's IPs

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Update GitHub Pages settings to use the custom domain

See: [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Rollback to Previous Version

If you need to rollback:

1. View the `gh-pages` branch history:
   ```bash
   git checkout gh-pages
   git log
   ```

2. Reset to a previous commit:
   ```bash
   git reset --hard <commit-hash>
   git push origin gh-pages --force
   ```

3. Return to main branch:
   ```bash
   git checkout main
   ```

---

## Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Create React App Deployment**: https://create-react-app.dev/docs/deployment/#github-pages
- **gh-pages Package**: https://github.com/tschaub/gh-pages
