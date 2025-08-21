# Flip a Coin (Vanilla HTML/CSS/JS)

A lightweight, accessible, and responsive coin flip game built with plain HTML, CSS, and JavaScript. Click the Flip button to animate the coin and record Heads/Tails outcomes. Includes live counters, a Reset action, and support for reduced-motion preferences.

## Features

- **Animated flip**: Smooth 3D-style CSS animation with distinct paths for Heads and Tails.
- **Live counters**: Tracks Heads, Tails, and Total flips.
- **Reset control**: Reset all counters and state with one click.
- **Accessible**: ARIA labels, polite announcements, keyboard focus, and reduced-motion support.
- **Responsive**: Scales nicely from mobile to desktop.
- **No build step**: Open directly in a browser.

## Quick Start

1. Clone or download this repository.
2. Open `index.html` in your favorite browser.

Optional: serve locally with a simple static server (recommended during development):

```bash
# macOS/Linux
python3 -m http.server 8000
# then visit: http://localhost:8000
```

## Project Structure

```
index.html   # Markup and app structure
style.css    # Visual styles and flip animations
script.js    # Game logic, counters, and interactions
```

## How It Works

- **Random outcome**: `Math.random()` decides Heads or Tails each flip.
- **Animation**: CSS classes `flip-heads` or `flip-tails` trigger a keyframed spin.
- **Counters**: JavaScript updates Heads/Tails/Total after each animation completes.
- **Accessibility**: The coin uses `role="img"` with an ARIA label reflecting the shown face; results and stats are announced via `aria-live` regions.

## Customization

You can tweak visuals and behavior without touching the logic:

- **Flip duration**: Adjust `--flip-duration` in `style.css` (default `1200ms`).
- **Colors**: Update CSS variables at the top of `style.css`.
- **Initial text**: Edit the placeholder text in `index.html` (element `#resultText`).
- **Outcome bias/testing**: Replace the `randomOutcome()` function in `script.js` for custom distributions during testing.

## Accessibility Notes

- Honors `prefers-reduced-motion: reduce` by shortening the flip animation.
- Announces results and updates counters in a polite, non-intrusive manner.
- Buttons are keyboard focusable; labels are descriptive.

## Development

No build tooling required. Any static server or your browser will work:

- Open `index.html` directly, or
- Use a simple server (e.g., `python3 -m http.server 8000`), then navigate to `http://localhost:8000`.

Suggested improvements (good first issues):

- Add sound effects with a mute toggle.
- Persist counters in `localStorage`.
- Show a history of recent flips or a chart.
- Add coin face images or SVG artwork.

## Contributing

Contributions are welcome! Please open an Issue or Pull Request with a clear description of your change.

## License

This project is licensed under the terms of the repository’s `LICENSE` file.

