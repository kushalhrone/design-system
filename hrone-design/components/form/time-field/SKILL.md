---
name: component-time-field
description: >
  Builds the time-field component and all its variants.
  Read this skill when asked to build, update, or spec the time-field component.
  Available variants: default, hover, focus, filled, error, disabled.
---

# Time Field Component

> Entry point for the time-field component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node (main): `14551:13694`
> Doc: https://v3.heroui.com/docs/react/components/time-field

---

## How to build this component

1. Read `foundation/foundation-token/color.md` for token resolution
2. Read `foundation/foundation-token/effects.md` for shadow specs
3. Read `foundation/foundation-token/radius.md` for radius tokens
4. Read `foundation/foundation-token/typography.md` for font specs
5. Read `foundation/foundation-token/spacing.md` for spacing tokens
6. Read the relevant variant file: `variants/{variant-name}/{variant-name}.md`
7. Cross-ref token names → resolve to values from foundation
8. Build using the resolved spec; never hardcode raw hex or px when a token exists

---

## Available Variants

| Variant | File | Figma Node | Description |
|---|---|---|---|
| **default** | [variants/default/default.md](./variants/default/default.md) | `14551:13695` | Empty field, placeholder dashes |
| **hover** | [variants/hover/hover.md](./variants/hover/hover.md) | `14551:13720` | Subtle bg tint on hover |
| **focus** | [variants/focus/focus.md](./variants/focus/focus.md) | `14551:13715` | Green 2px focus ring, no shadow |
| **filled** | [variants/filled/filled.md](./variants/filled/filled.md) | `14551:13710` | Actual time values, fg text |
| **error** | [variants/error/error.md](./variants/error/error.md) | `14551:13705` | Red border, red label + *, error message |
| **disabled** | [variants/disabled/disabled.md](./variants/disabled/disabled.md) | `14551:13700` | Root opacity 0.5, no interaction |

---

## Anatomy

```
Root (flex col, gap 4px, w-296px)
├── Label          text-sm/500, "Time"  [error: red + *]
├── _DateFieldInput  h-36px, rounded-lg, border 1px, pl-12px
│   ├── bg-overlay   absolute, white (or hover-tint)
│   ├── container    flex row, gap 1px, overflow-hidden
│   │   ├── _CalendarTimeValue  HH  (px-2px, rounded-md)
│   │   ├── separator  ":"  font-medium
│   │   ├── _CalendarTimeValue  MM
│   │   ├── separator  ":"
│   │   ├── _CalendarTimeValue  SS
│   │   ├── _CalendarTimeValue  AM/PM
│   │   └── _CalendarTimeValue  TZ (EST)
│   └── inner-shadow  inset overlay
└── DescriptionWrapper
    └── DescriptionErrorMessage  xs/regular  [error: red text]
```

---

## Shared Tokens

### Layout

```css
--time-field-width: 296px;
--time-field-gap: var(--space-1, 4px);               /* label → input → description */
--time-field-input-height: 36px;                     /* --space-9 exact match */
--time-field-input-pl: var(--space-3, 12px);
--time-field-input-radius: var(--dimensions/radius/rounded-lg, 8px);
--time-field-segment-px: var(--space-0.5, 2px);
--time-field-segment-radius: var(--dimensions/radius/rounded-md, 6px);
--time-field-segment-gap: var(--space-px, 1px);
```

### Color

```css
--time-field-bg: white;                              /* near-miss: --neutral-25 #FFFFFF */
--time-field-bg-hover: rgba(249, 249, 249, 0.92);    /* no token — raw */
--time-field-border-default: rgba(222, 222, 224, 0); /* transparent */
--time-field-border-error: var(--color-error, #DC2626);
--time-field-focus-ring: var(--color-secondary, #02563d);
--time-field-focus-ring-width: 2px;
--time-field-label-color: #18181b;                   /* near-miss: --color-fg #0F172A */
--time-field-label-error: var(--color-error, #DC2626);
--time-field-value-color: #18181b;                   /* filled state — near-miss */
--time-field-placeholder-color: #71717a;             /* near-miss: --color-fg-muted #64748B */
--time-field-desc-color: #71717a;
--time-field-error-msg-color: var(--color-error, #DC2626);
```

### Effects

```css
/* shadow-field — default/hover/filled/error/disabled */
--time-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);
--time-field-inner: inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1);

/* focus-ring replaces shadow-field on focus */
--time-field-focus-shadow: 0px 0px 0px 2px var(--color-secondary, #02563d);
```

### Typography

```css
--time-field-label-size:    var(--text-sm, 14px);
--time-field-label-weight:  var(--font-medium, 500);
--time-field-label-leading: 20px;
--time-field-segment-size:  var(--text-sm, 14px);
--time-field-segment-weight-value: var(--font-regular, 400);
--time-field-segment-weight-sep:   var(--font-medium, 500);
--time-field-desc-size:     var(--text-xs, 12px);
--time-field-desc-weight:   var(--font-regular, 400);
--time-field-desc-leading:  16px;
```

---

## State Matrix

| State | Border | Input shadow | Label | Segment text | Desc |
|---|---|---|---|---|---|
| default | transparent | shadow-field | `#18181b` | `#71717a` (placeholder) | description |
| hover | transparent | shadow-field | `#18181b` | `#71717a` | description |
| focus | transparent | focus-ring 2px | `#18181b` | `#71717a` | description |
| filled | transparent | shadow-field | `#18181b` | `#18181b` (value) | description |
| error | 1px `#DC2626` | shadow-field | `#DC2626` + * | `#71717a` | error text red |
| disabled | transparent | shadow-field | `#18181b` | `#71717a` | description |

---

## Rules

- Input height always 36px (`--space-9`). Never change for size variants unless a size axis is added.
- Border is transparent by default — only visible in error state (1px `--color-error`).
- Focus ring replaces shadow-field entirely (no combined shadow + ring).
- Focus ring uses `--color-secondary` (#02563D) — NOT `--color-primary`. This matches Figma token `focus-ring = #02563d`.
- Disabled: opacity 0.5 on ROOT wrapper. Differs from switch-group (which dims sub-parts separately).
- Segment gap is 1px (`--space-px`) — not `--space-1`.
- Segment padding is 2px each side (`--space-0.5`).
- Never hardcode `#DC2626` — use `--color-error`.
- Never hardcode `#02563d` for focus ring — use `--color-secondary`.
- Description + error message share same `DescriptionErrorMessage` sub-component; only text color differs.
