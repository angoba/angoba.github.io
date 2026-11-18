import { defineConfig } from 'astro/config';

// Create a repository named <your-github-username>.github.io.
// GitHub Actions sets GITHUB_REPOSITORY_OWNER at build time.
const username = (process.env.GITHUB_REPOSITORY_OWNER || 'goa').toLowerCase();

export default defineConfig({
  site: `https://${username}.github.io`,
  output: 'static',
  trailingSlash: 'always'
});
