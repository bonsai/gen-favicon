---
name: gen-favicon
description: Generate the parametric favicon from a GitHub repository URL and publish the generated artifact. The repository URL is sufficient input.
---

# gen-favicon

The user only needs to provide the GitHub repository URL. Do not ask for the local path when the URL identifies the repository.

Repository locations:

- GitHub: `https://github.com/bonsai/gen-favicon.git`
- WSL2 Linux: `~/gen-favicon` (`/home/bons/gen-favicon`)
- Windows UNIpath: `\\wsl.localhost\Ubuntu\home\bons\gen-favicon`
- Default branch: `main`

## Workflow

1. Resolve the GitHub URL to the repository.
2. Use the repository's default branch (`main`) unless the user specifies another branch.
3. If the repository is not already available locally, clone it to `~/gen-favicon` (UNIpath `\\wsl.localhost\Ubuntu\home\bons\gen-favicon`).
4. Run from the repository root.
5. Generate the favicon with the existing CLI:

   ```bash
   node bin/gen-favicon.js [options]
   ```

6. Verify `dist/egg.svg` exists and is non-empty.
7. Inspect the working tree with `git status --short`.
8. Stage only generated favicon output:

   ```bash
   git add dist/egg.svg
   ```

9. If there is a staged change, commit it:

   ```bash
   git commit -m "feat: generate favicon"
   ```

10. Push the current branch:

    ```bash
    git push origin main
    ```

11. Report the generated path and commit SHA.

## Edge verification (optional)

The Edge extension is a preview surface; generation and publishing are handled by this skill.

```powershell
start msedge edge://extensions
```

Developer mode ON → **Load unpacked** → select:

```text
\\wsl.localhost\Ubuntu\home\bons\gen-favicon\extension
```

After editing extension sources, click **Reload** on the extension page.

## Parameters

Pass these CLI options when requested:

- `--width`
- `--height`
- `--asymmetry`
- `--tilt`
- `--fill`
- `--stroke`
- `--stroke-width`

Example:

```bash
node bin/gen-favicon.js --width 48 --height 64 --asymmetry 0.06 --tilt -4
```

## Rules

- A GitHub repository URL is sufficient input for the whole workflow.
- Do not ask the user to provide clone commands or local paths unless cloning/access actually fails.
- Keep the parametric geometry and renderer separate.
- Do not modify extension files during normal generation.
- Do not stage unrelated working-tree changes.
- Never force-push.
- If there is nothing to commit, report that the generated artifact is already up to date.