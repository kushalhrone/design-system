---
component: select
variant: open
figma-node-id: 2501:10594
figma-content-hash: n/a
foundation-ref: ../../../../foundation/foundation-token
---

## Also Load
> Trigger field tokens (border, radius, padding, label, placeholder) not repeated here.
> Also load: `components/select/variants/closed/closed.md`

## Meta
- component: select
- variant: open
- status: ready

## Props
| Prop          | Type      | Default        |
|---------------|-----------|----------------|
| state         | `true`    | —              |
| label         | `string`  | `"State"`      |
| required      | `boolean` | `true`         |
| placeholder   | `string`  | `"Select one"` |
| options       | `string[]`| —              |

## Design Tokens — Trigger Field
All trigger tokens are identical to the `closed` variant. See `closed/closed.md`.

The only visual change on the trigger when open:
| Property          | Closed state | Open state  |
|-------------------|--------------|-------------|
| Chevron direction | down (0°)    | up (180° rotated) |

## Design Tokens — Dropdown Panel
| Property           | Token                              | Value     |
|--------------------|------------------------------------|-----------|
| width              | `256px` (matches trigger)          | —         |
| background         | *(see Notes)*                      | `white`   |
| border-radius      | `--dimensions/radius/rounded-lg`   | `8px`     |
| padding            | `--space-1`                        | `4px`     |
| gap (between listboxes) | `--space-0-5`               | `2px`     |
| shadow             | *(see Notes — shadow-overlay)*     | —         |
| position           | `absolute`, below trigger          | —         |

## Design Tokens — ListBox (group)
The dropdown contains one or more `ListBox` groups. Each group is a `flex-col` with no additional gap between items (items are self-spaced by their own padding).

## Design Tokens — List Item
| Property        | Token                              | Value     |
|-----------------|------------------------------------|-----------|
| min-height      | `--space-9`                        | `36px`    |
| padding-x       | `--space-3`                        | `12px`    |
| padding-y       | `--space-1-5`                      | `6px`     |
| gap (icon + text) | `--space-3`                      | `12px`    |
| border-radius   | `--dimensions/radius/rounded-lg`   | `8px`     |
| text color      | *(see Notes)*                      | `#18181b` |
| font-size       | `--text-sm`                        | `14px`    |
| font-weight     | `--font-medium`                    | `500`     |
| line-height     | `--text-sm` leading                | `20px`    |
| font-family     | `--font-body`                      | `Noto Sans`|

## Interaction States — Trigger (open state)
Identical to closed variant states. See `closed/closed.md`.

## Interaction States — List Item
| State    | Background      | Text color | Cursor   | Other |
|----------|-----------------|------------|----------|-------|
| default  | transparent     | `#18181b`  | pointer  | —     |
| hover    | undefined       | undefined  | pointer  | —     |
| focused  | undefined       | undefined  | pointer  | —     |
| selected | undefined       | undefined  | default  | —     |
| disabled | undefined       | undefined  | not-allowed | —  |

## Notes
- `token-mismatch`: dropdown background `white` (`var(--overlay)`) — same mismatch as trigger. See `closed.md` Notes.
- `token-mismatch`: list item text color `#18181b` — same mismatch as label. See `closed.md` Notes.
- `token-mismatch`: `shadow-overlay` (dropdown) has no foundation token. Raw values: `0px 2px 8px rgba(0,0,0,0.06)`, `0px -6px 12px rgba(0,0,0,0.03)`, `0px 14px 28px rgba(0,0,0,0.08)`. Recommend adding `--shadow-overlay` to `effects.md` (same shadow used in AlertDialog).
- Hover, focused, selected, and disabled states for list items are **not defined in Figma** — define before building interactive behaviour.
- The Figma design shows two `ListBox` groups with no visual divider between them (gap = `--space-0-5: 2px`). No separator/section-header defined — verify with designer if grouping labels are needed.
- Dropdown appears below the trigger. Positioning (absolute/portal/fixed) and z-index are not defined in Figma — define at implementation level.
- The chevron icon in the suffix is rotated `180deg` when open (chevron-up). The rotation is CSS-only — no separate icon asset.
