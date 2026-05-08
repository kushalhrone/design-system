---
component: tabs
variant: primary-hug
figma-node-id: 14115:71624
figma-content-hash: 14115-71623-prhug
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs
- variant: primary-hug
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `primary` |
| behavior | `hug` \| `fill` | `hug` |
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
| backdrop-blur | — | 0px (disabled in this variant) |
| overflow | — | clip |

## Design Tokens — Selected Tab Pill
| Property | Token Name | Value |
|----------|------------|-------|
| background | — | `#FFFFFF` (raw — see Notes) |
| border-radius | `--radius-3xl` | 24px |
| inset-x | — | -4px (overflows container by 4px each side) |
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
| padding-x | `--space-3` | 12px |
| padding-y | `--space-1.5` | 6px |
| gap (icon–label) | `--space-1.5` | 6px |

## Interaction States
| State | Tab BG | Tab Text | Border | Cursor | Other |
|-------|--------|----------|--------|--------|-------|
| default | transparent | `--color-fg-muted` | none | pointer | — |
| hover | transparent | `--color-fg` | none | pointer | text opacity: 0.5 |
| selected | white pill | `--color-fg` | none | pointer | `--shadow-tab` on pill |
| disabled | transparent | `--color-fg-muted` | none | not-allowed | container opacity: 0.5 |
| focus | — | — | focus-ring | pointer | undefined — use design system default |

## Scroll Shadow (showScrollShadow=true)
| Property | Value |
|----------|-------|
| scroll shadow bg | `#eaeaeb` (raw — see Notes) |
| chevron size | 16px |
| chevron position | 4px from left/right edge, vertically centered |
| shadow width | 64px |

## Notes
- token-mismatch: container background `#f1f1f1` (Figma `--default/default`) has no exact foundation match. Closest: `--neutral-100` (#F1F5F7, delta ≈8pts). Using raw Figma value — designer must confirm.
- token-near-miss: selected tab pill bg `#FFFFFF` (Figma `--segment`), closest `--color-surface` (#FFFFFF). Do NOT auto-snap — use raw value until designer confirms.
- token-near-miss: muted text Figma `#71717a` (`--foreground/muted`), closest `--color-fg-muted` (#64748B). Intent aligns; using `--color-fg-muted` as resolved token.
- token-near-miss: segment text Figma `#18181b` (`--foreground/segment`), closest `--color-fg` (#0F172A). Intent aligns; using `--color-fg` as resolved token.
- token-mismatch: scroll shadow bg `#eaeaeb` (Figma `--surface/surface-tertiary`) not in foundation. Closest: `--color-border` / `--neutral-200` (#E2E8ED). Using raw Figma value.
- hover state uses `--disabled-opacity: 0.5` on label only (text fades, not full element). This is distinct from disabled state which applies opacity to the entire tab item.
- font-family: Figma uses `Noto Sans`; foundation specifies `Noto Sans`. Using `--font-body` (Noto Sans) as authoritative.
- focus state: not defined in Figma — using Standard Focus Ring from `effects.md`.
- selected pill `inset: 0 -4px` causes 4px horizontal overflow, clipped by container `overflow: clip`.
