# Course Authoring Standard

This document defines how Study Zone lessons are researched, written, assessed, and maintained. It should be followed by human authors and AI tools.

## 1. Editorial voice

- Arabic is the primary language; keep standard technical terms in English where they are useful.
- Write like a practitioner teaching another practitioner: direct, calm, specific, and economical.
- Remove generic introductions, motivational filler, repeated summaries, empty transitions, and claims such as “master the secrets” or “everything you need to know”.
- Prefer concrete examples, source-backed distinctions, short explanations, and practical outputs.
- Do not pretend a tool or website guarantees accuracy, anonymity, coverage, or attribution.
- Do not manufacture a real-world case study from a vague source note. Use a clearly labelled fictional scenario when source documentation is incomplete.

## 2. Source and claim discipline

For every substantive external claim:

1. Prefer the original legal registry, regulator, standard, technical documentation, filing, or first-party publication.
2. Link directly to the relevant source in the lesson block.
3. Record the jurisdiction and time period where applicable.
4. Explain the source's limitations and any known coverage gaps.
5. Separate what the source states from the author's interpretation.
6. Use a second independent source for consequential claims where practical.
7. Recheck changing lists, legislation, services, API behaviour, and tool availability before publishing.

A source list is not a proof engine. A result in a company database, sanctions search, leaked-data project, adverse-media collection, or graph does not independently establish wrongdoing or identity. Resolve names using reliable identifiers and corroborating records.

## 3. Priority labels shown in the UI

| Data tag | UI label | Use it for |
| --- | --- | --- |
| `must` | احفظ وافهم | Definitions, essential distinctions, core workflow, critical warnings, important formulas |
| `understand` | افهم وطبّق | Interpretation, comparisons, applied examples, scenario reasoning |
| `ai` | مرجع / AI | Optional tools, external references, supplementary examples and further reading |

Do not mark every block as important. Learners should be able to distinguish what to remember from what to understand and what to consult later.

## 4. Session design

Default session target is 120 minutes. Use approximately 8–10 sections with a purposeful progression. Section time values must add exactly to the session duration.

A practical session normally includes:

- Foundations and key terminology.
- A repeatable methodology or workflow.
- Source evaluation and limitations.
- Practical application with a defined scope.
- Review cards for spaced repetition.
- Interactive exercises and a final report or deliverable.

Avoid padding a session with repeated paragraphs or a long catalogue of tools. Introduce a tool only when it supports a specific research question.

## 5. Assessments

Aim for at least 10 review cards and 10 varied exercises per session.

Assessment types supported by the current engine include:

- `classification`
- `matching`
- `sequence`
- `scenario`
- `evidence`
- `ach`
- `mistake`
- `short`
- `practical`
- `report`

Use `correct` for objectively gradable questions. For open-ended responses, provide a model answer and make clear that the application performs a self-review aid, not semantic expert grading. A report exercise should state that its automated score checks field completeness only.

A useful lab describes: objective, authorized scope, inputs, steps, expected output, and evaluation criteria. Prefer synthetic datasets and fictitious organizations.

## 6. Safety and legal boundaries

- Use public sources and lawful collection methods.
- Use live technical tools only against assets owned by the learner or covered by written authorization.
- Do not turn passive discovery into active scanning or exploitation.
- Do not target employees, vendors, or family members as access paths.
- Do not teach impersonation, credential collection, private-data extraction, evasion, or manipulation of real people.
- Treat leaked datasets and offshore records as partial historical sources. Presence in such a database is not evidence of an offence.
- Treat sanctions matches as preliminary screening results. Confirm identity, identifiers, applicable jurisdiction, current list version, and ownership/control rules with qualified compliance or legal staff.
- Minimize personal data and do not include secrets or private identifiers in examples.

## 7. Required project integration

For every new session, see `AGENTS.md` for the repository integration checklist. The minimum is:

- `content.js`, `exercises.js`, and a corresponding test file.
- App imports, dashboard tile, lesson navigation, and route selection.
- Accurate total session and section counts.
- README update.
- Tests for section count, duration, allowed tags, unique IDs, cards, exercises, and representative grading.
- Actual test/build execution where available. Report limitations honestly.

## 8. Final editorial review

Before handoff, verify:

- Every paragraph adds instructional value.
- Every important claim has a suitable source link.
- Primary sources are preferred over aggregators.
- Current and jurisdiction-specific information is not presented as universal.
- Important, understanding, and reference material are labelled correctly.
- Practical work is safely scoped and produces a reviewable result.
- No invented facts, unsupported accusations, misleading tool claims, or broken links remain.
