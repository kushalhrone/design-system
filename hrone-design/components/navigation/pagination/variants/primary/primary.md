---
component: pagination
variant: primary
figma-node-id: "19109:13186"
figma-content-hash: "1910913186-v1"
foundation-ref: "../../../foundation/foundation-token"
---

# Pagination Primary Spec

> Machine-readable token file. Values are resolved from Figma and cross-checked against `/foundation/foundation-token/`.

## Meta

```yaml
component: Pagination
figma_file: g9XgqUp3tqZLGR0unL1QUg
figma_nodes:
  - id: "19109:13186"
    name: "variant=primary"
    size: "530x32"
variant_axes:
  - axis: variant
    values: [primary]
props:
  - range-label
  - prev-disabled
  - next-disabled
```

## Structure

```text
Pagination
├── range label
└── actions
    ├── previous button
    └── next button
```

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| width | raw | 530px |
| height | raw | 32px |
| gap | `dimensions/spacing/2` | 8px |
| item padding-x | `dimensions/spacing/3` | 12px |
| item padding-y | `dimensions/spacing/1.5` | 6px |
| button min-width | raw | 32px |
| button radius | `dimensions/radius/rounded-lg` | 8px |
| text color | `foreground/muted` | #71717a |
| button text color | `default/default-foreground` | #18181b |
| button border | `border` | #E2E8ED |
| disabled opacity | `disabled-opacity` | 50% |
| typography | `Body sm` / `Button sm` | Noto Sans 14px / 20px |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| range label | transparent | `foreground/muted` | none | default | nowrap |
| prev disabled | transparent | `default/default-foreground` | `border` | not-allowed | opacity 0.5 |
| next enabled | transparent | `default/default-foreground` | `border` | pointer | arrow icon on right |

## Token To Foundation Map

| Figma Token | Foundation Source | Figma Value | Foundation Value | Status |
|---|---|---:|---:|---|
| `foreground/muted` | color.md `--color-fg-muted` | #71717a | #64748B | mismatch |
| `default/default-foreground` | color.md `--color-fg` | #18181b | #0F172A | mismatch |
| `border` | color.md `--color-border` | #E2E8ED | #E2E8ED | exact |
| `dimensions/spacing/1.5` | spacing.md `--space-1.5` | 6px | 6px | exact |
| `dimensions/spacing/3` | spacing.md `--space-3` | 12px | 12px | exact |
| `dimensions/radius/rounded-lg` | radius.md `--radius-lg` | 8px | 8px | exact |
| `disabled-opacity` | no direct foundation token | 50% | 0.5 | exact as value, raw token |

## Notes

- token-mismatch: text uses Figma zinc values. HTML keeps the Figma values for fidelity while documenting the closest foundation tokens.
- The primary variant renders range text on the left and previous/next actions aligned right.
- The previous button is visually disabled in Figma, so the HTML keeps it disabled in the preview.

