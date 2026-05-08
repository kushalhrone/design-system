---
component: calendar-popover
variant: all-types
figma-node-id: 2726:27246
figma-content-hash: b8c9d0e1f2a3
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: CalendarPopover
- variant: all-types (present, future, years, multi + mobile)
- status: ready

## Props

| Prop | Type | Default |
|---|---|---|
| type | present \| future \| years \| multi | present |
| showTime | boolean | true |
| isMobile | boolean | false |

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| background | overlay (white) | #ffffff |
| border-radius | dimensions/radius/rounded-lg | 8px |
| overflow | hidden | — |
| padding-bottom | dimensions/spacing/4 | 16px |
| padding-x | dimensions/spacing/4 | 16px |
| width-present | 288px (raw) | 288px |
| width-future | 288px (raw) | 288px |
| width-years | 288px (raw) | 288px |
| width-multi | 812px (raw) | 812px |

## Variants

### type=present / type=future (288px)

```
CalendarPopover (288×452px)
  └─ Calendar (256px, type=present or future) — centered, overflow hidden
  └─ _CalendarTime (optional, below grid)
```

Figma nodes: `2726:27247` (present), `2734:28467` (future)

### type=years (288px)

```
CalendarPopover (288×348px)
  └─ CalendarNavigation — single, open (accent color)
  └─ _CalendarYear (280px wide, 304px tall)
```

Figma node: `14480:4994`

### type=multi (812px)

```
CalendarPopover (812×443px)
  └─ Multi-calendar layout (two 256px + gap)
  └─ _CalendarSelectedRange (optional)
```

Figma node: `14485:4989`

### mobile variant (288px, bottom sheet)

```
CalendarPopoverMobile
  ├─ drag handle (36×5px, separator-tertiary, rounded-sm)
  └─ CalendarPopover (present type, with time)
```

| Property | Token Name | Value |
|---|---|---|
| drag-handle-width | 36px (raw) | 36px |
| drag-handle-height | 5px (raw) | 5px |
| drag-handle-radius | dimensions/radius/rounded-sm | 4px |
| drag-handle-color | separator/separator-tertiary | #cdcdce |
| wrapper-gap | dimensions/spacing/2 | 8px |
| wrapper-padding-top | dimensions/spacing/2 | 8px |

Figma node: `15293:6838`

## Figma Node Map

| Node ID | Type | Size |
|---|---|---|
| `2726:27247` | popover — present | 288×452px |
| `2734:28467` | popover — future | 288×452px |
| `14480:4994` | popover — years | 288×348px |
| `14485:4989` | popover — multi | 812×443px |
| `15293:6838` | popover — mobile (present) | 288×396px |
| `19124:7588` | CalendarPopover inner (present+time) | full |

## Notes

- token-mismatch: `width-present/future/years` 288px has no exact foundation spacing token (spacing/64=256px, next is 288px raw)
- token-mismatch: `width-multi` 812px has no foundation token
- The mobile popover has an additional drag-handle at the top for bottom-sheet UX
- `overlay` token resolves to `white` (#ffffff) — this is the popover surface color, not the backdrop
- Both `CalendarPopover` (desktop) and `CalendarPopoverMobile` use `overflow: hidden` + `border-radius: rounded-lg`
