# Resident Evil 1 Board Game Dice Roller

![Static HTML](https://img.shields.io/badge/HTML-static-E34F26?logo=html5&logoColor=white)
![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)

A fast, self-hostable dice roller for *Resident Evil: The Board Game (2023)*. Add red or blue dice, roll every die independently, click a die to remove it, or clear the pad. The site runs entirely in the browser, with no build step, account, backend, or third-party runtime assets.

## Features

- Six separate face entries for each colour, including repeated symbols as distinct physical faces.
- Immediate results and a brief roll animation; mouse hover tilts each die.
- Compact layout for desktop, mobile, and small embedded browser windows.
- Mouse and keyboard controls, visible keyboard focus, and reduced-motion support.

## Run locally

From the project directory, run:

```sh
python -m http.server 8000
```

On Windows, `py -m http.server 8000` also works. Open [http://localhost:8000](http://localhost:8000). You can also open [`index.html`](index.html) directly for local use.

## Project structure

```text
.
├── index.html       Page markup and controls
├── styles.css       Layout, colours, and interaction effects
├── app.js           Dice actions and independent face selection
├── dice-faces.js    Six face-image entries per colour
├── assets/          Twelve supplied die-face PNGs
└── tests.html       Dependency-free browser checks
```