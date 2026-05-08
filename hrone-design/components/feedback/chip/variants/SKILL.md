# Chip — Variants Index

> Index of all variants for this component.
> Shared tokens and rules: [../SKILL.md](../SKILL.md)

---

## Variants

| Variant | Spec | HTML | Purpose |
|---|---|---|---|
| primary | [primary/primary.md](./primary/primary.md) | [primary.html](./primary/primary.html) | Solid fill, high-emphasis selected/active chips |
| secondary | [secondary/secondary.md](./secondary/secondary.md) | [secondary.html](./secondary/secondary.html) | Neutral fill, label carries semantic color |
| tertiary | [tertiary/tertiary.md](./tertiary/tertiary.md) | [tertiary.html](./tertiary/tertiary.html) | Fully transparent, ghost-style inline tags |
| soft | [soft/soft.md](./soft/soft.md) | [soft.html](./soft/soft.html) | Transparent surface with soft-tinted base layer |

---

## Rules

- All variants inherit shared tokens from `../SKILL.md`
- Load variant SKILL before variant spec for quick-ref
- Never override shared structure tokens at variant level
- Each variant covers all 5 types: accent, default, success, warning, danger
- Old `state-matrix/` folder superseded by this structure — do not use
