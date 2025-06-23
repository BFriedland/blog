# Personal Blog and Portfolio

My personal blog and portfolio site, built with Astro and the Spectre theme.

Live at [benfriedland.com](https://benfriedland.com)

## Technologies

### Frontend
- **[Astro](https://astro.build/)** - Static site generator
- **[Spectre](https://github.com/louisescher/spectre/tree/master)** - Astro theme
- **[Pagefind](https://pagefind.app/)** - Client-side search
- **[Expressive Code](https://expressive-code.com/)** - Syntax highlighting

### Infrastructure
- **[Docker](https://www.docker.com/)** - Containerized deployment
- **[nginx](https://nginx.org/)** - Static file serving
- **[Fly.io](https://fly.io/)** - Hosting platform
- **[pnpm](https://pnpm.io/)** - JavaScript package manager

## Architecture

`Astro Build → Nginx → Fly.io → Browser`

## Local Development

### Prerequisites
- Node.js
- pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/BFriedland/blog.git
cd blog

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Visit `http://localhost:4321` to view the site.

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build (required for Pagefind testing)

## Docker Development

Run the production build locally with `./restart.sh`

Visit `http://localhost:8080` to test the containerized version.

## Deployment

### Fly.io Deployment
```bash
# Install Fly.io CLI with Homebrew
brew install flyctl

# Deploy
fly launch  # First time
fly deploy  # Subsequent deployments
```

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── content/        # Blog posts and project content
├── layouts/        # Page layouts
├── pages/          # Route pages
├── scripts/        # Client-side JavaScript
└── styles/         # CSS stylesheets

package/            # Spectre theme integration
public/             # Static assets
Dockerfile          # Multi-stage container build
nginx.conf          # Production web server config
fly.toml            # Fly.io deployment configuration
```

## License

MIT License - see [LICENSE](LICENSE) file for details.
