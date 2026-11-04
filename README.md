# YAYA. — Latoya Matai Portfolio

Personal portfolio for **Latoya Matai**, known as Yaya — Software Engineer in Training.

Built for the **AWS Student Builder Challenge** and deployed through **AWS Amplify Hosting**.

---

## What's in here

| File | Purpose |
|---|---|
| `index.html` | Single-page portfolio |
| `styles.css` | All visual styling |
| `script.js` | Hamburger nav, timeline fill, fade-in, active nav |
| `yaya-photo.jpg` | Your portrait — **see step below** |
| `README.md` | This file |

> `plan.md` and `MASTER_PROMPT_Yaya_Portfolio.md` are planning documents.
> They are **not** part of the public website and do not need to be deployed.

---

## Before you preview — add your photo

The site references **`yaya-photo.jpg`** in the project root.

1. Rename your portrait photo to `yaya-photo.jpg`.
2. Place it in the same folder as `index.html`.

If the file is missing the site shows a fallback placeholder — everything else still works.

---

## Preview locally

No build step needed. Open `index.html` directly in your browser:

```
# Double-click index.html   — or —
# In VS Code: right-click index.html → Open with Live Server
```

The site is plain HTML/CSS/JavaScript. No npm, no framework, no terminal needed.

---

## Deploy to AWS Amplify Hosting

1. Push this repository to GitHub (make sure it's on the `main` branch).
2. Sign in to the [AWS Console](https://console.aws.amazon.com).
3. Open **AWS Amplify** → **Create new app** → **Host your web app**.
4. Connect your GitHub repository and select the `main` branch.
5. Build settings:
   - **Build command:** *(leave empty — no build step needed)*
   - **Output directory:** *(leave empty — files are at the root)*
6. Click **Save and deploy**.

Amplify will publish the site and give you a public URL.

---

## Features that work

- ✅ Full responsive layout — mobile, tablet, desktop
- ✅ Working hamburger navigation (touch, keyboard, Escape to close)
- ✅ Navigation links scroll to correct sections
- ✅ "Explore my work" button scrolls to Projects
- ✅ Scroll-progressive burgundy timeline fill
- ✅ Fade-up entrance animations for cards and timeline entries
- ✅ Active nav link highlights on scroll
- ✅ Header shadow on scroll
- ✅ `prefers-reduced-motion` respected throughout
- ✅ Keyboard focus states on all interactive elements
- ✅ Semantic HTML, ARIA labels, descriptive alt text
- ✅ Email and LinkedIn links are real and working
- ✅ Honest placeholder shown if portrait photo file is missing

---

## Coming later (not yet implemented)

- **Hand-drawn animated pose video** — a planned creative feature where a hand-drawn animation of Yaya replaces the portrait. A small pulsing dot in the hero indicates this is coming. The portrait component is designed to be easy to swap.
- **Downloadable CV** — add an approved public-facing PDF as `yaya-cv.pdf` and uncomment the download link.

---

## Built with

Plain HTML, CSS, and JavaScript — no frameworks, no packages, no build step.  
Deployed on AWS Amplify Hosting.

---

*References available upon request. Contact: latoyamatai0615@gmail.com*
