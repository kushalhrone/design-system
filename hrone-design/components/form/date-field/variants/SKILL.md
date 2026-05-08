# DateField — Variants Index

> Index of all variants for this component.
> Shared tokens and rules: [../SKILL.md](../SKILL.md)

---

## Variants

| Variant | Spec | HTML | Purpose |
|---|---|---|---|
| primary | [primary/primary.md](./primary/primary.md) | [primary.html](./primary/primary.html) | White bg + field shadow; default field treatment |
| secondary | [secondary/secondary.md](./secondary/secondary.md) | [secondary.html](./secondary/secondary.html) | Gray (#f1f1f1) bg, shadow omitted; flat field treatment |

---

## Split Axis

Variants split by `variant` prop. Both cover states: default · hover · focus · filled · error · disabled.

## Rules

- All variants inherit shared tokens from `../SKILL.md`
- Load variant SKILL before variant spec for quick-ref
- Never override shared structure tokens at variant level
- Old `state-matrix/` folder superseded by this structure — do not use
