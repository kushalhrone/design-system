---
component: tabs
variant: secondary-fill
figma-node-id: 14115:71705
figma-content-hash: 14115-71623-secfill
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs
- variant: secondary-fill
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `secondary` |
| behavior | `hug` \| `fill` | `fill` |
| showOption1–10 | boolean | true (1–5), false (6–10) |
| showScrollShadow | boolean | false |

## Design Tokens — Container
| Property | Token Name | Value |
|----------|------------|-------|
| background | — | transparent |
| border-bottom | `--color-border` | 1px solid #E2E8ED |
| border-radius | — | none |
| width | — | fixed or 100% (fill parent) |

## Design Tokens — Tab Item (fill behavior)
| Property | Token Name | Value |
|----------|------------|-------|
| flex | — | `flex: 1 0 0` |
| min-width | — | 1px |
| padding-x | `--space-3` | 12px |
| padding-top | `--space-1` | 4px |
| padding-bottom | `--space-1.5` | 6px |
| gap (icon–label) | `--space-1.5` | 6px |

## Design Tokens — Selected Tab Indicator
| Property | Token Name | Value |
|----------|------------|-------|
| border-bottom | `--color-secondary` | 2px solid #02563D |
| background | — | transparent |

## Design Tokens — Tab Label
| Property | Token Name | Value |
|----------|------------|-------|
| font-family | `--font-body` | Noto Sans (see Notes) |
| font-size | `--text-sm` | 14px |
| font-weight | `--font-medium` | 500 |
| line-height | — | 20px |
| letter-spacing | — | 0px |
| text-align | — | center |

## Interaction States
| State | Tab BG | Tab Text | Indicator | Cursor | Other |
|-------|--------|----------|-----------|--------|-------|
| default | transparent | `--color-fg-muted` | none | pointer | — |
| hover | transparent | `--color-fg-muted` | none | pointer | text opacity: 0.5 |
| selected | transparent | `--color-fg` | 2px bottom `--color-secondary` | pointer | — |
| disabled | transparent | `--color-fg-muted` | none | not-allowed | opacity: 0.5 |
| focus | — | — | focus-ring | pointer | undefined — use design system default |

## Notes
- Identical to `secondary-hug` except each tab uses `flex: 1 0 0` — tabs stretch equally to fill width.
- token-mismatch: accent indicator `#02563D` → `--color-secondary` (not `--color-primary`). See secondary-hug notes.
- token-mismatch: scroll shadow bg `#F8FAFB` → **EXACT MATCH** `--color-bg`. Use `--color-bg`.
- token-near-miss: text colors — see secondary-hug notes.
- font-family: using `--font-body` (Noto Sans) over Figma's Noto Sans.
- focus state: not defined in Figma — using Standard Focus Ring from `effects.md`.
