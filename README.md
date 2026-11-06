# Kirbi Simbolon — portfolio

Static GitHub Pages site. There is no build step. `index.html` loads the scripts below and paints the chosen template.

## Content

Edit `data/profile.js`. Both templates read that file, including experience, skills, education, and `projects`.

## Templates

The page has two layouts:

- `modern` — the editorial page
- `vcard` — a dark sidebar layout adapted from [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) by codewithsadee (MIT). The license notice is in `licenses/vcard-personal-portfolio-MIT.txt`.

Switch layouts with the Template control, or open `?template=modern` or `?template=vcard`. A choice in the control, and a valid `template` query, is stored in `localStorage` under `portfolio-template`. The default for a first visit is the one line in `data/config.js`:

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
  modern: "css/site.css",
  vcard: "css/vcard.css",
  "your-id": "css/your-id.css"
}
```

3. Add `<script src="js/templates/your-id.js"></script>` in `index.html` before `js/app.js`.

The Template menu lists every registered template. Keep new copy in `data/profile.js` instead of inside the renderer.

## Preview

From the repository root:

```bash
python3 -m http.server
```

Open the URL the server prints. `about-us.html`, `services.html`, and `portfolio.html` redirect into the one-page sections.
