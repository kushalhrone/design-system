---
component: descriptive-error-message
variant: description
figma-node-id: 13605:54452
figma-content-hash: 13605547837
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: descriptive-error-message
- variant: description
- status: ready

## Props
| Prop    | Type                          | Default                               |
|---------|-------------------------------|---------------------------------------|
| variant | Description \| ErrorMessage   | Description                           |
| value   | string                        | "Lorem ipsum dolor sit amet consectetur." |

## Design Tokens

| Property      | Token Name        | Value                      |
|---------------|-------------------|----------------------------|
| font-family   | `--font-body`     | Noto Sans                  |
| font-size     | `--text-xs`       | 12px (0.75rem)             |
| line-height   | —                 | 16px (raw — see Notes)     |
| font-weight   | `--font-regular`  | 400                        |
| text color    | —                 | `#71717A` (raw — see Notes)|
| letter-spacing| `--tracking-normal` | 0                        |
| layout        | flex row          | items-center, justify-center|
| width         | —                 | 289px (raw — context-dependent) |
| text flex     | `flex: 1 0 0`     | fills available width       |

## Interaction States
| State   | Color      | Notes             |
|---------|------------|-------------------|
| default | `#71717A`  | muted helper text |

## Notes
- token-near-miss: text color `--foreground/muted: #71717A` vs `--color-fg-muted: #64748B` (Zinc vs Gray hue family) — use raw `#71717A`
- token-mismatch: line-height 16px — `--text-xs` in foundation pairs with `1rem` (16px) ✓ actually matches. Use `--text-xs` line-height (16px).
- token-mismatch: width 289px — no foundation token. In practice this component should be `width: 100%` / `flex: 1` inside a form field context, not fixed 289px
- `Body xs` type style = `--text-xs` + `--font-regular` + 16px leading
- Used as helper/description text below form fields. Appears beneath label or input.
