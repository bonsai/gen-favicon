# gen-favicon

Parametric egg favicon generator CLI.

The current egg is a sample geometry. The parameter model is deliberately independent from rendering and output so it can be connected to other generators later.

## Usage

```bash
npm install
node bin/gen-favicon.js
node bin/gen-favicon.js --width 48 --height 64 --asymmetry 0.06 --tilt -4
```

Output:

```text
dist/egg.svg
```

## Architecture

```text
parameters → egg geometry → renderer → output
```

Current implementation provides the JavaScript parametric geometry and SVG renderer. PNG/ICO exporters can be attached later without changing the egg model.

## CLI parameters

- `--width`
- `--height`
- `--asymmetry`
- `--tilt`
- `--fill`
- `--stroke`
- `--stroke-width`
