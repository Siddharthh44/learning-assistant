# Folio — your study space

A responsive, single-subject-at-a-time learning assistant built with HTML, CSS, and vanilla JavaScript. It includes sample subjects and lessons, a notes → study guide → 10-question quiz → evaluation flow, typed and browser speech input, local progress tracking, and a strict 10/10 topic mastery gate.

## Run locally

Open `index.html` in a modern browser, or serve this directory with any static file server. No build step, package install, API key, or backend is needed for the demo.

## Project files

- `index.html` — app shell, navigation, dashboard views, and modal host.
- `styles.css` — visual tokens, responsive layout, and workflow components.
- `app.js` — sample content, quiz and scoring logic, state rendering, speech input, and `localStorage` persistence.

## Try the sample

Choose Biology → The building blocks of life → Start learning. The sample notes are prefilled. Read the study guide, answer all ten questions, and get 10/10 to unlock the next topic. Other sample subjects include Literature, Physics, and History. You can add a subject with your own first topic and notes from the plus button in the sidebar.

## Demo behavior and production integration

This project runs entirely in the browser. The study guide is extracted from the opening sentences and key terms in the notes; built-in sample lessons have curated questions, while user-provided notes use note-derived recall prompts. Evaluation uses a local text matching heuristic, not an LLM or semantic grader. Progress is stored in the current browser's `localStorage` and is not synchronized between devices or users. Uploaded `.txt` and `.md` files are read locally and are not sent anywhere. Voice input uses the browser Speech Recognition API when supported; typed answers always work.

For a production AI tutor, add a backend endpoint for summarization, question generation, and answer feedback; keep provider credentials on the server, validate generated questions against the source notes, and retain the current explicit 10/10 mastery gate in application state. Add authentication and a shared database only if cross-device accounts are required.
