# Color System (Unified)

---

## 1. Brand Primitives (Source of Truth)

### Primary — Forest Green

| Token              | Value       | Usage                                           |
| ------------------ | ----------- | ----------------------------------------------- |
| `--primary-500`    | `#02563D`   | Forest Green — nav, structure, trust            |
| `--primary-600`    | `#013E2C`   | Hover / pressed of primary. Never default.      |
| `--primary-mid`    | `#3DAB87`   | Success-adjacent positive states, illustrations |
| `--primary-light`  | `#E8F4F0`   | Active state bg, chips, hover surfaces          |

### Secondary — Tomato (Action Color)

Warm coral-red accent. Primary CTAs, action highlights, engagement indicators.

| Token                  | Value       | Usage                                         |
| ---------------------- | ----------- | --------------------------------------------- |
| `--secondary-25`       | `#fff8f6`   | Subtle tinted bg, hover surfaces              |
| `--secondary-50`       | `#fff1ee`   | Light fill — chips, badge bg, soft states     |
| `--secondary-100`      | `#ffd9d1`   | Stronger soft fill, selected row bg           |
| `--secondary-200`      | `#ffbfb2`   | Border on soft variants                       |
| `--secondary-300`      | `#ffa090`   | Mid-light accent, illustrations               |
| `--secondary-400`      | `#ff846e`   | Interactive mid-tone                          |
| `--secondary-500`      | `#ff674d`   | **Base — primary action buttons, CTA**        |
| `--secondary-600`      | `#e55c44`   | Hover / pressed of secondary-500              |
| `--secondary-700`      | `#cc523c`   | Strong accent, icon fills                     |
| `--secondary-800`      | `#b24733`   | Dark accent text on light bg                  |
| `--secondary-900`      | `#993d2b`   | Darkest body use                              |
| `--secondary-950`      | `#7f3323`   | Deepest — decorative, illustrations only      |

---

## 2. Semantic Primitives

| Token       | Value     |
| ----------- | --------- |
| `--success` | `#16A34A` |
| `--success-light` | `#DCFCE7` |
| `--warning` | `#D97706` |
| `--warning-light` | `#FEF3C7` |
| `--error`   | `#DC2626` |
| `--error-light` | `#FEE2E2` |
| `--info`    | `#2563EB` |
| `--info-light` | `#DBEAFE` |

---

## 3. Neutral Ramp (Green-tinted, hue 161)

Pure gray reads washed-out beside brand green. All neutrals carry subtle green tint at hue 161.

| Token           | Value     | Usage                                        |
| --------------- | --------- | -------------------------------------------- |
| `--neutral-50`  | `#F8FAFB` | Page canvas, input bg, table row alternates  |
| `--neutral-100` | `#F1F5F7` | Dividers, section bg, toolbar fills          |
| `--neutral-200` | `#E2E8ED` | Default borders, input borders at rest       |
| `--neutral-300` | `#CBD5DD` | Strong borders, focus-adjacent rings         |
| `--neutral-400` | `#94A3B5` | Disabled text, helper text, placeholder      |
| `--neutral-500` | `#64748B` | Secondary body, supporting labels, captions  |
| `--neutral-600` | `#475569` | Primary body in data-dense contexts          |
| `--neutral-700` | `#334155` | Card body text                               |
| `--neutral-800` | `#1E293B` | Card headings, primary body, form values     |
| `--neutral-900` | `#0F172A` | Page-level headings, display text            |

---

## 4. Semantic Tokens

### Core UI Roles

```css
--color-bg:           var(--neutral-50);   /* page canvas */
--color-bg-subtle:    var(--neutral-100);  /* section bg, toolbar fills */
--color-bg-tertiary:  var(--neutral-200);  /* strong dividers */

--color-surface:       #FFFFFF;            /* card / raised surface bg */
--color-surface-muted: var(--neutral-100); /* muted surface */

--color-border:        var(--neutral-200); /* default borders */
--color-border-strong: var(--neutral-300); /* strong borders */

--color-fg:        var(--neutral-800); /* primary body text */
--color-fg-muted:  var(--neutral-500); /* muted text, helpers, captions */
--color-fg-subtle: var(--neutral-400); /* disabled text, placeholder */
```

---

### Brand Mapping

```css
/* Primary — Forest Green (nav, structure, active states) */
--color-brand-primary:       var(--primary-500);   /* #02563D */
--color-brand-primary-dark:  var(--primary-600);   /* #013E2C */
--color-brand-primary-mid:   var(--primary-mid);   /* #3DAB87 */
--color-brand-primary-light: var(--primary-light); /* #E8F4F0 */

/* Secondary — Tomato (action buttons, CTAs, engagement) */
--color-brand-secondary:       var(--secondary-500); /* #ff674d */
--color-brand-secondary-dark:  var(--secondary-600); /* #e55c44 */
--color-brand-secondary-mid:   var(--secondary-300); /* #ffa090 */
--color-brand-secondary-light: var(--secondary-50);  /* #fff1ee */
```

---

### Text Roles

```css
--color-text-primary:   var(--neutral-800);
--color-text-secondary: var(--neutral-600);
--color-text-tertiary:  var(--neutral-500);
--color-text-disabled:  var(--neutral-400);
--color-text-inverse:   #FFFFFF;
--color-text-link:      var(--color-brand-primary);
--color-text-heading:   var(--neutral-900);
```

---

### Semantic Mapping

```css
--color-success:       var(--success);        /* #16A34A */
--color-success-light: var(--success-light);  /* #DCFCE7 */

--color-warning:       var(--warning);        /* #D97706 */
--color-warning-light: var(--warning-light);  /* #FEF3C7 */

--color-error:         var(--error);          /* #DC2626 */
--color-error-light:   var(--error-light);    /* #FEE2E2 */

--color-info:          var(--info);           /* #2563EB */
--color-info-light:    var(--info-light);     /* #DBEAFE */
```

---

## 5. State / Variant Tokens

```css
/* Brand hover / soft states */
--color-brand-hover:      var(--primary-600);          /* #013E2C */
--color-brand-soft:       var(--primary-light);        /* #E8F4F0 */
--color-brand-soft-hover: rgba(2, 86, 61, 0.15);

/* Border roles */
--color-border-default: var(--neutral-200);
--color-border-strong:  var(--neutral-300);
--color-border-focus:   var(--color-brand-primary);
--color-border-error:   var(--color-error);
```

---

## 6. Focus Ring

```css
--color-focus-ring: rgba(2, 86, 61, 0.22);   /* 3px ring around all interactive elements */
```

Standard focus pattern (all interactive elements):
```css
box-shadow: 0 0 0 3px rgba(2, 86, 61, 0.22);
```

---

## 7. DS / Figma Mapping (Reference Only)

```css
background/background           → --color-bg
background/background-secondary → --color-bg-subtle
background/background-tertiary  → --color-bg-tertiary

border/border                   → --color-border
border/border-strong            → --color-border-strong

accent/accent                   → --color-brand-primary
accent/accent-hover             → --color-brand-hover
accent/accent-foreground        → --color-text-inverse

secondary/secondary             → --color-brand-secondary
secondary/secondary-hover       → --color-brand-secondary-dark
secondary/secondary-foreground  → #FFFFFF
```

---

## Rules

* Always use `--color-*` tokens in components
* Never use primitive tokens directly in UI
* **Two-Voice Rule:** `--color-brand-primary` (`#02563D`) = nav/structure/trust. `--color-brand-secondary` (`#ff674d`) = action/CTA/engagement. Combined ≤15% of any surface. Never equal weight in same zone.
* **Use-Secondary-for-Action Rule:** Primary action buttons use `--color-brand-secondary`. Sidebar/nav/active states use `--color-brand-primary`.
* Never use pure gray (`#888888`, `#666666`) — always use green-tinted neutral scale
* Variants (`hover`, `soft`) must map to a base semantic token
* Brand colors and semantic states must remain distinct

---
