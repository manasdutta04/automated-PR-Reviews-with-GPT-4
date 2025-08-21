# Flip a Coin

A tiny, accessible coin‑flip game built with vanilla HTML/CSS/JS. Click Flip to animate a 3D coin and track Heads/Tails statistics. Designed to be lightweight, keyboard-friendly, and screen‑reader aware.

## Features

- 3D flip animation with smooth easing
- Live stats: Heads, Tails, Total
- Accessible by default (ARIA roles/labels, polite updates)
- Reduced motion support via prefers-reduced-motion
- No build tools or dependencies

## Quick start

Open directly
- Double‑click `index.html` in your file explorer to run it in a browser.


## How to play

- Press Flip to spin the coin.
- The result is announced and the counters update.
- Press Reset to clear stats and start over.

## Project structure

```
index.html   # Markup and UI structure
style.css    # Visual design, 3D coin, animations
script.js    # Game logic, accessibility, and state
```

## Accessibility

- The coin is exposed as a `role="img"` with an `aria-label` that updates to “Coin showing Heads/Tails”.
- Results and stats are announced politely (`aria-live="polite"`/`role="status"`).
- Motion sensitivity is respected: when `prefers-reduced-motion` is enabled, the flip animation duration is shortened.

## Customization

- Animation speed: tweak `--flip-duration` in `style.css`.
- Colors/gradients: adjust CSS variables at `:root`.
- Labels/text: edit the strings in `index.html` and `script.js`.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). JavaScript must be enabled.

## License

MIT © 2025 Manas Dutta. See `LICENSE` for details.


