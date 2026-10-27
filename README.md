# Daev Mithran portfolio

React + Vite portfolio prepared for the `DaevMithran.github.io` repository.

## Local development

```bash
npm install
npm run dev
```

## Edit content

- `src/content.ts` contains spokes, projects, journey timelines and external links.
- Add a spoke by inserting one object in `spokes`. `angle` and `radius` position it around the desktop hub; mobile layout is automatic.
- Add a project by inserting one object in `projects` and placing its cover image in `public/images`.
- Hackathon and speaking entries live in the `recognition` timeline and may link to a project with `projectSlug`.

## Edit themes

`src/theme.ts` contains all theme colors and font stacks. Copy an existing theme object, give it a new key and it automatically appears in the theme selector.

## Publish to GitHub Pages

1. Create or use the repository `DaevMithran/DaevMithran.github.io`.
2. Push this project to the `main` branch.
3. In repository settings, choose **Pages → Source → GitHub Actions**.
4. The included workflow builds and deploys the site.

The build creates `dist/404.html`, allowing article URLs such as `/work/signxlit` to load correctly on GitHub Pages.
