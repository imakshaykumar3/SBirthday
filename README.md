# Birthday Website — Refactored

The original single HTML file has been split without changing the page flow or interactions.

## Structure
- `index.html` — page shell and static overlays
- `css/style.css` — all styling and animations
- `js/config.js` — personal content to edit
- `js/assets.js` — asset paths
- `js/components.js` — reusable HTML components and scene rendering
- `js/layers.js` — stars, hearts, balloons/light effects
- `js/audio.js` — music and sound effects
- `js/effects.js` — confetti, bursts, floating effects, toast
- `js/scenes.js` — scene navigation and birthday/wish interactions
- `js/gallery.js` — memories gallery and upload handling
- `js/lightbox.js` — photo lightbox/swipe/navigation
- `js/content.js` — letter, MODEL cards, reasons
- `js/gift.js` — gift interaction
- `js/chapters.js` — chapter menu
- `js/easter-eggs.js` — teddy/star/secret interactions and pointer effects
- `js/boot.js` — loader/startup
- `assets/` — extracted images from the original file

## Where to make changes
For text, names, photos, letter, reasons, gift message, etc., edit **only `js/config.js`**.
For colors/layout/animations, edit **`css/style.css`**.

Open `index.html` in a browser.
