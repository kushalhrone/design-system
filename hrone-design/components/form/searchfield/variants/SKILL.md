# SearchField — Variants Index

> Index of all variants for this component.
> Shared tokens and rules: [../SKILL.md](../SKILL.md)

---

## Variants

| Variant | Spec | HTML | Purpose |
|---|---|---|---|
| placeholder | [placeholder/placeholder.md](./placeholder/placeholder.md) | [placeholder.html](./placeholder/placeholder.html) | Empty field; placeholder text shown; no close button |
| hover | [hover/hover.md](./hover/hover.md) | [hover.html](./hover/hover.html) | Semi-opaque hover background; no close button |
| focus | [focus/focus.md](./focus/focus.md) | [focus.html](./focus/focus.html) | Focus ring replaces shadow; clear stub at opacity-0 |
| filled | [filled/filled.md](./filled/filled.md) | [filled.html](./filled/filled.html) | Value present; close button visible |
| error | [error/error.md](./error/error.md) | [error.html](./error/error.html) | Red border + red label + error message; close button visible |
| disabled | [disabled/disabled.md](./disabled/disabled.md) | [disabled.html](./disabled/disabled.html) | Wrapper opacity 0.5; not-allowed cursor; no close button |

---

## Split Axis

Variants split by `state` prop. Each state is a distinct visual treatment.

## Rules

- All variants inherit shared tokens from `../SKILL.md`
- Load variant SKILL before variant spec for quick-ref
- Never override shared structure tokens at variant level
- Old `searchfield/` folder superseded by this structure — do not use
