# How to update your website

This folder (`~/Sites/zuvielejojosweb-github`) is connected to GitHub.
Netlify rebuilds zuvielejojos.xyz automatically whenever `main` changes.

## 1. Make your changes

Edit files in this folder (or ask Claude to). Text for the elevator pitch
lives in `src/data/elevatorPitch.ts`.

## 2. Save them as a commit

```
cd ~/Sites/zuvielejojosweb-github
git add -A
git commit -m "Describe what you changed"
```

## 3. Push to GitHub

```
git push origin main
```

If it asks for a password, paste a GitHub token (not your GitHub password).
Nothing shows while you paste; press Enter.

## 4. Wait for Netlify

The live site updates within 1–2 minutes. You can watch it at app.netlify.com.

Never use `git push --force`: it would overwrite the site's history on GitHub.
