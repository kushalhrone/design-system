---
name: component-link
description: >
  Builds the link component and all its variants.
  Read this skill when asked to build, update, or spec the link component.
  Available variants: default, hover, focus, disabled.
---

# Link Component

> Entry point for the link component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node (main): `2300:1615`

---

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/typography.md` for font specs
3. Read `foundation/foundation-token/effects.md` for focus ring spec
4. Read `foundation/foundation-token/radius.md` for focus ring radius
5. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
6. Cross-ref token names → resolve to values from foundation
7. Build the component using the resolved spec

---

## Available Variants

| Variant | File | Figma Node | Description |
|---|---|---|---|
| **default** | [variants/default/default.md](./variants/default/default.md) | `5375:69638` | Idle link, muted underline, icon 60% opacity |
| **hover** | [variants/hover/hover.md](./variants/hover/hover.md) | `5375:69640` | Darker underline, full icon opacity, wrapper 80% |
| **focus** | [variants/focus/focus.md](./variants/focus/focus.md) | `5375:69646` | Focus ring (2px offset + 4px brand), same text as hover |
| **disabled** | [variants/disabled/disabled.md](./variants/disabled/disabled.md) | `5375:69647` | Same as default, wrapper opacity 50%, pointer-events none |

---

## Shared Tokens

### Structure

```css
--link-gap: var(--dimensions/spacing/0.5, 2px);      /* gap between label and icon */
--link-px: var(--dimensions/spacing/0.5, 2px);       /* left/right padding on wrapper */
--link-icon-size: 10px;                               /* external link icon */
--link-focus-radius: var(--dimensions/radius/rounded-sm, 4px);
```

### Color Tokens

```css
--link-fg: var(--foreground/link, #18181b);           /* text + icon color */
--link-underline-default: #cdcdce;                    /* underline color — default/disabled */
--link-underline-active: #71717a;                     /* underline color — hover/focus */
--link-icon-opacity-default: 0.6;                     /* icon opacity in default/disabled */
--link-icon-opacity-active: 1;                        /* icon opacity in hover/focus */
--link-disabled-opacity: var(--disabled-opacity, 0.5);
--link-hover-opacity: 0.8;                            /* wrapper opacity on hover */
```

### Focus Ring

```css
--link-focus-ring:
  0px 0px 0px 2px var(--color-bg, #F8FAFB),           /* offset ring */
  0px 0px 0px 4px var(--color-secondary, #02563d);    /* brand ring */
```

### Typography

```css
--link-size: var(--dimensions/font/text-sm, 14px);
--link-weight: 500;
--link-leading: var(--dimensions/leading/text-sm, 20px);
--link-decoration: underline solid;
--link-decoration-thickness: 10%;    /* Figma: decoration-[10%] */
```

---

## Rules

- Use `Noto Sans Medium` (weight 500) always — link text is never regular weight.
- Underline is always present on the text. Decoration color shifts default→hover: `#cdcdce` → `#71717a`.
- External icon is always 10×10px; aligned to top (pt-2px) of the label baseline.
- Icon opacity: 60% default/disabled, 100% hover/focus.
- Hover state adds `opacity: 0.8` to the **wrapper**, not the text.
- Focus state: 4px brand ring (`#02563d`) + 2px white offset, radius `sm` (4px) on wrapper, `overflow: clip`.
- Disabled: `opacity: 0.5` on wrapper, `pointer-events: none`, same visuals as default.
- `showIcon` prop hides the external icon when false.
- Do not hardcode hex values — use `--color-*` tokens where matched.
