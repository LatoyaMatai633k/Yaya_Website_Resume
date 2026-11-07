# Yaya Codes - Latoya Matai Portfolio

Personal portfolio for **Latoya Matai**, known as Yaya - Software Engineer in Training.

Built for the **AWS Student Builder Challenge** and deployed on **AWS Amplify Hosting**.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete single-page portfolio |
| `styles.css` | All visual styling |
| `script.js` | Nav, timeline, typewriter, count-up, fade-in, active nav |
| `Yaya Codes Logo.png` | Logo - already in repository |
| `yaya-photo.jpg` | Portrait - already in repository |
| `README.md` | This file |

> `plan.md` and `MASTER_PROMPT_Yaya_Portfolio.md` are planning documents and are not part of the public website.

---

## Preview locally

**Option A - Double-click** `index.html` in File Explorer. Opens in your browser with no setup.

**Option B - Live Server** (recommended, ensures images and fonts load correctly):
1. In Kiro or VS Code: `Ctrl+Shift+X`, search for **Live Server** by Ritwick Dey, install it
2. Right-click `index.html` in the file explorer, choose **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

**Option C - Python:**
```powershell
cd "C:\Users\latoy\Downloads\Yaya_Website_Resume"
python -m http.server 3000
```
Then open `http://localhost:3000`

---

## Add the CV download

When your final CV PDF is ready:
1. Save it as **`yaya-cv.pdf`** in the same folder as `index.html`
2. In `index.html`, find the CV download button (search for `btn-cv`)
3. Change `href="#"` to `href="yaya-cv.pdf"`
4. Add `download="Latoya-Matai-CV.pdf"` to the anchor tag
5. Remove `aria-disabled="true"` and `onclick="return false;"`
6. Remove the `<p class="cv-note">` paragraph below the button

---

## Deploy to AWS Amplify Hosting

1. Push this repository to GitHub (`main` branch)
2. Sign in to the [AWS Console](https://console.aws.amazon.com)
3. Open **AWS Amplify**, choose **Create new app**, then **Host your web app**
4. Connect GitHub, select `main` branch
5. Leave build command and output directory **empty** (no build step needed)
6. Click **Save and deploy**

---

## What works

- Full responsive layout - mobile, tablet, desktop
- Full-screen mobile navigation overlay (hamburger button, Escape key, link-close)
- All 8 navigation links scroll to correct sections
- Two-column hero: text left, hand-drawn video right (full 3:4 frame, contain, no cropping)
- Hero video autoplays, loops, muted, plays inline on mobile; click-to-play fallback if browser blocks autoplay
- Download CV button in hero and contact section (links to latoya-resume.pdf)
- Hero name centered on mobile; typewriter at 140ms per character
- Count-up stats in About section replay every time section enters viewport (scrolling down or up)
- Scroll-progressive burgundy timeline fill
- Fade-up entrance animations on cards
- Active nav highlight follows scroll
- Header shadow on scroll
- Logo (yaya-codes-logo.png) in header (top-left) and footer
- Yaya assistant launcher fixed bottom-right; opens/closes panel, greeting, suggested questions, send
- `prefers-reduced-motion` respected throughout
- Keyboard focus states, ARIA labels, semantic HTML throughout
- Email and LinkedIn links functional

## Items needing your input

| Item | Action needed |
|---|---|
| **Valentine's Gift Project** | Replace `REPLACE-WITH-CORRECT-REPOSITORY` with actual URL |
| **Thuso AI** (hackathon version) | Replace link placeholder with actual URL |
| **Thuso AI** (data platform extension) | Replace link placeholder with actual URL |
| **Nurse in Your Pocket** | Replace link placeholder with actual URL |
| **Yazi Dev** | Replace link placeholder + confirm description |
| **Campus Game Project** | Replace link placeholder with actual URL |
| **RoyalSquarePortal** | Confirm tech stack and contribution details |
| **KingaPesa** | Confirm tech stack and contribution details |
| **Yaya assistant RAG** | Connect knowledge base (next phase) |

---

## Items needing your input

| Item | Action needed |
|---|---|
| **CV download** | Add `yaya-cv.pdf` to project root and update button (see instructions above) |
| **Valentine's Gift Project** | Replace `REPLACE-WITH-CORRECT-REPOSITORY` with actual URL |
| **Thuso AI** (hackathon version) | Replace link placeholder with actual URL |
| **Thuso AI** (data platform extension) | Replace link placeholder with actual URL |
| **Nurse in Your Pocket** | Replace link placeholder with actual URL |
| **Yazi Dev** | Replace link placeholder with actual URL + confirm description |
| **Campus Game Project** | Replace link placeholder with actual URL |
| **RoyalSquarePortal** | Confirm tech stack and contribution details |
| **KingaPesa** | Confirm tech stack and contribution details |

---

## Coming later

- Hand-drawn animated pose video (portrait component is easy to swap when ready)
- Ask Yaya AI assistant

---

*Built with plain HTML, CSS, and JavaScript - Deployed on AWS Amplify*
