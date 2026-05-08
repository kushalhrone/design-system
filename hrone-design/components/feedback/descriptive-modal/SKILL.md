---
name: component-descriptive-modal
description: >
  Builds the descriptive-modal component and all its variants.
  Read this skill when asked to build, update, or spec the descriptive-modal component.
  Available variants: default.
---

# Descriptive Modal Component

> Entry point for the descriptive-modal component.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node (main): `7833:6985`

---

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read the relevant variant file: `variants/default/default.md`
4. Cross-ref token names → resolve to values from foundation
5. Build the component using the resolved spec

---

## Available Variants

| Variant | File | Figma Node | Description |
|---|---|---|---|
| **default** | [variants/default/default.md](./variants/default/default.md) | `7833:6985` | Muted body text block used inside modal dialogs |

---

## Shared Tokens

```css
--desc-modal-width: 288px;
--desc-modal-fg: var(--color-fg-muted, #71717a);
--desc-modal-size: var(--dimensions/font/text-sm, 14px);
--desc-modal-weight: 400;
--desc-modal-leading: var(--dimensions/leading/text-sm, 20px);
```

---

## Rules

- Use `Noto Sans` regular (weight 400) only — never medium/bold.
- Text color is always `--color-fg-muted`, never full foreground.
- Container is flex row; text expands with `flex: 1 0 0`, `min-width: 0`.
- Width 288px is the Figma spec width — treat as max-width in fluid contexts.
- No padding, border, or background on the component itself — host modal provides those.
- Multi-line text wraps naturally; no truncation.
