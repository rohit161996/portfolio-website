# Portfolio Website

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is automatically deployed to Bunny CDN when changes are pushed to the `main` branch.

### CI/CD Pipeline

The project uses two separate workflows:

#### Continuous Integration (.github/workflows/ci.yml)
Runs on every push and pull request:
1. Runs type checking
2. Runs linting
3. Builds the project
4. Caches the build output

#### Continuous Deployment (.github/workflows/cd.yml)
Runs only on main branch pushes or manual trigger:
1. Builds a fresh production bundle
2. Deploys to Bunny CDN using FTP
3. Supports manual deployment via GitHub Actions tab

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your Bunny CDN storage zone via FTP:
   - Host: storage.bunnycdn.com
   - Use your Bunny CDN FTP credentials
   - Upload contents of `dist/` to the root directory

### Environment Setup

For GitHub Actions deployment, set these secrets in your repository:

- `BUNNY_FTP_HOST`: Your Bunny CDN FTP hostname
- `BUNNY_FTP_USERNAME`: Your FTP username
- `BUNNY_FTP_PASSWORD`: Your FTP password

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── data/          # Data files
│   └── assets/        # Images and other assets
├── public/           # Static files
└── dist/            # Production build output
```
