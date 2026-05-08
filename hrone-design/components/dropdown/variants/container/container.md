---
component: dropdown
variant: container
figma-node-id: 2405:4479
figma-content-hash: a3f9c12d8b41
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: dropdown
- variant: container
- status: ready

## Props
| Prop          | Type    | Default |
|---------------|---------|---------|
| showGroups    | boolean | true    |
| showDivider   | boolean | true    |
| width         | string  | 240px   |

## Design Tokens
| Property       | Token Name                            | Value                                                                                   |
|----------------|---------------------------------------|-----------------------------------------------------------------------------------------|
| background     | color-surface (overlay/white)         | #FFFFFF (raw — see Notes)                                                               |
| backdrop-blur  | --blur                                | 6px                                                                                     |
| border-radius  | --dimensions/radius/rounded-lg        | 8px                                                                                     |
| padding        | --space-1                             | 4px                                                                                     |
| gap            | --space-0.5                           | 2px                                                                                     |
| width          | none (fixed)                          | 240px                                                                                   |
| shadow         | shadow-overlay (effects.md)           | 0 14px 28px rgba(0,0,0,0.08), 0 -6px 12px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.06)|
| inset-shadow   | shadow-overlay inset                  | inset 0 0 1px 0 rgba(0,0,0,0)                                                           |

## Group Header Tokens
| Property      | Token Name                     | Value |
|---------------|--------------------------------|-------|
| padding-top   | --space-2.5                    | 10px  |
| padding-bottom| --space-1                      | 4px   |
| padding-x     | --space-3                      | 12px  |
| font-size     | dimensions/font/text-xs        | 12px  |
| font-weight   | font-medium                    | 500   |
| line-height   | dimensions/leading/text-xs     | 16px  |
| text-color    | --color-fg-muted (near-miss)   | #71717a (raw — see Notes) |

## Divider / Separator Tokens
| Property      | Token Name                     | Value |
|---------------|--------------------------------|-------|
| border-radius | --dimensions/radius/rounded-sm | 4px   |
| height        | none                           | 1px   |
| padding-x     | --space-3                      | 12px  |

## Notes
- token-near-miss: Overlay background is white `#FFFFFF` in Figma; closest foundation token `--color-surface` resolves to `#FFFFFF` (--neutral-25). Gap of 3 hex points — designer must confirm.
- token-near-miss: Group header text `#71717a` (Figma `--foreground/muted`); closest foundation token `--color-fg-muted` = `--neutral-500` = `#64748B`. Gap of ~7 hex points — designer must confirm.
- The overlay uses `backdrop-blur: var(--blur, 6px)` — apply `backdrop-filter: blur(6px)` on the pseudo-layer behind content.
- Shadow exactly matches `shadow-overlay` from `effects.md`.
- Figma DS token `background/background → --color-bg` mapping confirmed per `color.md` section 9.
