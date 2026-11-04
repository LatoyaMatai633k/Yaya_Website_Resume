# MASTER PROMPT — Build Yaya’s AWS Student Builder Challenge Portfolio

You are a careful frontend engineer helping build Latoya Matai’s portfolio for the AWS Student Builder Challenge. Follow `plan.md` as the project brief and use the attached CV PDF and attached professional photo as read-only references.

## Before coding
1. Inspect the existing repository and read `plan.md` fully.
2. Read the attached CV for accurate role names, dates, education, training, and project descriptions.
3. Use the attached professional photo as the current homepage portrait on the RIGHT side of the hero on desktop. Do not replace it with a stock photo or generated person. Preserve her real appearance.
4. If something essential is missing, ask only one focused question. Otherwise proceed without delaying for nonessential details.
5. Do not overwrite useful existing work without inspecting it first.

## Identity and wording
- Name: Latoya Matai, known as Yaya.
- Preferred professional title: **Software Engineer in Training**.
- She studies Software Engineering at WeThinkCode_ and is pursuing a Bachelor's degree in Data Science at IU International University of Applied Sciences in Germany.
- Do not call her a “Software Developer” as her main professional identity.
- Do not claim she has completed qualifications or certificates that are still in progress.
- Use only facts supported by `plan.md`, the attached CV, or details Yaya explicitly confirms.

## Main task
Build a complete, polished, responsive, single-page portfolio using only:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

Use plain HTML, CSS, and JavaScript. Do not add frameworks, packages, a build step, a backend, or paid services. Do not access or configure AWS. Prepare the site so Yaya can connect the public GitHub repository to AWS Amplify Hosting herself.

## Homepage layout — important
On desktop, create a balanced two-column hero:
- **LEFT:** “Hi, I’m Latoya, also known as Yaya.” Show “Software Engineer in Training,” followed by a concise introduction and a clear “Explore my work” button/link.
- **RIGHT:** Display the attached professional photo with a thoughtful crop, responsive sizing, and restrained styling. The photo is the real portrait for the first version.
- Below the hero, place the About Me section, followed by skills, projects, achievements, experience/volunteering timeline, education/training, contact, and footer.
- The professional photo is the current hero image. Later, Yaya plans to create a hand-drawn animated video of herself performing her signature pose. Do NOT invent or fake that video now. Keep the portrait component easy to replace with the real video/animation later. The pose-video concept can be represented by a small, honest, visible hint or placeholder, but it must not suggest that an animation is already working if it is not.

## Visual identity
- Wordmark: `YAYA.`
- Optional favicon: `Y.`
- Use warm white/white, deep burgundy or espresso, and restrained pink accents.
- Aim for editorial, polished, personal, memorable, and recruiter-friendly.
- Use solid colors, readable typography, intentional spacing, modest corner rounding, and subtle shadows.
- Do NOT use gradients, glassmorphism, floating blobs, cursive fonts, excessive animations, emoji decorations, or generic AI-template styling.
- Avoid clutter and over-designed effects. The real photo should remain the focus of the hero.

## Required sections
1. Header with wordmark and navigation.
2. Hero with text left and attached photo right.
3. About Me.
4. Skills / Tech Superpowers.
5. Projects.
6. Achievements.
7. Experience and volunteering timeline.
8. Education and training.
9. Contact.
10. Footer.

Use `plan.md` for the project list and details. The CV is the source of truth for employment and education facts. Be careful to distinguish solo projects from collaborative, adapted, or tutorial projects. Do not invent URLs, technologies, project outcomes, dates, metrics, or features. Only show project/demo links when verified.

## Timeline feature
Create a vertical timeline for experience, volunteering, education, and training. A solid burgundy/pink line may progressively fill as the visitor scrolls through it. Keep it subtle, accessible, and reliable, with a reduced-motion/non-animated fallback. Use the CV for accurate titles and dates, including the WeThinkCode_ volunteer role as Event Coordinator and Graphic Designer (September 2025–August 2026) and Software Engineer in Training at WeThinkCode_ (September 2025–December 2026, in progress).

## Mobile friendliness is mandatory
Build mobile-first and verify at phone, tablet, and desktop sizes.
- On small screens, stack hero text and portrait in a clean, intentional order; no overflow or horizontal scrolling.
- Keep headings, body text, project cards, timeline entries, and buttons readable and tappable.
- Add a working hamburger menu with accessible label and `aria-expanded`; it must open/close on touch, close when a navigation link is selected, and close with Escape.
- All navigation and controls must work with keyboard and touch.
- Add visible keyboard focus states, semantic HTML, descriptive portrait alt text, adequate contrast, and `prefers-reduced-motion` support.
- Do not rely on hover to expose important content.

## Required working interactions
Implement and test:
- Navigation links to correct sections.
- “Explore my work” scrolls to Projects.
- Responsive mobile menu.
- Verified project/contact links.
- The scroll-responsive timeline fill, if implemented reliably.
- A visible hint for the creative pose feature, clearly distinguishing the current portrait from the future animation.
- Light/dark mode only if it can be completed cleanly and tested without delaying the core challenge deliverable.

Do not create decorative buttons that do nothing. Do not fake form submissions, video playback, project demos, an AI chat assistant, or any other functionality. If a feature cannot be made real now, label it honestly or leave it out.

## CV download handling
Use the CV as a reference for content. Do not automatically copy the reference PDF into the public repository. Add a CV download button only if the approved, public-facing CV PDF is present in the project’s website assets and the link works. Never create a broken download link. `plan.md` and private reference files must not be part of the public website deployment.

## AWS / GitHub constraints
- Do not log in to AWS, change AWS settings, or deploy anything.
- Keep the website static and Amplify-friendly, with the site files at the repository root.
- Do not add a build command or output folder requirement.
- Keep `plan.md` out of the public repository if required by the challenge instructions.
- Write a `README.md` that truthfully documents implemented features, local preview instructions, and the intended Amplify Hosting deployment path.

## Quality checks before finishing
1. Check every internal navigation target and external link.
2. Confirm the professional photo loads and has meaningful alt text.
3. Test the hamburger menu with keyboard, touch, link selection, and Escape.
4. Check narrow phone, tablet, and desktop layouts for overflow and unreadable text.
5. Check keyboard focus and reduced-motion behavior.
6. Check the browser console for errors.
7. Confirm every visible button has a real action.
8. Ensure the site does not falsely claim future features are already implemented.
9. Ensure no secrets, private plan notes, or unintended personal information are exposed.
10. Update README so it matches the actual finished site.

## Finish by reporting
Give Yaya a concise summary of:
- Files created/changed.
- Features that actually work.
- Tests performed and their results.
- Any remaining item that needs her input (for example, adding the approved public CV file or replacing the portrait with the real pose animation later).

Start by inspecting `plan.md`, the attached CV, the attached photo, and the repository. Then build the first complete version. Do not spend time polishing speculative future features before the mobile-friendly core portfolio and at least one real creative interaction are working.
