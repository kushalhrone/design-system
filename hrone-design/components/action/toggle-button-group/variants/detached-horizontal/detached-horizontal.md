---
component: toggle-button-group
variant: detached-horizontal
figma-node-id: 15416:11212
figma-content-hash: c6d94b2e1f07
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toggle-button-group
- variant: detached-horizontal
- status: ready

## Props
| Prop         | Type                  | Default    |
|--------------|-----------------------|------------|
| isAttached   | true \| false         | false      |
| orientation  | horizontal \| vertical | horizontal |
| size         | sm \| md \| lg        | sm         |
| width        | hug \| fill           | hug        |
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
No `overflow-clip`, no container border-radius. Each button gets `rounded-lg` (8px) independently.
Container gap between buttons: `--space-1` (4px).

**No dividers.** Detached mode uses visual gap instead of explicit divider components.

## Size Variants
| Size | Height | Min-Width | Padding X        | Gap (icon+text)  | Font Size Token    | Line Height Token                     | Figma Node     |
|------|--------|-----------|------------------|------------------|--------------------|---------------------------------------|----------------|
| sm   | 32px   | 32px      | `--space-3` 12px | `--space-2` 8px  | `--text-sm` 14px   | `dimensions/leading/text-sm` 20px     | `15416:11212`  |
| md   | 36px   | 36px      | `--space-4` 16px | `--space-2` 8px  | `--text-sm` 14px   | `dimensions/leading/text-sm` 20px     | `15416:11222`  |
| lg   | 40px   | 40px      | `--space-4` 16px | `--space-2` 8px  | `--text-base` 16px | `dimensions/leading/text-base` 24px   | `15416:11232`  |

## Width Behavior
| Width | Container               | Button Flex              |
|-------|-------------------------|--------------------------|
| hug   | natural width           | `shrink-0` (hug content) |
| fill  | parent width            | `flex: 1 0 0` (equal split) |

## Border Radius
Each button individually rounded — full `--radius-lg` (8px) on all corners. No edge-specific overrides.

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
- No dividers in detached mode — visual separation achieved by `--space-1` (4px) gap.
- Button radius is full `rounded-lg` on all corners (no edge clipping). This differs from `attached` where overflow-clip handles the shape.
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` — variable font axis, apply as-is if Noto Sans variable font loaded.
