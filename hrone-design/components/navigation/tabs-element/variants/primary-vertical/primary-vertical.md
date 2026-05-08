---
component: tabs-element
variant: primary-vertical
figma-node-id: 14115:71565
figma-content-hash: 14115-71556-prv
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs-element
- variant: primary-vertical
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `primary` |
| orientation | `horizontal` \| `vertical` | `vertical` |
| state | `default` \| `hover` \| `selected` \| `disabled` | `default` |
| label | string | `"Option"` |
| showPrefix | boolean | false |
| showSuffix | boolean | false |

## Design Tokens — Base Layout (all states)
| Property | Token Name | Value |
|----------|------------|-------|
| display | — | flex, column |
| align-items | — | center |
| justify-content | — | center |
| padding | `--space-3` | 12px (all sides) |
| gap | `--space-1.5` | 6px |
| label min-width | — | min-content (width: min-content with min-w-full) |
| icon size | — | 16px |

## Design Tokens — Typography
| Property | Token Name | Value |
|----------|------------|-------|
| font-family | `--font-body` | Noto Sans (see Notes) |
| font-size | `--text-sm` | 14px |
| font-weight | `--font-medium` | 500 |
| line-height | — | 20px |
| letter-spacing | — | 0px |
| text-align | — | center |

## Interaction States
| State | BG | Text | Border-radius | Shadow | Cursor | Opacity |
|-------|----|------|---------------|--------|--------|---------|
| default | transparent | `--color-fg-muted` | `--radius-2_5xl` (20px) | none | pointer | 1 |
| hover | transparent | `--color-fg` | `--radius-2_5xl` (20px) | none | pointer | 0.5 on label |
| selected | white pill (absolute) | `--color-fg` | `--radius-3xl` (24px) on pill | `--shadow-tab` | pointer | 1 |
| disabled | transparent | `--color-fg-muted` | `--radius-2_5xl` (20px) | none | not-allowed | 0.5 on container |

## Selected State — Pill Detail
| Property | Token Name | Value |
|----------|------------|-------|
| pill-bg | — | `#FFFFFF` (raw — see Notes) |
| pill-border-radius | `--radius-3xl` | 24px |
| pill-inset | — | `0 -4px` |
| pill-shadow | `--shadow-tab` | `0px 2px 8px rgba(0,0,0,0.06)` |

## Size Variants
| Axis | Horizontal | Vertical |
|------|-----------|---------|
| flex-direction | row | column |
| padding | 6px 12px | 12px (all) |
| label min-width | auto | min-content |

## Notes
- Vertical orientation stacks icon (prefix/suffix) above/below the label.
- Same state token rules as `primary-horizontal`. See that file for shared mismatch notes.
- token-near-miss: muted text `#71717a` → `--color-fg-muted`.
- token-near-miss: selected text `#18181b` → `--color-fg`.
- token-near-miss: pill bg `#FFFFFF` → closest `--color-surface`. Do NOT auto-snap.
- `--radius-2_5xl` (20px) has no rule.md alias — use `--dimensions/radius/rounded-2_5xl` or 20px raw.
- focus state: not defined in Figma — use Standard Focus Ring from `effects.md`.
