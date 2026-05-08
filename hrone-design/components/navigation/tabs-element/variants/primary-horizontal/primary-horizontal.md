---
component: tabs-element
variant: primary-horizontal
figma-node-id: 14115:71557
figma-content-hash: 14115-71556-prh
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs-element
- variant: primary-horizontal
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `primary` |
| orientation | `horizontal` \| `vertical` | `horizontal` |
| state | `default` \| `hover` \| `selected` \| `disabled` | `default` |
| label | string | `"Option"` |
| showPrefix | boolean | false |
| showSuffix | boolean | false |
| prefix | ReactNode | icon slot |
| suffix | ReactNode | icon slot |

## Design Tokens — Base Layout (all states)
| Property | Token Name | Value |
|----------|------------|-------|
| display | — | flex, row |
| align-items | — | center |
| justify-content | — | center |
| padding-x | `--space-3` | 12px |
| padding-y | `--space-1.5` | 6px |
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
| State | BG | Text | Border | Border-radius | Shadow | Cursor | Opacity |
|-------|----|------|--------|---------------|--------|--------|---------|
| default | transparent | `--color-fg-muted` | none | `--radius-2_5xl` (20px) | none | pointer | 1 |
| hover | transparent | `--color-fg` | none | `--radius-2_5xl` (20px) | none | pointer | 0.5 on label |
| selected | white pill (absolute) | `--color-fg` | none | `--radius-3xl` (24px) on pill | `--shadow-tab` | pointer | 1 |
| disabled | transparent | `--color-fg-muted` | none | `--radius-2_5xl` (20px) | none | not-allowed | 0.5 on container |

## Selected State — Pill Detail
| Property | Token Name | Value |
|----------|------------|-------|
| pill-bg | — | `#FFFFFF` (raw — see Notes) |
| pill-border-radius | `--radius-3xl` | 24px |
| pill-inset | — | `0 -4px` (extends 4px past padding) |
| pill-shadow | `--shadow-tab` | `0px 2px 8px rgba(0,0,0,0.06)` |
| pill-z-index | — | 0 (label sits at z-index 1 above) |

## Notes
- token-near-miss: muted text Figma `#71717a` → using `--color-fg-muted` (#64748B). Intent aligns.
- token-near-miss: segment/selected text Figma `#18181b` → using `--color-fg` (#0F172A). Intent aligns.
- token-near-miss: selected pill bg `#FFFFFF` (Figma `--segment`), closest `--color-surface` (#FFFFFF). Do NOT auto-snap — confirm with designer.
- hover opacity: Figma applies `--disabled-opacity: 0.5` to the label element only (not full tab). This is intentional — hover shows "pre-selected" state at half opacity.
- disabled opacity: `0.5` applied to entire tab container element (different from hover which only affects label).
- font-family: Figma uses `Noto Sans`; using `--font-body` (Noto Sans) as authoritative.
- focus state: not defined in Figma — use Standard Focus Ring from `effects.md`.
- `--radius-2_5xl` (20px) is in DS but has no direct rule.md alias — use CSS variable `--dimensions/radius/rounded-2_5xl` or raw 20px until foundation adds alias.
