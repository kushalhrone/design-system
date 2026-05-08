---
component: tabs-element
variant: secondary-horizontal
figma-node-id: 14115:71561
figma-content-hash: 14115-71556-sech
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs-element
- variant: secondary-horizontal
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `secondary` |
| orientation | `horizontal` \| `vertical` | `horizontal` |
| state | `default` \| `hover` \| `selected` \| `disabled` | `default` |
| label | string | `"Option"` |
| showPrefix | boolean | false |
| showSuffix | boolean | false |

## Design Tokens — Base Layout (all states)
| Property | Token Name | Value |
|----------|------------|-------|
| display | — | flex, row |
| align-items | — | center |
| justify-content | — | center |
| padding-x | `--space-3` | 12px |
| padding-top | `--space-1` | 4px |
| padding-bottom | `--space-1.5` | 6px |
| gap | `--space-1.5` | 6px |
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
| selected | transparent | `--color-fg` | 2px bottom `--color-secondary` | pointer | 1 |
| disabled | transparent | `--color-fg-muted` | none | not-allowed | 0.5 on container |

## Selected State — Indicator Detail
| Property | Token Name | Value |
|----------|------------|-------|
| border-bottom | `--color-secondary` | 2px solid `#02563D` |
| border-color | — | `#02563D` (Figma `--accent/accent`) |

## Notes
- token-mismatch: indicator color `#02563D` (Figma `--accent/accent`) → matches `--color-secondary` / `--secondary-500`. The DS/Figma mapping in `color.md §9` maps `accent/accent → --color-primary` (#02563D), which is WRONG for this value. Use `--color-secondary`. Confirm with designer to fix the mapping doc.
- token-near-miss: muted text Figma `#71717a` → using `--color-fg-muted` (#64748B). Intent aligns.
- token-near-miss: selected text Figma `#18181b` (`--foreground/foreground`) → using `--color-fg` (#0F172A). Intent aligns.
- No background fill in any state — all background is transparent.
- hover: `--disabled-opacity: 0.5` applies to label element only.
- disabled: 0.5 opacity on entire tab container.
- focus state: not defined in Figma — use Standard Focus Ring from `effects.md`.
- font-family: using `--font-body` (Noto Sans) over Figma's Noto Sans.
