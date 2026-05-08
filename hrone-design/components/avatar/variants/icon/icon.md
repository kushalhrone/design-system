---
component: avatar
variant: icon
figma-node-id: 5375:71425
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: avatar
- variant: icon
- status: ready

## Props
| Prop    | Type                                               | Default  |
|---------|----------------------------------------------------|----------|
| variant | `icon`                                             | —        |
| type    | `accent \| default \| success \| warning \| danger` | `accent` |
| icon    | `ReactNode \| null`                                | `null`   |

When `icon` is `null`, the component renders the default person icon asset from Figma. Pass a custom `ReactNode` to override.

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
| Type    | Background              | Icon Color                            |
|---------|-------------------------|---------------------------------------|
| default | `#f1f1f1` *(see Notes)* | `#18181b` *(see Notes)*              |
| accent  | `#f1f1f1` *(see Notes)* | `--secondary-500` → `#02563D`        |
| success | `#f1f1f1` *(see Notes)* | `--success` → `#16A34A`             |
| warning | `#f1f1f1` *(see Notes)* | `--warning` → `#D97706`             |
| danger  | `#f1f1f1` *(see Notes)* | `--error` → `#DC2626`               |

The icon itself is a person silhouette. Figma renders separate icon assets per type (each pre-colored). When building with an icon system (e.g. Lucide, Heroicons), apply `color` / `fill` directly using the token values above.

## Interaction States
| State    | Background | Icon color | Border | Cursor  | Other |
|----------|------------|------------|--------|---------|-------|
| default  | as above   | as above   | none   | default | —     |
| hover    | undefined  | undefined  | —      | —       | —     |
| focus    | undefined  | undefined  | —      | —       | —     |
| disabled | undefined  | undefined  | —      | —       | —     |

## Notes
- `token-mismatch`: background `#f1f1f1` has no foundation match. See `letter` variant Notes.
- `token-mismatch`: default icon color `#18181b` has no foundation match. See `letter` variant Notes.
- Figma ships separate pre-colored icon assets per type. Prefer an icon component with a `color` prop for implementation.
- Foundation radius.md recommends `rounded-full (9999px)` for avatars, but Figma uses `rounded-4xl (32px)`.
- Hover, focus, and disabled states are not defined in Figma.
