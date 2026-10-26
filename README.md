# Ziyu Wang — Personal academic website

A lightweight, responsive academic homepage for GitHub Pages. Plain HTML, CSS, and a small navigation script; no package installation or build step.

## Files

- `index.html`: profile, research projects, education, honors, contact.
- `styles.css`: desktop, mobile, print, and reduced-motion styles.
- `site.js`: highlights the section currently in view; all content works without JavaScript.
- `assets/Ziyu_Wang_CV.pdf`: downloadable CV, copied from the current application CV.
- `.nojekyll`: serves the site as static files.

## Publish on GitHub Pages

The verified GitHub login is `Aurora-Flipped` (a hyphen, not an underscore). The personal-site repository is `aurora-flipped.github.io` and its URL is `https://aurora-flipped.github.io/`.

1. Push these files to that repository, with `index.html` at the root of `main`.
2. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then save.
3. Wait for the Pages deployment to complete before using the public URL in applications.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Local preview

From this directory, run `python -m http.server 4173 --bind 127.0.0.1` and visit `http://127.0.0.1:4173/`.

## Updating content

Edit the corresponding text in `index.html`. Replace `assets/Ziyu_Wang_CV.pdf` whenever the CV changes. Keep research status and reported results consistent with the CV. The current site describes ongoing research and includes no unverified publication, performance gain, supervisor, or project-code link.

Do not display GPA, class rank, or percentile information in the homepage text. The downloadable application CV is maintained separately.

The application profile, outreach records, internal proposals, and original research files are outside this website directory and are not part of the website repository.
