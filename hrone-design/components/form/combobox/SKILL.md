---
name: component-combobox
description: >
  Builds the combobox component and all its variants.
  Read this skill when asked to build, update, or spec the combobox component.
  Available variants: closed, open, empty, selected.
---

# ComboBox Component

> Entry point for the combobox component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node (main): `14118:33116`

---

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/effects.md` for shadow/focus ring specs
4. Read `foundation/foundation-token/radius.md` for radius tokens
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

---

## Available Variants

| Variant | File | Figma Node | Description |
|---|---|---|---|
| **closed** | [variants/closed/closed.md](./variants/closed/closed.md) | `14118:33129` | Default idle state, dropdown hidden |
| **open** | [variants/open/open.md](./variants/open/open.md) | `14118:33130` | Dropdown expanded, no selection yet |
| **empty** | [variants/empty/empty.md](./variants/empty/empty.md) | `14118:33131` | User typing, no matching results |
| **selected** | [variants/selected/selected.md](./variants/selected/selected.md) | `14118:33132` | Value chosen, dropdown shows checkmark |

---

## Shared Tokens

### Structure

```css
--combobox-width: 256px;
--combobox-field-height: 36px;
--combobox-field-radius: var(--dimensions/radius/rounded-lg, 8px);
--combobox-label-gap: var(--dimensions/spacing/1, 4px);     /* gap: label → field */
--combobox-field-pl: var(--dimensions/spacing/3, 12px);     /* field left padding */
--combobox-field-py: var(--dimensions/spacing/2, 8px);      /* field vertical padding */
--combobox-suffix-px: var(--dimensions/spacing/3, 12px);    /* suffix horizontal padding */
--combobox-suffix-gap: var(--dimensions/spacing/1.5, 6px);  /* suffix icon gap */
--combobox-icon-size: 16px;
--combobox-dropdown-p: var(--dimensions/spacing/1, 4px);    /* dropdown inner padding */
--combobox-dropdown-gap: var(--dimensions/spacing/0.5, 2px);/* gap between list items */
--combobox-dropdown-radius: var(--dimensions/radius/rounded-lg, 8px);
--combobox-item-min-h: 36px;
--combobox-item-px: var(--dimensions/spacing/3, 12px);
--combobox-item-py: var(--dimensions/spacing/1.5, 6px);
--combobox-item-radius: var(--dimensions/radius/rounded-lg, 8px);
--combobox-item-gap: var(--dimensions/spacing/3, 12px);     /* control → label gap inside item */
```

### Color Tokens

```css
--combobox-label-fg: var(--color-fg, #18181b);
--combobox-placeholder: var(--field/placeholder, #71717a);
--combobox-value-fg: var(--field/foreground, #18181b);
--combobox-field-bg: var(--field/background, #ffffff);
--combobox-field-bg-focus: var(--field/background-focus, #ffffff);
--combobox-field-border: rgba(222, 222, 224, 0);
--combobox-dropdown-bg: var(--overlay, #ffffff);
--combobox-item-fg: var(--default/default-foreground, #18181b);
--combobox-item-hover-bg: var(--default/default, #f1f1f1);
--combobox-focus-ring: var(--color-secondary, #02563d);
```

### Effects

```css
--combobox-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);
--combobox-field-inner: inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1);
--combobox-focus-ring-shadow: 0px 0px 0px 2px var(--combobox-focus-ring);
--combobox-dropdown-shadow:
  0px 14px 28px 0px rgba(0, 0, 0, 0.08),
  0px -6px 12px 0px rgba(0, 0, 0, 0.03),
  0px 2px 8px 0px rgba(0, 0, 0, 0.06);
```

### Typography

```css
--combobox-label-size: var(--dimensions/font/text-sm, 14px);
--combobox-label-weight: 500;
--combobox-label-leading: var(--dimensions/leading/text-sm, 20px);
--combobox-field-size: var(--dimensions/font/text-sm, 14px);
--combobox-field-weight: 400;
--combobox-field-leading: var(--dimensions/leading/text-sm, 20px);
--combobox-item-size: var(--dimensions/font/text-sm, 14px);
--combobox-item-weight: 500;
--combobox-item-leading: var(--dimensions/leading/text-sm, 20px);
```

---

## Rules

- Use `Noto Sans` (variable font) for all text.
- Field height is always 36px; width is 256px (fluid in context).
- Field radius is `lg` (8px).
- Closed state uses `--shadow-field` (3-layer drop shadow + inner highlight).
- Open / empty / selected states replace shadow with `--combobox-focus-ring-shadow` (2px shield ring, `#02563d`).
- Chevron points DOWN in closed/empty states; UP (rotate 180°) in open/selected states.
- Dropdown is a white overlay surface with `--combobox-dropdown-shadow`; inner padding 4px, item gap 2px.
- List items: min-height 36px, radius `lg`, px 12px, py 6px.
- Selected item shows a 16×16 checkmark icon aligned right.
- Placeholder text uses `--combobox-placeholder` (`#71717a`); typed/selected value uses `--combobox-value-fg` (`#18181b`).
- Do not hardcode hex values — use `--color-*` tokens.
- Suffix div always has white background to clip overflow text beneath it.
