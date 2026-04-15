# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

```bash
# Run locally with Docker (recommended, includes hot-reload)
docker-compose up

# Or run directly
cd act-cms-website
npm install
npm run dev      # http://localhost:5173
npm run build    # Production build
npm run lint     # ESLint (zero warnings allowed)
```

Docker volume-mounts `src/` and `public/` so changes are reflected immediately without rebuilding the image.

## Architecture

**Stack:** React 18 + Vite, MUI v5 (dark theme), framer-motion, react-router-dom, react-markdown

### Navigation and routing

The `pages` object in `src/App.jsx` is the single source of truth for navigation. Adding a key-value pair there automatically adds a nav item and a route. Route paths are derived by lowercasing and replacing spaces with underscores (e.g. `"Faculty Fellowship Program"` → `/faculty_fellowship_program`). The site uses `HashRouter`, so all routes are hash-based (`/#/faculty_fellows`).

Pages are lazy-loaded via `React.lazy` except for `Home`, which is eager.

### Profile pages (Faculty Fellows, Leadership, Advisory Board)

Each profile page follows the same pattern:
1. **Data file** (`src/profiles/*.jsx`) — exports an array of `{ headshot, markdown_file }` objects. `headshot` is an imported image asset; `markdown_file` is a path to a `.md` file served from `public/`.
2. **Page component** (`src/pages/*.jsx`) — imports the data file and passes it to `<TeamGrid>`.
3. **Markdown files** (`public/faculty_fellows/` or `public/bios/`) — fetched at runtime by `ProfileCard` via `fetch()`.

To add a new fellow: add their image to `src/assets/`, add their `.md` bio to `public/faculty_fellows/<cohort>/`, then add an entry to the relevant profile data file in `src/profiles/`.

### Theme

Defined in `src/theme.jsx`. Dark mode, primary color `#ed1c24` (red), custom DIN font family. Typography variants (`h1`–`h4`) have specific sizes and fonts set globally — use MUI `<Typography variant="hN">` rather than raw HTML heading tags.
