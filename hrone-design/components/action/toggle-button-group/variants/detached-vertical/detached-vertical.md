---
component: toggle-button-group
variant: detached-vertical
figma-node-id: 15416:11728
figma-content-hash: d2a85f3c9e61
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toggle-button-group
- variant: detached-vertical
- status: ready

## Props
| Prop         | Type                  | Default    |
|--------------|-----------------------|------------|
| isAttached   | true \| false         | false      |
| orientation  | horizontal \| vertical | vertical  |
| size         | sm \| md \| lg        | sm         |
| width        | hug                   | hug        |
| showButton3  | boolean               | true       |
| showButton4  | boolean               | false      |
| showButton5  | boolean               | false      |

## Design Tokens
| Property        | Token Name                               | Value     |
|-----------------|------------------------------------------|-----------|
| background      | --default/default                        | #f1f1f1   |
| text            | --default/default-foreground             | #18181b   |
| border          | none                                     | —         |
| border-radius   | `--dimensions/radius/rounded-lg`         | 8px       |
| font-family     | --font-body                              | Noto Sans |
| font-weight     | --font-medium                            | 500       |
| letter-spacing  | --tracking-normal                        | 0         |
| icon-size       | —                                        | 16px      |
| gap between btns| `--space-1`                              | 4px       |

## Container Structure
`flex-col` + `gap-1` (4px). No overflow-clip, no container border-radius.
Each button independently rounded with `rounded-lg` (8px) on all corners.
**No dividers.** Visual separation via gap.

## Size Variants
| Size | Button Height | Padding X        | Gap (icon+text)  | Font Size Token    | Line Height Token                     | Figma Node     |
|------|---------------|------------------|------------------|--------------------|---------------------------------------|----------------|
| sm   | 32px          | `--space-3` 12px | `--space-2` 8px  | `--text-sm` 14px   | `dimensions/leading/text-sm` 20px     | `15416:11728`  |
| md   | 36px          | `--space-4` 16px | `--space-2` 8px  | `--text-sm` 14px   | `dimensions/leading/text-sm` 20px     | `15416:11738`  |
| lg   | 40px          | `--space-4` 16px | `--space-2` 8px  | `--text-base` 16px | `dimensions/leading/text-base` 24px   | `15416:11748`  |

## Width Behavior
Vertical orientation only supports `hug` width. Fill not defined in Figma for detached-vertical.

## Interaction States
| State    | Background                    | Text                           | Cursor      |
|----------|-------------------------------|--------------------------------|-------------|
| default  | `--default/default` #f1f1f1   | `--default/default-fg` #18181b | pointer     |
| hover    | undefined — not in Figma      | undefined                      | pointer     |
| selected | undefined — not in Figma      | undefined                      | pointer     |
| disabled | undefined — not in Figma      | undefined                      | not-allowed |

## Notes
- token-near-miss: background `#f1f1f1`, closest `--neutral-100` (#F1F5F7) — delta R:+2 G:+3 B:+5. Resolve with designer.
- token-mismatch: text-color `#18181b` has no foundation match. Use raw value until component token added.
- No dividers in detached mode — gap provides visual separation.
- Each button full `rounded-lg` (8px) on all corners.
- Fill width not defined in Figma for vertical detached mode — do not implement without designer sign-off.
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` — variable font axis, apply as-is if Noto Sans variable font loaded.
- Detached-vertical Figma nodes fetched from overview frame (15251:25661) node map. Tokens inferred from detached-horizontal + attached-vertical patterns — verify against live Figma nodes before final implementation.
