---
component: button-group
variant: horizontal
figma-node-id: 14216:12721
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: button-group
- variant: horizontal
- status: ready

## Props
| Prop         | Type                  | Default      |
|--------------|-----------------------|--------------|
| orientation  | horizontal \| vertical | horizontal  |
| size         | sm \| md \| lg        | sm           |
| width        | hug \| fill           | hug          |
| showButton3  | boolean               | true         |
| showButton4  | boolean               | false        |
| showButton5  | boolean               | false        |
| showDivider2 | boolean               | true         |
| showDivider3 | boolean               | false        |
| showDivider4 | boolean               | false        |

## Design Tokens
| Property           | Token Name                          | Value     |
|--------------------|-------------------------------------|-----------|
| background         | accent/accent                       | #02563D   |
| text               | accent/accent-foreground            | #FFFFFF   |
| border             | --color-border                      | #E2E8ED   |
| border-radius      | --dimensions/radius/rounded-lg      | 8px       |
| font-family        | --font-body                         | Noto Sans |
| font-weight        | --font-medium                       | 500       |
| letter-spacing     | --tracking-normal                   | 0         |
| icon-size          | —                                   | 16px      |

## Size Variants
| Size | Height | Min-Width | Padding X       | Padding Y       | Gap            | Font Size Token | Line Height Token             |
|------|--------|-----------|-----------------|-----------------|----------------|-----------------|-------------------------------|
| sm   | 32px   | 32px      | `--space-3` 12px | `--space-1.5` 6px | `--space-1` 4px | `--text-sm` 14px | `dimensions/leading/text-sm` 20px |
| md   | 36px   | 36px      | `--space-4` 16px | `--space-2` 8px  | `--space-2` 8px | `--text-sm` 14px | `dimensions/leading/text-sm` 20px |
| lg   | 40px   | 40px      | `--space-4` 16px | `--space-2` 8px  | `--space-2` 8px | `--text-base` 16px | `dimensions/leading/text-base` 24px |

## Divider Sizes (Horizontal Separator)
| Size | Divider Height | Token         |
|------|----------------|---------------|
| sm   | 16px           | `--space-4`   |
| md   | 20px           | `--space-5`   |
| lg   | 24px           | `--space-6`   |

## Width Behavior
| Width | Container | Button Flex         |
|-------|-----------|---------------------|
| hug   | natural   | `shrink-0` (hug content) |
| fill  | parent-set | `flex: 1 0 0` (equal split) |

## Border Radius — Corner Assignment
Buttons at group edges receive full rounded corners on the exposed side. Internal buttons have no radius on shared edges.

| Position       | Corners Rounded                            |
|----------------|--------------------------------------------|
| First button   | top-left + bottom-left (`rounded-lg`)      |
| Middle button  | none                                       |
| Last button    | top-right + bottom-right (`rounded-lg`)   |
| Only 2 buttons | first=left corners, last=right corners     |

## Interaction States
| State    | Background                         | Text                    | Border           | Cursor      |
|----------|------------------------------------|-------------------------|------------------|-------------|
| default  | `var(--accent/accent, #02563D)`    | `--neutral-25 #FFFFFF`  | `--color-border` | pointer     |
| hover    | undefined — not defined in Figma   | undefined               | undefined        | pointer     |
| active   | undefined — not defined in Figma   | undefined               | undefined        | pointer     |
| focus    | undefined — not defined in Figma   | undefined               | undefined        | pointer     |
| disabled | undefined — not defined in Figma   | undefined               | undefined        | not-allowed |

## Figma Node Map
| Node ID        | Size | Width |
|----------------|------|-------|
| `14216:12674`  | sm   | hug   |
| `14216:12722`  | md   | hug   |
| `14216:12822`  | lg   | hug   |
| `14216:13033`  | sm   | fill  |
| `14216:13043`  | md   | fill  |
| `14216:13053`  | lg   | fill  |

## Sub-Component — ButtonGroupDivider
Node: `14339:29992`. Renders a 1px vertical separator between buttons. Supports 6 variant fills aligned to button variant:

| Divider Variant | Maps to Button Variant |
|-----------------|------------------------|
| primary         | primary                |
| secondary       | secondary              |
| tertiary        | tertiary               |
| ghost           | ghost                  |
| danger          | danger                 |
| dangerSoft      | danger-soft            |

## Notes
- token-mismatch: Figma `accent/accent` resolves to fallback `#02563D` (--secondary-500 / green). Foundation DS/Figma mapping states `accent/accent → --color-primary (#02563D / orange)`. This discrepancy is pre-existing and matches the convention established in `components/action/buttons/primary/primary.md`. Designer must resolve canonical token alias.
- Hover/active/focus/disabled states not defined in Figma for button-group. Inherit from individual button variant states (see `components/action/buttons/`).
- `w-[543px]` appears in Figma fill-mode frames — this is a canvas placeholder width, not a design token. Fill mode should expand to parent container width.
- Divider height 20px (md) maps to `--space-5` exactly ✓. Divider height 16px (sm) maps to `--space-4` ✓. Divider height 24px (lg) maps to `--space-6` ✓.
- `showButton3` defaults to `true` — minimum viable group is always 2 visible buttons + 1 divider.
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` observed in Figma — variable font axis, no equivalent foundation token. Use as-is if Noto Sans variable font is loaded.
