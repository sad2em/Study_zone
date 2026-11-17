# Study Zone — Instructions for AI Agents and Contributors

Read this file before changing the project or adding a lesson. These rules are part of the project, not optional style suggestions.

## Product and audience

- Study Zone is an Arabic-first, RTL learning project for practical OSINT and defensive cybersecurity.
- This is a static front-end project: HTML, CSS, and browser JavaScript only. No backend, database, API server, Node.js application server, or server-side runtime.
- Keep the existing vanilla JavaScript + Vite setup. Vite and the existing Node-based scripts are local development/build/test tooling only; they are not part of the deployed site. Do not add any new Node runtime, server, framework, or dependency.
- Match the established lesson format and navigation used by Sessions 01–05. Inspect neighbouring lessons before editing.
- Write natural, precise Arabic. Avoid generic AI-style introductions, repeated conclusions, inflated claims, filler paragraphs, decorative jargon, and fake case studies presented as facts.
- Every paragraph must teach a concept, explain a limitation, give an actionable learning step, or support an assessment.

## Editorial standard

- Preserve source terminology and the purpose of the supplied material, but verify factual claims before carrying them into the course.
- Prefer primary sources: official registries, regulators, legislation, standards bodies, technical documentation, and original filings. Use secondary databases as discovery aids and link back to the original record whenever possible.
- Put a direct source link beside the relevant lesson block using `link:['Source name','https://...']`. Do not invent URLs, citations, case studies, quotations, statistics, or capabilities.
- For changing information (sanctions lists, laws, tool features, pricing, APIs), state the relevant jurisdiction and check the source before editing. Add a review date when that helps future maintainers.
- Distinguish clearly between facts, analysis, hypotheses, and unknowns. Note the source date, access date, relevant jurisdiction, and data coverage where they matter.
- Explain source limitations. Examples: registry filings may be incomplete or unverified; leaked databases are historical and partial; shared IPs do not establish common ownership; a fuzzy sanctions match is not a confirmed identity match.
- Never imply that a company/person is guilty because it appears in a leak, sanctions-search result, adverse-media hit, or relationship graph. Treat offshore structures as potentially legitimate unless specific evidence supports a different conclusion.
- Explain legal and regulatory concepts with jurisdictional boundaries. Do not present a local ownership threshold, sanctions regime, filing rule, or disclosure requirement as universal legal advice.

## Learning priorities

Lesson body blocks use exactly these tags:

- `must`: **احفظ وافهم** — core definitions, essential distinctions, safety rules, formulas, and workflow steps that learners should remember.
- `understand`: **افهم وطبّق** — concepts that require interpretation, comparison, or practical application.
- `ai`: **مرجع / AI** — optional tools, external references, technical examples, and supplementary material.

Use the tags deliberately. Do not mark every paragraph as `must`. A tool name alone is not a learning objective.

## Lesson data contract

Each lesson content file exports:

- `lesson`: an object with `id`, `title`, `subtitle`, `duration`, and `sections`.
- Each section has a unique `id`, English `en`, Arabic `title`, `time` formatted as `'N دقيقة'`, a concise `lead`, a `body` array, and a specific `warning`. Optional `icon` provides a meaningful symbol, and optional `flow` is a short array of 4–5 steps rendered as a compact visual process strip.
- Each body block has `h`, `p`, and one of the three allowed `tag` values. Optional `link:['Label','URL']` and `code` are supported.
- `cards`: concise question/answer pairs for spaced repetition.
- A separate `exercises.js` exports `exercises`.

Unless the maintainer specifies otherwise:

- Design each session for 120 minutes and make the section timings add up to exactly 120.
- Aim for 8–10 meaningful sections, at least 10 review cards, and at least 10 exercises.
- Include a balance of recall, classification, matching, scenario decisions, evidence evaluation, sequencing, short written responses, practical work, and a structured report when appropriate.
- Use unique section and exercise IDs prefixed by the session number (for example `s5-` for Session 05 exercises).
- Labs must have a defined objective, safe scope, expected output, and clear evaluation criteria. Avoid filler tasks.

## Safe practical scope

- Keep OSINT and CORPINT labs lawful, proportionate, and source-led.
- Use fictional entities and synthetic records by default. A live technical exercise must use an asset the learner owns or has written authorization to assess.
- Passive-recon results do not authorize port scanning, service probing, exploitation, credential testing, or contacting discovered systems.
- Do not instruct learners to impersonate real people, target employees, obtain private records, bypass access controls, steal credentials, or exploit suppliers as a route into another organization.
- Employee and supplier research should support governance, due diligence, and third-party risk management—not targeting or social engineering.
- Minimize personal data. Do not include private phone numbers, home addresses, passwords, account identifiers, or leaked credentials in examples.
- For sanctions and beneficial-ownership work, teach entity resolution, false-positive handling, date control, source checking, and referral to qualified legal/compliance staff.

## Integration checklist for every new session

A new lesson is not complete just because its content file exists. Update all relevant pieces:

1. Add `src/lessons/lesson-NN/content.js` and `exercises.js`.
2. Import lesson, cards, and exercises in `src/js/app.js`.
3. Add the course tile and accurate section count in `dashboard()`.
4. Add the session link and selected state in `side()`.
5. Add the session selector in `render()` so lesson, lab, review, and notes routes load the correct data.
6. Use semantic, meaningful icons and concise visual flows where they improve comprehension. Do not add decoration that does not explain the lesson.
7. Update the dashboard's session count and the “جلسات تعليمية” label.
8. Add `tests/sessionNN.test.js` for structure, timing, tags, unique IDs, exercise types, and representative grading. Tests may use the existing Node test runner, but this must never create a Node backend or runtime dependency in the site.
9. Update `README.md` and keep this file and `docs/COURSE_AUTHORING_STANDARD.md` consistent.
10. Run `npm test` and `npm run build` when execution access is available. Do not claim tests passed unless they were actually run.
11. Review the diff for broken imports, route selection, duplicated content, incorrect counts, stale external links, and accidental changes to old lessons.

## Handoff

When reporting a change, list what was actually added, the session's section/card/exercise counts, the commit or files changed, and whether tests/build were executed. State deployment uncertainty honestly. Never claim a live site was visually tested unless it was opened and checked.
