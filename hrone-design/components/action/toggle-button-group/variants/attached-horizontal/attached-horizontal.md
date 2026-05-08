---
component: toggle-button-group
variant: attached-horizontal
figma-node-id: 15251:25662
figma-content-hash: a3f7c91d2e84
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toggle-button-group
- variant: attached-horizontal
- status: ready

## Props
| Prop         | Type                  | Default    |
|--------------|-----------------------|------------|
| isAttached   | true \| false         | true       |
| orientation  | horizontal \| vertical | horizontal |
| size         | sm \| md \| lg        | sm         |
| width        | hug \| fill           | hug        |
| showButton3  | boolean               | true       |
| showButton4  | boolean               | false      |
| showButton5  | boolean               | false      |
| showDivider2 | boolean               | true       |
| showDivider3 | boolean               | false      |
| showDivider4 | boolean               | false      |

## Design Tokens
| Property        | Token Name                               | Value     |
|-----------------|------------------------------------------|-----------|
| background      | --default/default                        | #f1f1f1   |
| text            | --default/default-foreground             | #18181b   |
| border          | none (overflow-clip, no border)          | —         |
| font-family     | --font-body                              | Noto Sans |
| font-weight     | --font-medium                            | 500       |
| letter-spacing  | --tracking-normal                        | 0         |
| icon-size       | —                                        | 16px      |

## Container Border Radius (isAttached=true)
| Size | Token                                  | Value |
|------|----------------------------------------|-------|
| sm   | `--dimensions/radius/rounded-2xl`      | 16px  |
| md   | `--dimensions/radius/rounded-3xl`      | 24px  |
| lg   | `--dimensions/radius/rounded-3xl`      | 24px  |

Container uses `overflow-clip` — individual toggle buttons have no radius of their own.

## Size Variants
| Size | Height | Min-Width | Padding X        | Gap (icon+text)  | Font Size Token   | Line Height Token                    |
|------|--------|-----------|------------------|------------------|-------------------|--------------------------------------|
| sm   | 32px   | 32px      | `--space-3` 12px | `--space-2` 8px  | `--text-sm` 14px  | `dimensions/leading/text-sm` 20px    |
| md   | 36px   | 36px      | `--space-4` 16px | `--space-2` 8px  | `--text-sm` 14px  | `dimensions/leading/text-sm` 20px    |
| lg   | 40px   | 40px      | `--space-4` 16px | `--space-2` 8px  | `--text-base` 16px | `dimensions/leading/text-base` 24px |

## Width Behavior
| Width | Container           | Button Flex             |
|-------|---------------------|-------------------------|
| hug   | natural width       | `shrink-0` (hug content) |
| fill  | parent width        | `flex: 1 0 0` (equal split) |

## Divider (ToggleButtonGroupDivider)
A zero-width slot rotated -90° to render a 1px vertical separator between buttons.
Figma node: `15251:25727`

| Size | Padding Y (vertical inset) |
|------|----------------------------|
| sm   | 8px (`--space-2`)          |
| md   | 9px (raw — no token match) |
| lg   | 10px (raw — no token match) |

Divider is always present between buttons 1–2. Dividers 2–4 controlled by `showDivider2/3/4`.

## Interaction States
| State    | Background                    | Text                          | Cursor      | Other               |
|----------|-------------------------------|-------------------------------|-------------|---------------------|
| default  | `--default/default` #f1f1f1   | `--default/default-fg` #18181b | pointer    | —                   |
| hover    | undefined — not in Figma      | undefined                     | pointer     | inherit from ToggleButton |
| active   | undefined — not in Figma      | undefined                     | pointer     | inherit from ToggleButton |
| focus    | undefined — not in Figma      | undefined                     | pointer     | inherit from ToggleButton |
| disabled | undefined — not in Figma      | undefined                     | not-allowed | inherit from ToggleButton |
| selected | undefined — not in Figma      | undefined                     | pointer     | defined at ToggleButton level |

## Figma Node Map
| Node ID       | Size | Width |
|---------------|------|-------|
| `15251:25662` | sm   | hug   |
| `15251:25682` | md   | hug   |
| `15251:25702` | lg   | hug   |
| `15251:25672` | sm   | fill  |
| `15251:25692` | md   | fill  |
| `15251:25712` | lg   | fill  |

## Notes
- token-near-miss: background `#f1f1f1`, closest foundation token `--neutral-100` (#F1F5F7) — delta R:+2 G:+3 B:+5. Uses HeroUI `--default/default` component token. Resolve with designer before building.
- token-mismatch: text-color `#18181b` has no foundation match. HeroUI `--heroui-default-foreground`. No HRON token equivalent — use raw value or add component-level token.
- `w-[543px]` in Figma fill-mode frames is canvas placeholder width, not a token. Fill mode expands to parent container.
- Divider padding-y 9px (md) and 10px (lg) have no foundation token matches (`--space-2`=8px, `--space-2.5`=10px). Log: md divider py=9px uses raw value; lg divider py=10px maps to `--space-2.5` (10px) ✓.
- Toggle buttons support icon-left, icon-right, icon-only, or text-only — controlled at ToggleButton level, not group level.
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` — variable font axis from Noto Sans variable font. No foundation token. Apply as-is if variable font is loaded.
- `backdrop-blur` applied at individual button level via Figma `blur` effect token. Value undefined in Figma — not currently set (0px).
- Reference: https://v3.heroui.com/docs/components/toggle-button-group
