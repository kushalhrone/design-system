---
component: tabs-element
variant: secondary-vertical
figma-node-id: 14115:71569
figma-content-hash: 14115-71556-secv
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs-element
- variant: secondary-vertical
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `secondary` |
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
| padding-x | `--space-3` | 12px |
| padding-top | `--space-2` | 8px |
| padding-bottom | `--space-3` | 12px |
| gap | `--space-1.5` | 6px |
| label min-width | — | min-content |
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
| State | BG | Text | Indicator | Cursor | Opacity |
|-------|----|------|-----------|--------|---------|
| default | transparent | `--color-fg-muted` | none | pointer | 1 |
| hover | transparent | `--color-fg-muted` | none | pointer | 0.5 on label |
| selected | transparent | `--color-fg` | 2px left `--color-secondary` | pointer | 1 |
| disabled | transparent | `--color-fg-muted` | none | not-allowed | 0.5 on container |

## Selected State — Indicator Detail
| Property | Token Name | Value |
|----------|------------|-------|
| border-left | `--color-secondary` | 2px solid `#02563D` |
| border-bottom | `--color-secondary` | 2px solid `#02563D` (also present in Figma) |

## Notes
- **Key difference from secondary-horizontal**: selected indicator moves to `border-left` (not `border-bottom`) to suit vertical layout. Figma also retains `border-bottom` on this variant — confirm intent with designer.
- Vertical padding differs from horizontal: `pt: 8px` (`--space-2`), `pb: 12px` (`--space-3`). Secondary-horizontal uses `pt: 4px`, `pb: 6px`.
- token-mismatch: indicator `#02563D` → use `--color-secondary`. See secondary-horizontal notes.
- token-near-miss: muted text `#71717a` → `--color-fg-muted`.
- token-near-miss: selected text `#18181b` → `--color-fg`.
- font-family: using `--font-body` (Noto Sans) over Figma's Noto Sans.
- focus state: not defined in Figma — use Standard Focus Ring from `effects.md`.
