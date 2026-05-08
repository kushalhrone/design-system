---
component: avatar
variant: icon-soft
figma-node-id: 12108:28607
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: avatar
- variant: icon-soft
- status: ready

## Props
| Prop    | Type                                               | Default  |
|---------|----------------------------------------------------|----------|
| variant | `iconSoft`                                         | —        |
| type    | `accent \| default \| success \| warning \| danger` | `accent` |
| icon    | `ReactNode \| null`                                | `null`   |

## Design Tokens
| Property        | Token Name                         | Value      |
|-----------------|------------------------------------|------------|
| width × height  | `--space-9`                        | `36px`     |
| border-radius   | `--dimensions/radius/rounded-4xl`  | `32px`     |
| padding         | `--space-2`                        | `8px`      |
| gap             | `--space-2`                        | `8px`      |
| background      | *(see type matrix below)*          | —          |
| icon-color      | *(see type matrix below)*          | —          |
| icon-size       | `--space-4`                        | `16px`     |

## Type Matrix

`default` uses the solid grey background (same as `icon` variant). Soft tinting applies for all other types.

| Type    | Background                                                             | Icon Color                            |
|---------|------------------------------------------------------------------------|---------------------------------------|
| default | `#f1f1f1` solid *(see Notes)*                                          | `#18181b` *(see Notes)*              |
| accent  | `--color-secondary-soft` → `rgba(2, 86, 61, 0.15)` over `#fff`       | `--secondary-500` → `#02563D`        |
| success | `rgba(3, 152, 85, 0.15)` over `#fff` *(see Notes)*                    | `--success` → `#16A34A`             |
| warning | `rgba(247, 144, 9, 0.15)` over `#fff` *(see Notes)*                   | `--warning` → `#D97706`             |
| danger  | `rgba(217, 45, 32, 0.15)` over `#fff` *(see Notes)*                   | `--error` → `#DC2626`               |

Background implementation (same pattern as `letter-soft`):
```css
background-image:
  linear-gradient(90deg, {color @ 0.15} 0%, {color @ 0.15} 100%),
  linear-gradient(90deg, #fff 0%, #fff 100%);
```

## Interaction States
| State    | Background | Icon color | Border | Cursor  | Other |
|----------|------------|------------|--------|---------|-------|
| default  | as above   | as above   | none   | default | —     |
| hover    | undefined  | undefined  | —      | —       | —     |
| focus    | undefined  | undefined  | —      | —       | —     |
| disabled | undefined  | undefined  | —      | —       | —     |

## Notes
- `token-mismatch`: background `#f1f1f1` (default type) has no foundation match. See `letter` variant Notes.
- `token-mismatch`: default foreground `#18181b` has no foundation match. See `letter` variant Notes.
- `token-mismatch`: success-soft, warning-soft, and danger-soft backgrounds have no foundation tokens. See `letter-soft` variant Notes.
- Foundation radius.md recommends `rounded-full (9999px)` for avatars, but Figma uses `rounded-4xl (32px)`.
- Hover, focus, and disabled states are not defined in Figma.
