# Link Box — Variants Index

> Index of all variants for this component.
> Shared tokens and rules: [../SKILL.md](../SKILL.md)

---

## Variants

| Variant | Spec | HTML | Purpose |
|---|---|---|---|
| initial | [initial/initial.md](./initial/initial.md) | [initial.html](./initial/initial.html) | Neutral/default styling; includes selected state |
| danger | [danger/danger.md](./danger/danger.md) | [danger.html](./danger/danger.html) | Red title + red suffix icon; no selected state |

---

## Split Axis

Variants split by `variant` prop. Both cover states: default · hover · focus · disabled. Selected is initial-only.

## Rules

- All variants inherit shared tokens from `../SKILL.md`
- Load variant SKILL before variant spec for quick-ref
- Never override shared structure tokens at variant level
- Old `state-matrix/` folder superseded by this structure — do not use
