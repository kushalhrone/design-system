---
component: tabs
variant: primary-fill
figma-node-id: 14115:71672
figma-content-hash: 14115-71623-prfill
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs
- variant: primary-fill
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `primary` |
| behavior | `hug` \| `fill` | `fill` |
| showOption1–10 | boolean | true (1–5), false (6–10) |
| showScrollShadow | boolean | false |

## Design Tokens — Container
| Property | Token Name | Value |
|----------|------------|-------|
| background | — | `#f1f1f1` (raw — see Notes) |
| border-radius | `--radius-3xl` | 24px |
| padding-x | `--space-2` | 8px |
| padding-y | `--space-1` | 4px |
| gap | `--space-0.5` | 2px |
| width | — | fixed or 100% (fill parent) |
| backdrop-blur | — | 0px (disabled) |
| overflow | — | clip |

## Design Tokens — Tab Item (fill behavior)
| Property | Token Name | Value |
|----------|------------|-------|
| flex | — | `flex: 1 0 0` (equal width distribution) |
| min-width | — | 1px (prevents collapse) |
| padding-x | `--space-3` | 12px |
| padding-y | `--space-1.5` | 6px |

## Design Tokens — Selected Tab Pill
| Property | Token Name | Value |
|----------|------------|-------|
| background | — | `#FFFFFF` (raw — see Notes) |
| border-radius | `--radius-3xl` | 24px |
| inset-x | — | -4px |
| shadow | `--shadow-tab` | `0px 2px 8px rgba(0,0,0,0.06)` |

## Design Tokens — Tab Label
| Property | Token Name | Value |
|----------|------------|-------|
| font-family | `--font-body` | Noto Sans (see Notes) |
| font-size | `--text-sm` | 14px |
| font-weight | `--font-medium` | 500 |
| line-height | — | 20px |
| letter-spacing | — | 0px |
| text-align | — | center |
| gap (icon–label) | `--space-1.5` | 6px |

## Interaction States
| State | Tab BG | Tab Text | Border | Cursor | Other |
|-------|--------|----------|--------|--------|-------|
| default | transparent | `--color-fg-muted` | none | pointer | — |
| hover | transparent | `--color-fg` | none | pointer | text opacity: 0.5 |
| selected | white pill | `--color-fg` | none | pointer | `--shadow-tab` on pill |
| disabled | transparent | `--color-fg-muted` | none | not-allowed | container opacity: 0.5 |
| focus | — | — | focus-ring | pointer | undefined — use design system default |

## Notes
- Identical to `primary-hug` except each tab item uses `flex: 1 0 0` instead of `shrink-0` — tabs stretch to fill available width equally.
- token-mismatch: container background `#f1f1f1` — no exact foundation match. See primary-hug notes.
- token-near-miss: selected tab pill bg `#FFFFFF` — see primary-hug notes.
- token-near-miss: muted/segment text colors — see primary-hug notes.
- font-family: using `--font-body` (Noto Sans) over Figma's Noto Sans.
- focus state: not defined in Figma — using Standard Focus Ring from `effects.md`.
