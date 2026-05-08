---
component: descriptive-error-message
variant: error-message
figma-node-id: 13605:54452
figma-content-hash: 13605544453
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: descriptive-error-message
- variant: error-message
- status: ready

## Props
| Prop    | Type                          | Default                               |
|---------|-------------------------------|---------------------------------------|
| variant | Description \| ErrorMessage   | ErrorMessage                          |
| value   | string                        | "Lorem ipsum dolor sit amet consectetur." |

## Design Tokens

| Property      | Token Name        | Value                  |
|---------------|-------------------|------------------------|
| font-family   | `--font-body`     | Noto Sans              |
| font-size     | `--text-xs`       | 12px (0.75rem)         |
| line-height   | —                 | 16px (matches `--text-xs`) |
| font-weight   | `--font-regular`  | 400                    |
| text color    | `--color-error`   | `#DC2626`              |
| letter-spacing| `--tracking-normal` | 0                    |
| layout        | flex row          | items-center, justify-center |
| text flex     | `flex: 1 0 0`     | fills available width  |

## Key Difference vs Description

| Property   | description       | error-message     |
|------------|-------------------|-------------------|
| text color | `#71717A` (muted) | `--color-error: #DC2626` |
| figma id   | 13605:27837       | 13605:54453       |

## Interaction States
| State   | Color              | Notes              |
|---------|--------------------|--------------------|
| default | `--color-error`    | validation failure |

## Notes
- `--danger/danger: #DC2626` → `--color-error: #DC2626` ✓ exact match
- Exact same layout and typography as `description` variant — only color differs
- Displayed when form field validation fails; replaces or supplements the description text
- `Body xs` type style applies equally to both variants
