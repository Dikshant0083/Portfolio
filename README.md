# Dikshant Choudhary — Developer Portfolio

A personal portfolio website built with **React + Vite**, showcasing my projects, skills, and achievements as a Full Stack Developer.

🔗 **Live Site:** [dikshantportfolio-six.vercel.app](https://dikshantportfolio-six.vercel.app)

---

## Sections

| Section | Description |
|---|---|
| **About** | Animated intro with portrait, rotating focus areas and key facts |
| **Experience** | Software Engineering Intern at Bajaj Finserv Health, with tabs for each area of work |
| **Projects** | Featured and secondary projects with live demo, code and detail views |
| **Skills** | Frontend, backend, languages and tools |
| **Achievements** | HackIndia 2025 photo gallery and Forage job-simulation certificates |
| **Education** | Animated timeline |
| **Contact** | Web3Forms contact form, copy-to-clipboard email and direct links |

---

## Features

- **Framer Motion animations**: letter-by-letter name reveal, orbiting tech logos, cursor spotlight, scroll progress bar, timeline that draws on scroll, animated modals and tabs
- **Respects reduced motion**: animations are turned off when the OS asks for reduced motion
- **Fully responsive**: tested at mobile, laptop and desktop widths
- **Accessible**: keyboard-friendly modals (Escape to close, arrow keys in the gallery and tabs) and visible focus styles
- **Fast**: images served as optimized WebP (about 1 MB in total instead of 7.5 MB) and self-hosted fonts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | Bricolage Grotesque and Instrument Sans (self-hosted via Fontsource) |
| Contact form | Web3Forms |
| Deployment | Vercel |

---

## Updating content

All text, links and images live in `src/constants.js`: profile, experience, projects, skills, achievements and education. Edit that file to update the site without touching the components.

---

## Contact form setup (Web3Forms)

The contact form sends messages through [Web3Forms](https://web3forms.com), a free form service (250 submissions a month), so no server or email password is needed.

1. Go to https://web3forms.com, enter the email address that should receive messages, and create an access key. The key arrives by email.
2. Paste it into `web3formsAccessKey` in `src/constants.js`. The key is safe to keep in public code.

Each message arrives in your inbox with the visitor's email as Reply-To, so you can reply directly. Until a key is added, or if sending fails, the form opens the visitor's email app instead.

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dikshant0083/<repo-name>

# Navigate into the project
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/       # One folder per section, plus shared ui/ pieces
├── assets/           # Images (optimized WebP copies in assets/optimized)
├── constants.js      # All portfolio content
├── App.jsx
└── main.jsx
```

---

## Contact

**Dikshant Choudhary**
- Email: [khileridikshant@gmail.com](mailto:khileridikshant@gmail.com)
- LinkedIn: [linkedin.com/in/dikshantchoudhary](https://linkedin.com/in/dikshantchoudhary)
- GitHub: [github.com/Dikshant0083](https://github.com/Dikshant0083)

---

> Built with React + Vite and deployed on Vercel.
