---
name: component-checkbox-group
description: >
  Builds the checkbox-group component and all its variants.
  Read this skill when asked to build, update, or spec the checkbox-group component.
  Available variants: default, vertical, horizontal, error.
---

# Checkbox Group Component

> Entry point for the checkbox-group component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node (main): `2487:7441`

---

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/effects.md` for shadow/focus ring specs
4. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
5. Cross-ref token names → resolve to values from foundation
6. Build the component using the resolved spec

---

## Available Variants

| Variant | File | Figma Node | Description |
|---|---|---|---|
| **default** | [variants/default/default.md](./variants/default/default.md) | `17290:24391` | state=default, orientation=vertical |
| **vertical** | [variants/vertical/vertical.md](./variants/vertical/vertical.md) | `17290:24392` | Explicit vertical layout spec |
| **horizontal** | [variants/horizontal/horizontal.md](./variants/horizontal/horizontal.md) | `17290:24393` | state=default, orientation=horizontal |
| **error** | [variants/error/error.md](./variants/error/error.md) | `17290:24394` | state=error, both orientations |

---

## Shared Tokens

### Structure

```css
--checkbox-group-gap: var(--space-4, 16px);          /* gap between header and slot */
--checkbox-item-gap: var(--space-3, 12px);           /* gap between checkbox items */
--checkbox-control-size: 16px;                        /* checkbox box width/height */
--checkbox-control-top-offset: 2px;                  /* pt-[2px] alignment to text baseline */
--checkbox-horizontal-gap: var(--space-4, 16px);     /* gap between items in horizontal layout */
```

### Color Tokens

```css
--checkbox-fg: var(--color-fg, #18181b);                     /* title text */
--checkbox-fg-muted: var(--color-fg-muted, #71717a);         /* description / helper text */
--checkbox-fg-error: var(--color-error, #DC2626);            /* error label / error message / invalid border */
--checkbox-field-bg: var(--field/background, #ffffff);       /* checkbox control background */
--checkbox-field-border: rgba(222, 222, 224, 0);             /* transparent border (default) */
--checkbox-field-border-error: var(--color-error, #DC2626);  /* 1px border in invalid state */
```

### Typography

```css
--checkbox-label-size: var(--dimensions/font/text-sm, 14px);
--checkbox-label-weight: 500;
--checkbox-label-leading: var(--dimensions/leading/text-sm, 20px);
--checkbox-desc-size: var(--dimensions/font/text-sm, 14px);
--checkbox-desc-weight: 400;
--checkbox-desc-leading: var(--dimensions/leading/text-sm, 20px);
--checkbox-helper-size: var(--dimensions/font/text-xs, 12px);
--checkbox-helper-weight: 400;
--checkbox-helper-leading: var(--dimensions/leading/text-xs, 16px);
--checkbox-group-label-size: var(--dimensions/font/text-sm, 14px);
--checkbox-group-label-weight: 500;
```

### Effects

```css
--checkbox-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);
--checkbox-inner-highlight: inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1);
--checkbox-focus-ring: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px var(--color-secondary, #02563d);
```

---

## Rules

- Use `Noto Sans` (variable font) for all text.
- Checkbox control is always 16×16px with radius `md` (6px).
- Container wrapper has radius `xs` (2px).
- Group items in vertical layout use `gap: 12px`; horizontal layout uses `gap: 16px`.
- Error state: group label turns `--color-error`, checkbox border becomes 1px solid `--color-error`, error message appears below the slot.
- Helper text always uses `--color-fg-muted` regardless of state.
- Do not hardcode hex values — use `--color-*` tokens.
- Checkmark icon is hidden (opacity: 0) in unchecked state; shown (opacity: 1) in checked state.
- `showGroupLabel`, `showHelper` props control visibility of header section.
- Horizontal layout distributes items with `flex: 1 0 0` (equal width columns).
