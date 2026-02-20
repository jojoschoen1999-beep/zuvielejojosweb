# How to update your website

## Step 1: Replace the files

Open Terminal and run these commands one by one:

```
cd /Users/jojo/Downloads
```

If you still have the old `website` folder, delete it:
```
rm -rf website
```

Unzip the new download (replace the filename if needed):
```
unzip zuvielejojos-website.zip
```

## Step 2: Test locally (optional but recommended)

```
cd website
npm install
npm run dev
```

Then open http://localhost:4321 in your browser to check everything looks good.
Press Ctrl+C to stop the local server when done.

## Step 3: Push to GitHub

```
cd /Users/jojo/Downloads/website
git init
git add .
git commit -m "Website v2 - brain theme update"
git remote add origin https://github.com/jojoschoen1999-beep/zuvielejojosweb.git
git push -u origin main --force
```

The `--force` is important because it replaces all the old code on GitHub.

## Step 4: Wait for Netlify

Netlify will automatically detect the new code and rebuild your site.
This usually takes 1-2 minutes. You can watch the progress at app.netlify.com.

That's it! Your site at zuvielejojos.xyz will be updated automatically.
