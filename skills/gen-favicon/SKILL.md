---
name: gen-favicon
description: Generate the parametric favicon and publish only the generated artifact to the current Git repository.
---

# gen-favicon

Use this skill when the user asks to generate or regenerate the favicon and publish the result.

## Workflow

1. Run from the repository root.
2. Generate the favicon with the existing CLI:

   ```bash
   node bin/gen-favicon.js [options]
   ```

3. Verify `dist/egg.svg` exists and is non-empty.
4. Inspect the working tree with `git status --short`.
5. Stage only generated favicon output:

   ```bash
   git add dist/egg.svg
   ```

6. If there is a staged change, commit it:

   ```bash
   git commit -m "feat: generate favicon"
   ```

7. Push the current branch:

   ```bash
   git push
   ```

8. Report the generated path and commit SHA.

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

- Keep the parametric geometry and renderer separate.
- Do not modify the extension files during normal generation.
- Do not stage unrelated working-tree changes.
- Never force-push.
- If there is nothing to commit, report that the generated artifact is already up to date.
- The Edge extension is a preview/test surface; generation and publishing are handled by this skill.
