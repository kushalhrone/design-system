# Tabs Component Token Spec

> Machine-readable token file. All values reference foundation tokens from `/foundation/foundation-token/`.
> Rule priority: effects > radius > color > typography > spacing.

---

## Meta

```yaml
component: Tabs
figma_file: ZV2R5CHmmkBMwI3FkJEMac
figma_nodes:
  - id: "128:2239"
    name: Tabs
    type: COMPONENT_SET
    variants: [primary/hug, secondary/hug, primary/fill, secondary/fill]
  - id: "128:2172"
    name: _TabsElement
    type: COMPONENT_SET
    variants: 16  # variant × state × orientation
variant_axes:
  - axis: variant
    values: [primary, secondary]
  - axis: state
    values: [default, hover, selected, disabled]
  - axis: orientation
    values: [horizontal, vertical]
  - axis: behavior  # Tabs only
    values: [hug, fill]
```

---

## Structure

```
Tabs (container)
└── tab1..tabN (_TabsElement instances)
└── separator (between tabs)
```

---

## Container Tokens (`Tabs`)

```css
/* Layout */
--tabs-container-padding-y:    var(--space-1);       /* 4px */
--tabs-container-padding-x:    var(--space-2);       /* 8px */
--tabs-container-gap:          var(--space-0.5);     /* 2px */
--tabs-container-height:       40px;                 /* fixed */
--tabs-container-radius:       var(--radius-3xl);    /* 24px */

/* Color — primary variant */
--tabs-container-bg-primary:   var(--color-border);  /* #E2E8ED neutral-200 */

/* Color — secondary variant */
--tabs-container-bg-secondary: transparent;
--tabs-container-border-secondary-bottom: 1px solid var(--color-border); /* #E2E8ED */

/* Effect */
--tabs-container-backdrop-blur: 0px;  /* no blur on container */
```

---

## Tab Item Tokens (`_TabsElement`)

### Sizing

```css
--tab-height:           32px;
--tab-padding-y:        var(--space-1.5);   /* 6px */
--tab-padding-x:        var(--space-3);     /* 12px */
--tab-gap:              var(--space-1.5);   /* 6px — icon to label */
--tab-icon-size:        16px;
--tab-radius:           var(--radius-full); /* 9999px — pill */
```

### Typography

```css
--tab-font-family:      var(--font-body);       /* Noto Sans */
--tab-font-size:        var(--text-sm);         /* 0.875rem / 14px */
--tab-font-weight:      var(--font-medium);     /* 500 */
--tab-line-height:      var(--leading-normal);  /* 1.5 → 20px at 14px */
--tab-letter-spacing:   var(--tracking-normal); /* 0 */
```

---

## State Tokens

### Default

```css
--tab-default-bg:         transparent;
--tab-default-text:       var(--color-fg-muted);    /* #64748B neutral-500 */
--tab-default-icon:       var(--color-fg-muted);    /* #64748B neutral-500 */
--tab-default-border:     none;
```

### Hover

```css
--tab-hover-bg:           var(--color-bg-subtle);   /* #F1F5F7 neutral-100 */
--tab-hover-text:         var(--color-fg);           /* #0F172A neutral-900 */
--tab-hover-icon:         var(--color-fg);           /* #0F172A neutral-900 */
```

### Selected — Primary

```css
--tab-selected-primary-bg:     var(--color-surface);     /* #FFFFFF neutral-25 */
--tab-selected-primary-text:   var(--color-fg);           /* #0F172A neutral-900 */
--tab-selected-primary-icon:   var(--color-fg);           /* #0F172A neutral-900 */
--tab-selected-primary-shadow: var(--shadow-tab);         /* 0px 2px 8px 0px rgba(0,0,0,0.06) */
--tab-selected-primary-border: none;
```

### Selected — Secondary

```css
--tab-selected-secondary-bg:              transparent;
--tab-selected-secondary-text:            var(--color-fg);       /* #0F172A neutral-900 */
--tab-selected-secondary-icon:            var(--color-fg);       /* #0F172A neutral-900 */
--tab-selected-secondary-border-bottom:   2px solid var(--color-primary); /* #02563D */
--tab-selected-secondary-border-left:     2px solid var(--color-primary); /* vertical only */
```

### Disabled

```css
--tab-disabled-opacity:   0.4;
--tab-disabled-bg:        transparent;
--tab-disabled-text:      var(--color-fg-muted);   /* #64748B neutral-500 */
--tab-disabled-cursor:    not-allowed;
```

### Focus

```css
--tab-focus-ring:         var(--focus-ring);
/* box-shadow:
     0px 0px 0px 2px var(--color-bg),         offset ring
     0px 0px 0px 4px var(--color-focus-ring)  brand ring #02563D4D */
```

---

## Separator Tokens

```css
--tabs-separator-color:     var(--color-border);  /* #E2E8ED neutral-200 */
--tabs-separator-width:     1px;
--tabs-separator-height:    20px;                 /* 32px tab - 6px padding × 2 */
--tabs-separator-radius:    var(--radius-sm);     /* 4px */
```

---

## Shadow Reference

```css
/* shadow-tab — applied to selected primary tab bg */
--shadow-tab: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
/* source: foundation/foundation-token/effects.md → Tab */
```

---

## Dark Mode Overrides

```css
/* Container */
--tabs-container-bg-primary:         var(--color-border);        /* dark-neutral-200 = #334155 */

/* States */
--tab-default-text:                  var(--color-fg-muted);      /* dark-neutral-500 = #94A3B5 */
--tab-hover-text:                    var(--color-fg);             /* dark-neutral-900 = #F8FAFB */
--tab-selected-primary-bg:           var(--color-surface);        /* dark-neutral-50  = #0F172A */
--tab-selected-primary-text:         var(--color-fg);             /* dark-neutral-900 = #F8FAFB */
--tab-selected-secondary-border-color: var(--color-primary);      /* dark-primary-500 = #3DAB87 */
--tabs-separator-color:              var(--color-border);         /* dark-neutral-200 = #334155 */

/* Focus */
--color-focus-ring:                  #3DAB8766;
```

---

## Variant Matrix

| variant | state | bg | text | border/indicator | shadow |
|---|---|---|---|---|---|
| primary | default | transparent | `--color-fg-muted` | — | — |
| primary | hover | `--color-bg-subtle` | `--color-fg` | — | — |
| primary | selected | `--color-surface` | `--color-fg` | — | `--shadow-tab` |
| primary | disabled | transparent | `--color-fg-muted` | — | — |
| secondary | default | transparent | `--color-fg-muted` | — | — |
| secondary | hover | `--color-bg-subtle` | `--color-fg` | — | — |
| secondary | selected | transparent | `--color-fg` | 2px `--color-primary` bottom | — |
| secondary | disabled | transparent | `--color-fg-muted` | — | — |

---

## Token → Foundation Map

| Token | Foundation Source | Value (light) |
|---|---|---|
| `--color-fg` | color.md §5 | `#0F172A` |
| `--color-fg-muted` | color.md §5 | `#64748B` |
| `--color-surface` | color.md §5 | `#FFFFFF` |
| `--color-bg-subtle` | color.md §5 | `#F1F5F7` |
| `--color-border` | color.md §5 | `#E2E8ED` |
| `--color-primary` | color.md §1 | `#02563D` |
| `--color-focus-ring` | color.md §8 | `#02563D4D` |
| `--shadow-tab` | effects.md → Tab | `0px 2px 8px 0px rgba(0,0,0,0.06)` |
| `--radius-full` | radius.md | `9999px` |
| `--radius-3xl` | radius.md | `24px` |
| `--radius-sm` | radius.md | `4px` |
| `--font-body` | typography.md §1 | `Noto Sans` |
| `--text-sm` | typography.md §2 | `0.875rem / 14px` |
| `--font-medium` | typography.md §3 | `500` |
| `--space-1` | spacing.md §2 | `4px` |
| `--space-1.5` | spacing.md §2 | `6px` |
| `--space-2` | spacing.md §2 | `8px` |
| `--space-3` | spacing.md §2 | `12px` |

---

## Rules

- Never hardcode colors — always use `--color-*` semantic tokens
- `--shadow-tab` is system-level — do not modify per component instance
- `--radius-full` on tab items communicates pill intent — do not reduce to pixel value
- Secondary selected indicator = border, not background fill
- Disabled = `opacity: 0.4` on entire tab item, not individual sub-tokens
- Separator uses `--color-border`, never fg color
- Focus ring uses double-ring pattern (offset + brand) — parent must have `overflow: visible`
- Vertical orientation: selected secondary indicator moves to `border-left` (not bottom)
