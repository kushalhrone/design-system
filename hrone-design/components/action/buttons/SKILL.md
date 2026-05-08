# Button Component Orchestrator

> Entry point for all button token context. Directs to the correct variant file.
> Rule priority: effects > radius > color > typography > spacing.

---

## Meta

```yaml
component: Button
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175"
figma_type: COMPONENT_SET
variants: 7
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
icon_only: [true, false]
total_combinations: 168
```

---

## Variant Index

| Variant | File | Fill | Use case |
|---|---|---|---|
| **primary** | [primary/primary.md](./primary/primary.md) | `--color-brand-secondary` `#ff674d` | Main CTA — use sparingly, once per view |
| **secondary** | [secondary/secondary.md](./secondary/secondary.md) | `--color-brand-primary` `#02563D` | Alternative action alongside primary |
| **tertiary** | [tertiary/tertiary.md](./tertiary/tertiary.md) | `--default/default` `#EBEBEC` | Low-emphasis alongside primary/secondary |
| **outline** | [outline/outline.md](./outline/outline.md) | transparent + border | Emphasis without filled background |
| **ghost** | [ghost/ghost.md](./ghost/ghost.md) | transparent | Subtle, minimal-visibility actions |
| **danger** | [danger/danger.md](./danger/danger.md) | `--danger/danger` `#DC2626` | Destructive / irreversible actions |
| **danger-soft** | [danger-soft/danger-soft.md](./danger-soft/danger-soft.md) | `--danger/danger-soft` `rgba(217,45,32,0.15)` | Lower-emphasis destructive actions |

---

## Shared Tokens (all variants)

### Structure

```css
--btn-radius:     var(--dimensions/radius/rounded-lg, 8px);  /* --radius-lg */
--btn-gap:        var(--dimensions/spacing/2, 8px);
--btn-padding-x:  var(--dimensions/spacing/4, 16px);
--btn-padding-y:  var(--dimensions/spacing/2, 8px);
--btn-icon-size:  16px;
```

### Sizes

| Size | Token | Height | Min-width |
|---|---|---|---|
| `sm` | `--dimensions/spacing/8` | `32px` | `32px` |
| `md` | `--dimensions/spacing/9` | `36px` | `36px` |
| `lg` | `--dimensions/spacing/10` | `40px` | `40px` |

### Typography

```css
--btn-font-family:    var(--font, 'Noto Sans');    /* Noto Sans */
--btn-font-weight:    500;                        /* Medium */
--btn-font-size:      var(--dimensions/font/text-sm, 14px);
--btn-line-height:    var(--dimensions/leading/text-sm, 20px);
--btn-letter-spacing: var(--letter-spacing, 0px);
```

### Disabled State

```css
/* Applied to ALL variants */
--btn-disabled-opacity: 0.5;
cursor: not-allowed;
pointer-events: none;
```

### Focus Ring (primary / tertiary / outline / ghost)

```css
box-shadow:
  0px 0px 0px 2px var(--background/background, #F8FAFB),  /* offset ring */
  0px 0px 0px 4px var(--focus-ring, #02563D);              /* brand ring */
```

---

## Quick Reference by Topic

| Topic | Where |
|---|---|
| Primary fill + hover | `primary/primary.md` §Color |
| Secondary fill + ring | `secondary/secondary.md` §Color |
| Danger ring color | `danger/danger.md` §Focus |
| DangerSoft soft fill | `danger-soft/danger-soft.md` §Color |
| Blur effect (tertiary/secondary/dangerSoft) | `effects.md` §Blur |
| Size tokens | This file §Shared Tokens |
| Focus ring pattern | `effects.md` §Focus Rings |
| Radius source | `foundation/foundation-token/radius.md` |

---

## Rules

- One primary button per view hierarchy — never stack two primaries
- Danger variants only for destructive / irreversible actions
- Ghost must not hide critical actions
- Danger-soft for caution required but urgency is lower than Danger
- Icon-only buttons require accessible `aria-label`
- Focus ring must be visible on all backgrounds — `overflow: visible` on parent
- `--radius-lg` (8px) is the only radius for buttons — never override per instance
- Disabled = `opacity: 0.5` on entire button — never disable individual sub-tokens
- Font is always Noto Sans Medium 14px — never Inter

---

## Foundation References

| Token | Source | Light | Dark |
|---|---|---|---|
| `--color-brand-primary` | color.md §1 | `#02563D` | `#3DAB87` |
| `--color-brand-secondary` | color.md §1 | `#ff674d` | `#ffa090` |
| `--color-error` | color.md §2 | `#DC2626` | `#DC2626` |
| `--color-focus-ring` | color.md §8 | `#02563D4D` | `#3DAB8766` |
| `--radius-lg` | radius.md | `8px` | `8px` |
| `--font-body` | typography.md §1 | `Noto Sans` | `Noto Sans` |
| `--text-sm` | typography.md §2 | `14px` | `14px` |
| `--font-medium` | typography.md §3 | `500` | `500` |
