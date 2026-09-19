# cv: personal CV website (React + Vite)

My résumé as a single-page website, written in React and built with Vite. It is
a static front-end: all the content ships in the JavaScript bundle and is
hosted on Vercel.

**Live demo:** <https://cv-lilac-one.vercel.app>

The content of the CV is in French.

## What the page shows

- **Header:** profile photo, name, job title and contact lines.
- **Profile:** a short summary paragraph.
- **Education:** a dated list.
- **Skills**, grouped by area:
  - React: hooks, Context API, React Router, REST calls, deployment
  - Fastify: REST routes, PostgreSQL plugin, JWT/session auth
  - PostgreSQL: roles and permissions, backup/restore, cloud hosting
  - Office suite
  - Git, Docker, Bash and npm
- **Experience** and **Languages** sections.

Each entry has an icon from `react-icons`. The page uses a self-hosted
handwriting font, *Edu NSW ACT Hand Pre* (SIL Open Font License, in
`public/fonts/`).

## How it works

- All content is hard-coded in `src/App.jsx`. There is no backend, no API call
  and no CMS.
- The page is built from small presentational components:
  - `Entete`: header with the photo and contact block
  - `Body`: every section below the header
  - `Ligne`: one row with an icon, an optional bold label and text
  - `Titre`: a plain text line
- `Ligne` takes an `icon_name` string and looks up the icon component in the
  `iconeObject` map. For example, `"react"` maps to `FaReact` and `"postgree"`
  maps to `SiPostgresql`. Icon size and colour are passed as props.
- Styling is plain CSS in `src/App.css`, laid out with flexbox.
- `vite build` produces a static bundle in `dist/`, which Vercel serves.

## Tech stack

- React 19 and react-dom
- Vite 6 with `@vitejs/plugin-react`
- react-icons 5
- ESLint 9 (flat config)
- Vercel for hosting

## Run it locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev        # dev server on http://localhost:5173 (bound to 0.0.0.0, so reachable on the LAN)
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

## Project layout

```
cv/
├── index.html              Vite entry HTML
├── vite.config.js          React plugin, dev server host/port
├── eslint.config.js
├── public/
│   └── fonts/              Edu NSW ACT Hand Pre font files + OFL license
└── src/
    ├── main.jsx            React root
    ├── App.jsx             all CV content and components
    ├── App.css             styles + @font-face
    └── assets/             profile photo
```

## Limitations and status

- The site is live and deployed on Vercel.
- The content lives in JSX. To update the CV you edit `App.jsx` and redeploy.
- The layout has no CSS media queries. It was designed for desktop and is not
  tuned for small screens.
- `index.html` still has the default Vite title and favicon.
- There are no automated tests.
