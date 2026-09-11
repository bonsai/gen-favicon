# gen-favicon

Parametric egg favicon generator CLI and Microsoft Edge extension.

The current egg is a sample geometry. The parameter model is deliberately independent from rendering and output so it can be connected to other generators later.

## CLI

```bash
npm install
node bin/gen-favicon.js
node bin/gen-favicon.js --width 48 --height 64 --asymmetry 0.06 --tilt -4
```

Output:

```text
dist/egg.svg
```

## Edge extension

The `extension/` directory is a Manifest V3 extension that runs entirely locally in Microsoft Edge. It reuses the same parametric egg geometry and provides a live preview plus SVG download/copy.

```powershell
git clone https://github.com/bonsai/gen-favicon.git
cd gen-favicon
```

Then open `edge://extensions`, enable **Developer mode**, choose **Load unpacked**, and select:

```text
gen-favicon\extension
```

After changing the extension source, use **Reload** on the extension page. Edge supports sideloading an unpacked extension for local testing without publishing it. 

## Architecture

```text
parameters → egg geometry → renderer → output
                    ├──── CLI/SVG
                    └──── Edge popup/SVG
```

Current CLI implementation provides JavaScript parametric geometry and SVG rendering. PNG/ICO exporters can be attached later without changing the egg model.

## CLI parameters

- `--width`
- `--height`
- `--asymmetry`
- `--tilt`
- `--fill`
- `--stroke`
- `--stroke-width`
