---
component: pagination
variant: secondary
figma-node-id: "19109:13187"
figma-content-hash: "1910913187-v1"
foundation-ref: "../../../foundation/foundation-token"
---

# Pagination Secondary Spec

> Machine-readable token file. Values are resolved from Figma and cross-checked against `/foundation/foundation-token/`.

## Meta

```yaml
component: Pagination
figma_file: g9XgqUp3tqZLGR0unL1QUg
figma_nodes:
  - id: "19109:13187"
    name: "variant=secondary"
    size: "992x36"
variant_axes:
  - axis: variant
    values: [secondary]
props:
  - page-range-select
  - page-numbers
  - previous-disabled
  - next
```

## Structure

```text
Pagination
├── previous button
├── page-range select
├── result label
├── page buttons
├── ellipsis
└── next button
```

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| width | raw | 992px |
| height | raw | 36px |
| gap | `dimensions/spacing/3` | 12px |
| button size | raw | 32px |
| button radius | `dimensions/radius/rounded-lg` | 8px |
| select height | raw | 36px |
| select background | `field/background` | #ffffff |
| select text | `field/foreground` | #18181b |
| select border | `field/border` | #dedee000 |
| select shadow | `shadow-field` | field shadow + blur + inner highlight |
| text color | `foreground/muted` | #71717a |
| border color | `border` | #E2E8ED |
| disabled opacity | `disabled-opacity` | 50% |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| previous disabled | transparent | `default/default-foreground` | `border` | not-allowed | opacity 0.5 |
| page buttons | transparent / active `default/default` | `default/default-foreground` | `border` / active none | pointer | current page filled |
| ellipsis | transparent | `foreground/muted` | none | default | no button chrome |
| select | `field/background` | `field/foreground` | `field/border` | pointer | shadow-field |

## Token To Foundation Map

| Figma Token | Foundation Source | Figma Value | Foundation Value | Status |
|---|---|---:|---:|---|
| `foreground/muted` | color.md `--color-fg-muted` | #71717a | #64748B | mismatch |
| `default/default-foreground` | color.md `--color-fg` | #18181b | #0F172A | mismatch |
| `default/default` | color.md `--color-bg-subtle` | #f1f1f1 | #F1F5F7 | near miss |
| `field/background` | color.md `--color-surface` | #ffffff | #FFFFFF | mismatch |
| `field/foreground` | color.md `--color-fg` | #18181b | #0F172A | mismatch |
| `field/border` | no exact foundation token | #dedee000 | n/a | raw value |
| `border` | color.md `--color-border` | #E2E8ED | #E2E8ED | exact |
| `dimensions/spacing/0.5` | spacing.md `--space-0.5` | 2px | 2px | exact |
| `dimensions/spacing/1.5` | spacing.md `--space-1.5` | 6px | 6px | exact |
| `dimensions/spacing/3` | spacing.md `--space-3` | 12px | 12px | exact |
| `dimensions/radius/rounded-lg` | radius.md `--radius-lg` | 8px | 8px | exact |
| `shadow-field` | effects.md Field | composite shadow | composite shadow | exact |

## Notes

- token-near-miss: Figma `default/default` is `#f1f1f1`, which is close to `--color-bg-subtle` `#F1F5F7`, but not exact. The HTML keeps the Figma value for fidelity.
- token-mismatch: select border is transparent in Figma (`#dedee000`), so the HTML uses the raw border token value.
- The page-range select is modeled as a button-like control because the Figma node is a `TextField`/`InputGroup` composition, not a native `<select>`.

