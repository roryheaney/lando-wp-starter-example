# Workspace Agent Guidelines

## Purpose

- Provide a fast router for agents working in this workspace.
- Keep behavior deterministic across plugins/themes.

## Instruction Precedence

- Follow direct user instructions first.
- Then follow this file and any closer (nested) `AGENTS.md`.
- Then follow project docs (for example, plugin `README.md`).
- If docs conflict with code, trust code and call out doc drift.

## Task Routing

- If working in `wp-content/plugins/Fancy-Squares-Core-Block-Enhancements/`, open:
  - `wp-content/plugins/Fancy-Squares-Core-Block-Enhancements/AGENTS.md`
  - `wp-content/plugins/Fancy-Squares-Core-Block-Enhancements/README.md`
- Treat the plugin-level `AGENTS.md` as the operating guide and `README.md` as detailed reference.

## Skills Requirement

- Before starting any task, check `.codex/skills` for available skills and apply relevant skill instructions first.
- If no skills apply, proceed normally.
- If the skills folder or a listed skill cannot be read, state that briefly and continue.
