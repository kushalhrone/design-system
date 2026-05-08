---
component: button-group
variant: vertical
figma-node-id: 21281:71882
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: button-group
- variant: vertical
- status: ready

## Props
| Prop         | Type                  | Default      |
|--------------|-----------------------|--------------|
| orientation  | horizontal \| vertical | vertical    |
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
| Size | Height | Min-Width | Padding X       | Padding Y       | Gap            | Font Size Token | Line Height Token              |
|------|--------|-----------|-----------------|-----------------|----------------|-----------------|--------------------------------|
| sm   | 32px   | 32px      | `--space-3` 12px | `--space-1.5` 6px | `--space-1` 4px | `--text-sm` 14px | `dimensions/leading/text-sm` 20px |
| md   | 36px   | 36px      | `--space-4` 16px | `--space-2` 8px  | `--space-2` 8px | `--text-sm` 14px | `dimensions/leading/text-sm` 20px |
| lg   | 40px   | 40px      | `--space-4` 16px | `--space-2` 8px  | `--space-2` 8px | `--text-base` 16px | `dimensions/leading/text-base` 24px |

## Divider Sizes (Horizontal Rule Between Stacked Buttons)
Dividers in vertical mode are rendered as horizontal lines. Divider width is constrained to the button's inner content width, rendered via 90° rotation of the same `ButtonGroupDivider` component.

| Size | Divider Span Width | Token / Note          |
|------|--------------------|-----------------------|
| sm   | 16px               | `--space-4`           |
| md   | 18px               | no exact token — near-miss: `--space-4` (16px) / `--space-5` (20px). Use raw 18px. |
| lg   | 20px               | `--space-5`           |

## Width Behavior
| Width | Container | Button Flex             |
|-------|-----------|-------------------------|
| hug   | natural   | `shrink-0` (hug content) |
| fill  | undefined — fill not defined in Figma for vertical orientation | — |

## Border Radius — Corner Assignment
Buttons at group edges receive full rounded corners on the exposed side.

| Position       | Corners Rounded                              |
|----------------|----------------------------------------------|
| First button   | top-left + top-right (`rounded-lg`)          |
| Middle button  | none                                         |
| Last button    | bottom-left + bottom-right (`rounded-lg`)   |
| Only 2 buttons | first=top corners, last=bottom corners       |

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
| `21281:72005`  | sm   | hug   |
| `21281:72015`  | md   | hug   |
| `21281:72025`  | lg   | hug   |

## Notes
- token-mismatch: Figma `accent/accent` resolves to fallback `#02563D` (--secondary-500 / green). Foundation DS/Figma mapping states `accent/accent → --color-primary (#02563D / orange)`. Established convention from `components/action/buttons/primary/primary.md`. Designer must resolve.
- Hover/active/focus/disabled states not defined in Figma for vertical button-group. Inherit from individual button variant states (see `components/action/buttons/`).
- Fill width not defined in Figma for vertical orientation — undefined behavior. Do not implement without designer confirmation.
- token-near-miss: md divider span = 18px. Closest tokens: `--space-4` (16px) / `--space-5` (20px). Using raw 18px — do not auto-snap.
- Divider is rotated 90° from the same `ButtonGroupDivider` component used in horizontal mode. See `horizontal.md` for divider variant mapping table.
- `fontVariationSettings: "'CTGR' 0, 'wdth' 100"` observed in Figma — variable font axis, no foundation token equivalent. Use as-is if Noto Sans variable font is loaded.
