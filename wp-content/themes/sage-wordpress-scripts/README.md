## Sage w/ @wordpress/scripts — Hybrid WordPress Theme

*A modern Sage 8 starter rebuilt around the official **`@wordpress/scripts`** toolchain.*

---

### Table of contents

1. [Features](#features)
2. [Requirements](#requirements)
3. [Quick start](#quick-start)
4. [Asset workflow](#asset-workflow)
5. [Available npm scripts](#available-npm-scripts)
6. [File & directory structure](#file--directory-structure)
7. [Customising Bootstrap 5](#customising-bootstrap-5)
8. [BrowserSync setup](#browsersync-setup)
9. [Coding standards & linting](#coding-standards--linting)
10. [Contributing](#contributing)
11. [License](#license)

---

### Features

* **Sage 8 foundations** — opinionated theme structure and a clean *theme wrapper* for hierarchical templates.
* **WordPress build tooling** — powered by `@wordpress/scripts` (webpack 5, Babel, PostCSS & autoprefixer) for zero-config JS/SCSS builds.
* **Bootstrap 5 ready** — pulled in from npm with SCSS variable overrides and a custom *BS 5 Nav Walker* (`lib/bs-5-nav-walker.php`).
* **Hot-reloading development server** — BrowserSync watches PHP, JS and SCSS and injects changes instantly.
* **Two JS entry points** — `src/js/index.js` (front-end) and `src/js/admin.js` (wp-admin).
* **Modern PHP (7.4 +)** — namespaced helpers (`lib/assets.php`, `lib/extras.php`, …) and PSR-12 formatting out of the box.
* **Lint & format on demand** — ESLint, Stylelint, Prettier and WP-coding-standards wired in.
* **Ready for internationalisation** — POT scaffold in `lang/sage.pot`.
* **MIT licensed** — free for commercial and personal projects.

---

### Requirements

| Software      | Version         | Notes                                                                                                                                                                                                                                                         |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PHP**       | 7.4 +           | Matches WP core minimum.                                                                                                                                                                                                                                      |
| **WordPress** | 6.0 +           | Single- or multisite.                                                                                                                                                                                                                                         |
| **Node.js**   | 18 LTS / 20 LTS | `npm` ships with Node.                                                                                                                                                                                                                                        |
| **npm**       | 9 +             | Dependency management.                                                                                                                                                                                                                                        |
| **dart-sass** | [1.86.3](https://github.com/sass/dart-sass/releases/tag/1.86.3)          | *Only* needed if you plan to run the optional local Sass tasks (`devsass`, `sasswatch`). Because macOS/Linux hosts sometimes ship newer Sass versions, run [1.86.3](https://github.com/sass/dart-sass/releases/tag/1.86.3) inside a lightweight VM (e.g. Docker or WSL) to guarantee parity with the production build. |
| **VM**        | Any             | For the [1.86.3](https://github.com/sass/dart-sass/releases/tag/1.86.3) Sass binary mentioned above.                                                                                                                                                                                                                   |

> **Heads-up:** Even if you skip the local Sass VM, **all SCSS is compiled by webpack during `npm run build`**, so production assets are always consistent.

---

### Quick start

```bash
# 1 — Move the theme into your WordPress installation
$ mv sage-wordpress-scripts/ wp-content/themes/my-theme

# 2 — Install Node dependencies
$ cd wp-content/themes/my-theme
$ npm install

# 3 — Adjust the BrowserSync proxy (see “BrowserSync setup” below)

# 4 — Start the development server
$ npm run start          # Compiles assets, opens https://<your-local-site>:3000

# 5 — Build for production
$ npm run build          # Minified & versioned files land in /dist
```

Activate **“Sage w/ @wordpress/scripts — Hybrid Theme”** from the WP dashboard and start building!

---

### Asset workflow

| Folder              | Purpose                                                                      |
| ------------------- | ---------------------------------------------------------------------------- |
| `src/scss/`         | Your SCSS source. `main.scss` pulls in Bootstrap and your partials.          |
| `src/js/`           | Two entry files: `index.js` (front-end) and `admin.js` (wp-admin).           |
| `src/images/`       | Static images copied 1 → 1 into `dist/images/`.                              |
| `dist/`             | Auto-generated production assets (git-ignored).                              |
| `webpack.config.js` | Extends WP’s default config — adds BrowserSync, MiniCssExtract & CopyPlugin. |

---

### Available npm scripts

| Script                  | What it does                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npm run start`         | Dev build + watch + BrowserSync (port 3000).                                                                     |
| `npm run build`         | Production build (minified/hashed). All SCSS compilation happens **here**.                                       |
| `npm run devsass`       | *Optional* one-off compile of `src/scss/main.scss` → `dist/css/style.css` using dart-sass [1.86.3](https://github.com/sass/dart-sass/releases/tag/1.86.3) inside your VM. |
| `npm run sasswatch`     | Watch-mode version of `devsass` (requires the same VM).                                                          |
| `npm run lint`          | Runs `lint:js` and `lint:css`.                                                                                   |
| `npm run lint:js`       | ESLint with WP config.                                                                                           |
| `npm run lint:css`      | Stylelint with WP rules.                                                                                         |
| `npm run lint:pkg-json` | Ensures `package.json` is valid & tidy.                                                                          |
| `npm run format`        | Prettier formatting pass on JS, JSON, CSS & Markdown.                                                            |
| `npm test`              | Jest unit tests via WP scripts.                                                                                  |

---

### File & directory structure

```
sage/
├── 404.php
├── base.php
├── front-page.php
├── functions.php        # Loads files in /lib
├── lib/
│   ├── assets.php       # Enqueues dist assets
│   ├── bs-5-nav-walker.php
│   ├── customizer.php
│   ├── extras.php
│   └── …etc
├── template-parts/      # Re-usable partials
├── src/                 # Uncompiled assets
│   ├── js/
│   ├── scss/
│   └── images/
└── dist/                # Build output (git-ignored)
```

---

### Customising Bootstrap 5

1. Open `src/scss/bootstrap-customize/_variables.scss`.
2. Copy any variable from Bootstrap’s default `_variables.scss` and tweak its value.
3. Import extra Bootstrap components by uncommenting lines in `src/scss/main.scss`.
4. Re-run `npm run start` (or let the watcher pick up changes).

---

### BrowserSync setup

`webpack.config.js` ships with a sensible default:

```js
proxy: 'https://fancy-squares.lndo.site/'
```

Replace the URL with **your** local WP domain. When `npm run start` runs BrowserSync will:

* proxy WP on **:3000**
* live-inject CSS changes
* auto-reload for PHP & JS changes

> **HTTPS local dev?** BrowserSync inherits the certificate used by your proxy host.

---

### Coding standards & linting

* **ESLint** — WordPress + Airbnb defaults (ES2015 +).
* **Stylelint** — WordPress CSS style guide.
* **Prettier** — opinionated formatting (`npm run format`).
* **EditorConfig** — consistent tab/space settings across editors.

Config files: `.eslintrc.js`, `.stylelintrc.js`, `.editorconfig`.

---

*Happy theming! 🚀*
