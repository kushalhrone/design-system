---
component: tabs
variant: secondary-hug
figma-node-id: 14115:71657
figma-content-hash: 14115-71623-sechug
foundation-ref: ../../../../../foundation/foundation-token
---

## Meta
- component: tabs
- variant: secondary-hug
- status: ready

## Props
| Prop | Type | Default |
|------|------|---------|
| variant | `primary` \| `secondary` | `secondary` |
| behavior | `hug` \| `fill` | `hug` |
| showOption1–10 | boolean | true (1–5), false (6–10) |
| showScrollShadow | boolean | false |

## Design Tokens — Container
| Property | Token Name | Value |
|----------|------------|-------|
| background | — | transparent |
| border-bottom | `--color-border` | 1px solid #E2E8ED |
| border-radius | — | none |
| padding | — | none |
| gap | — | none |

## Design Tokens — Tab Item
| Property | Token Name | Value |
|----------|------------|-------|
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

## Scroll Shadow (showScrollShadow=true)
| Property | Value |
|----------|-------|
| scroll shadow bg | `#F8FAFB` (raw — see Notes) |
| chevron size | 16px |
| chevron position | 4px from left/right, vertically centered |
| shadow width | 64px |

## Notes
- token-mismatch: accent/indicator color — Figma `--accent/accent` resolves to `#02563D`. This matches `--secondary-500` / `--color-secondary` in foundation. However, DS/Figma mapping in `color.md §9` incorrectly maps `accent/accent → --color-primary` (#02563D). The correct resolved token here is `--color-secondary`. Confirm with designer.
- token-near-miss: muted text Figma `#71717a`, using `--color-fg-muted` (#64748B) — intent aligns.
- token-near-miss: selected text Figma `#18181b` (`--foreground/foreground`), using `--color-fg` (#0F172A).
- token-mismatch: scroll shadow bg `#F8FAFB` (Figma `--shadow-scroll`). Foundation has `--color-bg` = `--neutral-50` = `#F8FAFB`. **EXACT MATCH** → use `--color-bg`.
- font-family: using `--font-body` (Noto Sans) over Figma's Noto Sans.
- focus state: not defined in Figma — using Standard Focus Ring from `effects.md`.
- For vertical orientation, the selected indicator moves from `border-bottom` to `border-left` (see tabs-element secondary-vertical variant).
