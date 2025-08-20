# Deployment Guide

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Prerequisites
1. GitHub account
2. Repository created on GitHub
3. Node.js and npm installed locally

### Step-by-Step Deployment

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Update configuration**:
   - Replace `yourusername` with your actual GitHub username in:
     - `package.json` (homepage field)
     - `index.html` (meta tags)
     - `sitemap.xml`
     - `robots.txt`
     - `vite.config.ts` (base field)

3. **Test build locally**:
   ```bash
   npm run build
   npm run preview
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "Deploy from a branch" 
   - Choose "gh-pages" branch
   - Select "/ (root)" folder
   - Save

6. **Access your deployed app**:
   - `https://yourusername.github.io/visual-sorting-app`

### Commands
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run preview` - Preview production build locally

### Configuration Files
- `vite.config.ts` - Build configuration with GitHub Pages base path
- `package.json` - Contains deployment scripts and homepage URL
- `.github/workflows/` - GitHub Actions (optional for auto-deployment)

### Troubleshooting
- Make sure all URLs are updated with your GitHub username
- Ensure gh-pages branch is created after first deployment
- Check GitHub Pages settings are correctly configured
- Build errors: Run `npm run build` locally to debug

### Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain