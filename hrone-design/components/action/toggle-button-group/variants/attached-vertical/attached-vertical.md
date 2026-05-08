---
component: toggle-button-group
variant: attached-vertical
figma-node-id: 15256:27139
figma-content-hash: b8e21f4d7a53
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: toggle-button-group
- variant: attached-vertical
- status: ready

## Props
| Prop         | Type                  | Default    |
|--------------|-----------------------|------------|
| isAttached   | true \| false         | true       |
| orientation  | horizontal \| vertical | vertical  |
| size         | sm \| md \| lg        | sm         |
| width        | hug                   | hug        |
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

Container uses `flex-col` + `overflow-clip`. Buttons stretch full container width.

## Size Variants
| Size | Button Height | Min-Height | Padding X        | Gap (icon+text)  | Font Size Token    | Line Height Token                     | Figma Node     |
|------|---------------|------------|------------------|------------------|--------------------|---------------------------------------|----------------|
| sm   | 32px          | 32px       | `--space-3` 12px | `--space-2` 8px  | `--text-sm` 14px   | `dimensions/leading/text-sm` 20px     | `15256:27139`  |
| md   | 36px          | 36px       | `--space-4` 16px | `--space-2` 8px  | `--text-sm` 14px   | `dimensions/leading/text-sm` 20px     | `15256:27278`  |
| lg   | 40px          | 40px       | `--space-4` 16px | `--space-2` 8px  | `--text-base` 16px | `dimensions/leading/text-base` 24px   | `15256:27465`  |

## Width Behavior
Vertical orientation only supports `hug` width. Fill variant not defined in Figma — do not implement without designer sign-off.

## Divider (Horizontal Separator)
Between vertical buttons a horizontal 1px divider is rendered. Implementation: a zero-height container uses `rotate-90` and container query units to render a full-width 1px line.

| Size | Padding X (horizontal inset on divider slot) |
|------|----------------------------------------------|
| sm   | 8px (`--space-2`)                            |
| md   | 9px (raw — no exact token)                   |
| lg   | 10px (`--space-2.5` ✓)                       |

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
- Fill width not defined in Figma for vertical orientation — vertical buttons always hug width.
- Divider for vertical mode: same `_ToggleButtonGroupDivider` component, rotated 90° at the container level (not individual divider). The Figma implementation wraps divider in a `rotate-90` container with container query units to achieve full-width.
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` — variable font axis, apply as-is if Noto Sans variable font loaded.
