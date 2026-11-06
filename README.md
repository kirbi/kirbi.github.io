# Kirbi Simbolon — portfolio

Static GitHub Pages site. There is no build step. `index.html` loads the scripts below and paints the chosen template.

## Content

Edit `data/profile.js`. Both templates read that file. English copy is `PROFILE_LOCALES.en` and Indonesian copy is `PROFILE_LOCALES.id`. Shared facts (name, email, photo, links, CV path) sit at the top of the file.

## Templates

The page has two layouts:

- `modern` — the editorial page
- `vcard` — a dark sidebar layout adapted from [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) by codewithsadee (MIT). The license notice is in `licenses/vcard-personal-portfolio-MIT.txt`.

The Template control is hidden on a normal visit. It appears when the URL has a valid `?template=modern` or `?template=vcard`, and it stays available after that choice is stored in `localStorage` under `portfolio-template`. While it is open it also links to the shortcut pages below. The default for a first visit to the site root is the one line in `data/config.js`:

```js
defaultTemplate: "modern",
```

## Add a template

1. Create `js/templates/your-id.js` and push one object onto `window.PORTFOLIO_TEMPLATES` before `js/app.js` runs:

```js
window.PORTFOLIO_TEMPLATES.push({
  id: "your-id",
  label: "Your label",
  themeColor: "#111111",
  render: function (profile, mount, ctx) {
    mount.innerHTML = "<main id=\"main\"></main>";
  }
});
```

`render` receives the shared profile, the `#app` element, and `ctx.page` when a template uses internal tabs.

2. Add its stylesheet in `data/config.js` so the correct file loads before paint:

```js
stylesheets: {
  modern: "/css/site.css",
  vcard: "/css/vcard.css",
  "your-id": "/css/your-id.css"
}
```

3. Add `<script src="js/templates/your-id.js"></script>` in `index.html` before `js/app.js`.

The Template menu lists every registered template. Keep new copy in `data/profile.js` instead of inside the renderer.

## Shortcut URLs

These addresses render that template directly. Styles, scripts, the photo, and the CV use site-root paths, so they load from either folder. `?lang=id` and `?lang=en` still work.

- https://kirbi.github.io/modern/
- https://kirbi.github.io/vcard/
- https://kirbi.github.io/vcard/?lang=id

A shortcut wins over `?template=` and over the stored template. It does not write `portfolio-template` by itself. The site root, https://kirbi.github.io/, still follows `?template=`, then the stored choice, then `defaultTemplate`.

## Language

The page opens in English. `?lang=id` or `?lang=en` selects a language, and a valid choice is stored under `portfolio-lang`. The EN / ID control in each template does the same. UI labels and the profile copy both come from `data/profile.js`.

The downloadable CV is `/assets/Kirbi-Simbolon-CV.pdf` (email, GitHub, and LinkedIn only).

## Preview

From the repository root:

```bash
python3 -m http.server
```

Open the URL the server prints. `about-us.html`, `services.html`, and `portfolio.html` redirect into the one-page sections.
