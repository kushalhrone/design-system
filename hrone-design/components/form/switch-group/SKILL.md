---
name: component-switch-group
description: >
  Builds the switch-group component and all its variants.
  Read this skill when asked to build, update, or spec the switch-group component.
  Available variants: default, disabled.
---

# Switch Group Component

> Entry point for the switch-group component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `foundation/foundation-token/`.
> Figma node: `2489:9993`
> Doc: https://v3.heroui.com/docs/react/components/switch

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
| **default** | [variants/default/default.md](./variants/default/default.md) | `2489:9992` | On state, full opacity |
| **disabled** | [variants/disabled/disabled.md](./variants/disabled/disabled.md) | `2489:10035` | On state, opacity 0.5, non-interactive |

---

## Anatomy

```
┌─────────────────────────────────────────────┐
│ [container]              [Switch control]    │
│  labelGroup                ┌──────────┐      │
│  descriptionGroup          │   ●      │      │  ← on state
│                            └──────────┘      │
└─────────────────────────────────────────────┘
```

| Part | Node | Role |
|---|---|---|
| Root wrapper | flex row, gap 16px | Positions text group + switch |
| container | flex col | Label + description stacked |
| labelGroup | `<p>` | Bold label text |
| descriptionGroup | `<p>` | Muted helper text |
| _SwitchControl | track div | 40×20px pill, colored background |
| thumb | inner div | 20×16px pill, white, drop shadow |

---

## Shared Tokens

### Layout

```css
--switch-group-width: 312px;
--switch-group-gap: var(--space-4, 16px);          /* text container → switch */
```

### Switch Control

```css
--switch-track-width: 40px;                         /* --space-10 exact match */
--switch-track-height: 20px;                        /* --space-5 exact match */
--switch-track-padding: 2px;                        /* --space-0.5 exact match */
--switch-track-radius: var(--dimensions/radius/rounded-3xl, 24px);
--switch-track-bg-on: var(--color-secondary, #02563d);
--switch-thumb-width: 20px;
--switch-thumb-height: 16px;                        /* track-height - 2 × padding */
--switch-thumb-radius: var(--dimensions/radius/rounded-2xl, 16px);
--switch-thumb-bg: var(--neutral-25, #FFFFFF);
```

### Effects

```css
--switch-thumb-shadow:
  0px 0px 0.5px rgba(0, 0, 0, 0.30),
  0px 2px 5px   rgba(0, 0, 0, 0.06),
  0px 0px 2.5px rgba(0, 0, 0, 0.02);
```

### Typography

```css
--switch-label-size:   var(--text-sm, 14px);
--switch-label-weight: var(--font-medium, 500);
--switch-label-leading: 20px;                       /* dimensions/leading/text-sm */
--switch-desc-size:    var(--text-xs, 12px);
--switch-desc-weight:  var(--font-regular, 400);
--switch-desc-leading: 16px;                        /* dimensions/leading/text-xs = 1rem */
```

### Color

```css
--switch-label-color: #18181b;                      /* near-miss: --color-fg #0F172A */
--switch-desc-color:  #71717a;                      /* near-miss: --color-fg-muted #64748B */
--switch-disabled-opacity: 0.5;
```

---

## States

| State | Track bg | Thumb pos | Opacity | Pointer |
|---|---|---|---|---|
| on (default) | `--color-secondary` | right (items-end) | 1 | pointer |
| off | undefined in Figma | left (items-start) | 1 | pointer |
| disabled | `--color-secondary` | right | 0.5 | not-allowed |

---

## Rules

- Track always pill-shaped: `rounded-3xl` (24px).
- Thumb always pill-shaped: `rounded-2xl` (16px).
- Thumb fills track height minus 2px padding top + bottom = 16px effective height.
- On state: `justify-content: flex-end` pushes thumb right; off state: `flex-start`.
- Disabled: opacity 0.5 applied separately to container text AND switch control — not on root wrapper.
- Off state not defined in Figma — use `--color-bg-tertiary` (#E2E8ED) for track bg; flag with designer.
- Never hardcode `#02563d` — use `--color-secondary`.
- `accent/accent` in Figma = `--color-secondary` in this project (#02563D).
