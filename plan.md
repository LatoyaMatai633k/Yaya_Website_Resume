# Yaya's Software Engineering Portfolio — Final Plan

## 1. Purpose

Build a distinctive, recruiter-focused personal portfolio for Latoya Matai, known as Yaya. The portfolio should present her software engineering journey, projects, education, training, and achievements clearly and honestly. It is being built for the AWS Student Builder Challenge and must be suitable for deployment through AWS Amplify Hosting from GitHub.

## 2. Professional identity and wording

- Display name: **Latoya Matai**
- Known as: **Yaya**
- Professional title: **Software Engineer in Training**
- Field of study: Software Engineering at WeThinkCode_
- Additional study: Bachelor's degree in Data Science in progress at IU International University of Applied Sciences, Germany.
- Do not label Yaya as a “Software Developer” in the hero or as her preferred professional identity. Use “Software Engineer in Training” where a concise professional title is needed.
- Do not imply she has already completed either current qualification or holds certificates/exam credentials she is still preparing for.

## 3. Homepage / hero

Create a polished two-column hero on desktop:
- **Left:** “Hi, I’m Latoya, also known as Yaya.” Include the title “Software Engineer in Training” and a short, truthful introduction to her interests in software engineering, data science, cloud computing, AI, and quality assurance.
- **Right:** Use the professional photo supplied by Yaya as the current portrait image. Do not invent a replacement face or use a stock/AI-generated person. Crop it neatly and responsively; preserve the actual photo’s appearance.
- Include a clear “Explore my work” call-to-action that scrolls to the projects section.
- The portrait is the current homepage image. The longer-term creative feature is a hand-drawn animated video of Yaya performing her signature pose. Do not pretend the animation already exists or create a fake animation. Keep the hero image implementation easy to replace or enhance with her supplied animation/video later.
- Add a small, visible, understandable hint that signals the planned/available interactive pose feature. Do not claim that a future feature works before it is implemented. If a working creative interaction is included in the first version, make sure it actually works and the hint accurately explains it.

## 4. Page structure

Build a single-page responsive portfolio with these sections:
1. Header/navigation with YAYA. wordmark and working links.
2. Hero with introduction on the left and supplied professional photo on the right.
3. About Me.
4. Skills / Tech Superpowers.
5. Projects.
6. Achievements.
7. Experience and volunteering timeline.
8. Education and training.
9. Contact.
10. Footer with useful links.

A downloadable CV link may be included once the approved CV PDF is placed in the public website assets folder. Do not create a broken link or expose the private reference CV unintentionally.

## 5. About Me — source-grounded draft

Yaya is studying Software Engineering at WeThinkCode_ and pursuing a Bachelor's degree in Data Science at IU International University of Applied Sciences in Germany. She enjoys solving practical problems and building useful digital experiences. Her work and learning span software engineering, data, cloud, AI, and quality assurance.

Keep the wording professional, first-person where appropriate, and concise. Do not invent personal history, claims, metrics, job titles, awards, or technical experience.

## 6. Projects

Show projects as clear cards with a short explanation, relevant technologies only where verified, the status (completed / in progress where known), and working repository or demo links only when supplied and verified.

Known projects to consider:
- **Thuso AI** — recruitment-safety and data-quality project; achieved third place at the She Builds Friday campus hackathon. Describe its risk signals and data-quality purpose accurately.
- **OriginLock** — collaborative project. Yaya contributed to the blockchain component and most of the frontend. Technologies include Solana, Anchor, Rust, Spring Boot, PostgreSQL, React, TypeScript, and Tailwind CSS as listed in her CV.
- **SentinelOPS** — a responsive React dashboard developed in a collaborative, work-simulated environment. Do not claim it was a solo project.
- **Nurse in Your Pocket** — a health-information companion project in development. Describe only the features actually implemented.
- **Yazi Dev** — QA/testing-focused project; verify actual repository details before describing functionality.
- **Data Platform** — collaborative/adapted work. Clearly distinguish Yaya’s contribution from the work of others.
- **Independent game project** — include only after confirming its name, purpose, and actual working state.
- **Valentine’s gift project** — personal creative project; include only after checking the available project and what it does.
- **React tutorial project** — if included, state honestly that it was built while following a WeThinkCode_ tutorial.

Do not make up repository URLs, live demos, metrics, user counts, features, or technologies. If a URL is not available, omit the link or leave a clearly marked private planning note, not a visible broken button. Prioritize the strongest projects if including every project would make the page cluttered.

## 7. Skills and training

Use categories rather than an inflated skill cloud. Include only skills supported by Yaya’s CV and project experience. Potential categories:
- Programming: Python, Java, JavaScript, TypeScript
- Frontend: React, HTML, CSS, Tailwind CSS
- Backend and data: Java Spring Boot, SQL, PostgreSQL
- Tools and platforms: Git, GitHub, AWS, Microsoft Azure, Vercel
- Practices: object-oriented programming, responsive UI, testing/debugging, version control, collaboration, AI governance

Training/certifications should be presented accurately based on the supplied CV. Clearly distinguish completed certificates from training and exam preparation. Do not say AWS Cloud Practitioner or Microsoft Azure AI-900 is certified; these are preparation goals, not completed certifications.

## 8. Experience, volunteering, education, and timeline

Create a vertical, accessible timeline with distinct entries and dates. On scroll, a solid burgundy/pink line may progressively fill the timeline. Keep this effect subtle and usable; it must not interfere with reading or accessibility. Provide a sensible non-animated fallback.

Use the supplied CV as the source of truth for employer names, role names, dates, and descriptions. Include the WeThinkCode_ volunteer role:
- Event Coordinator and Graphic Designer, WeThinkCode_ (Volunteer), September 2025–August 2026.
- Software Engineer in Training, WeThinkCode_, September 2025–December 2026 (in progress).
Also include relevant previous employment, education, and training as recorded in the supplied CV. Keep the layout compact and do not invent extra responsibilities.

## 9. Brand and visual design

- Wordmark: **YAYA.**
- Optional simple favicon: **Y.**
- Palette: warm white / white backgrounds, deep burgundy or espresso text, restrained pink accent.
- Visual character: editorial, polished, human, personal, recruiter-friendly, and distinctive.
- Use solid colors, restrained rounded corners, subtle shadows, clear typography, and purposeful spacing.
- No gradients, glassmorphism, floating blobs, cursive fonts, excessive animation, emoji decoration, or generic “AI-generated template” styling.
- Maintain strong contrast and readable font sizes.
- The supplied professional photo should look natural and be cropped carefully. Do not retouch or alter facial identity without permission.

## 10. Mobile-first and accessibility requirements

Mobile friendliness is mandatory, not optional.
- Design mobile-first and test at narrow phone widths, common tablet widths, and desktop.
- On mobile, stack the hero content and photo cleanly; avoid tiny text, clipped headings, horizontal scrolling, or oversized image crops.
- Provide a functional hamburger menu with accessible label and expanded state. It must open/close by touch, close after choosing a section, and close with Escape.
- All navigation, buttons, forms/links, and interactions must work with keyboard and touch.
- Add visible focus states, semantic headings, descriptive alt text for the supplied portrait, sufficient color contrast, and reduced-motion support.
- Make cards and timeline entries readable on small screens.
- Do not use hover as the only way to reveal essential information.

## 11. Technical constraints and delivery

- Use plain HTML, CSS, and JavaScript only: `index.html`, `styles.css`, and `script.js`.
- No framework, package manager, build step, backend, or paid service for the initial version.
- Do not access, modify, or configure AWS on Yaya’s behalf. Prepare the static site for her to deploy through AWS Amplify Hosting.
- Keep the repository easy to deploy from the `main` branch. The public website files should live at the repository root unless there is a clear reason otherwise.
- Include a useful `README.md` that explains the project, features that really work, how to run it locally, and how it is intended to be deployed.
- Do not put `plan.md`, private notes, or private reference material in the public website. `plan.md` is for the coding agent and should not be committed to the public portfolio repository if the challenge guide says to exclude it.
- The supplied CV can be used as a private reference while building. Only copy an approved CV into public website assets if Yaya intends visitors to download it.
- Do not include API keys, secrets, or private contact information beyond the contact details Yaya has intentionally approved for public display.

## 12. Required first-version interactions

Implement and test:
- Header navigation links that scroll to the right sections.
- “Explore my work” call-to-action.
- Mobile hamburger menu.
- Any contact and project links that have verified destinations.
- Light/dark mode only if it can be implemented cleanly without compromising the design or deadline.
- A visible hint for the creative pose feature, accurately labelled for what is actually available in the first version.
- A scroll-responsive timeline fill if reliable and accessible.

Do not add buttons that do nothing, fake chat assistants, fake project demos, pretend video playback, or empty forms that claim to submit messages.

## 13. Build order

1. Read this plan and the supplied CV and professional photo.
2. Inspect the repository and preserve any useful existing work.
3. Build the complete responsive page structure and visual styling.
4. Add and test the required interactions.
5. Check links, image loading, console errors, keyboard navigation, and mobile layouts.
6. Write/update README to match the actual implementation.
7. Summarize what was implemented, what was tested, and any remaining items requiring Yaya’s input.
8. Do not start advanced pose-video animation or a CV-grounded Ask Yaya assistant until the first version is stable and the challenge-critical working interaction is complete.

## 14. Truthfulness rule

The supplied CV and information explicitly confirmed by Yaya are the source of truth. Never invent facts. If a project detail, link, certificate provider, date, or feature is unclear, leave it out or ask one focused question rather than guessing.
