---
component: time-field
variant: error
figma-node-id: "14551:13705"
figma-content-hash: "1455113705er"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: time-field
- variant: error
- status: ready
- state: validation failed, required field empty

## Diff from default

| Property | Default | Error |
|---|---|---|
| label color | `#18181b` | `#DC2626` (--color-error) |
| label required `*` | not shown | shown, red |
| border | transparent | `1px solid #DC2626` |
| shadow | shadow-field | shadow-field |
| bg-overlay | white | white |
| segment text | `#71717a` | `#71717a` |
| description text | `#71717a` body | `#DC2626` error message |
| description content | lorem ipsum | "This field is required" |

## Design Tokens

### Label (error state)

| Property | Token | Value |
|---|---|---|
| color | `--color-error` | `#DC2626` |
| required `*` | `--color-error` | `#DC2626` |
| font-size | `--text-sm` | `14px` |
| font-weight | `--font-medium` | `500` |

### Input Border

| Property | Token | Value |
|---|---|---|
| border-width | `var(--field/border-width, 1px)` | `1px` |
| border-color | `--color-error` | `#DC2626` |
| border-style | — | solid |

### Error Message

| Property | Token | Value |
|---|---|---|
| font-size | `--text-xs` | `12px` |
| font-weight | `--font-regular` | `400` |
| line-height | `--dimensions/leading/text-xs` | `16px` |
| color | `--color-error` | `#DC2626` |
| content | — | "This field is required" |

## Notes

- Error label is a different DOM structure from default label — uses `danger/danger` directly on wrapper, not Label sub-component with optional required prop.
- Required `*` is ALWAYS shown in error state (Figma hardcodes it).
- `--color-error` (#DC2626) = exact match to foundation `--error` token. No mismatch.
- Shadow-field still present in error state — border and shadow coexist.
- No focus ring in this state (error shown on unfocused field).
