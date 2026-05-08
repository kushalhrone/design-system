---
component: accordion-option
variant: state-matrix
figma-node-id: "3061:21123"
figma-content-hash: "306121123-v1"
foundation-ref: "../../../foundation/foundation-token"
---

# Accordion Option Token Spec

> Machine-readable token file. Values are resolved from Figma and cross-checked against `/foundation/foundation-token/`.
> Rule priority: effects > radius > color > typography > spacing.

## Meta

```yaml
component: _AccordionOption
figma_file: g9XgqUp3tqZLGR0unL1QUg
figma_nodes:
  - id: "3061:21119"
    name: "state=default"
    size: "360x52"
  - id: "3061:21155"
    name: "state=hover"
    size: "360x52"
  - id: "3335:14818"
    name: "state=focus"
    size: "360x52"
  - id: "3335:14876"
    name: "state=disabled"
    size: "360x52"
  - id: "3061:21138"
    name: "state=expanded"
    size: "360x160"
variant_axes:
  - axis: state
    values: [default, hover, focus, disabled, expanded]
props:
  - title
  - description
  - show-prefix
  - show-separator
  - disabled
  - expanded
```

## Structure

```text
AccordionOption
├── header row
│   ├── prefix icon, optional, 16x16
│   ├── title
│   └── chevron-down, 16x16
├── body row, expanded only
│   ├── prefix spacer, optional, 16x16
│   └── description
└── separator, optional
```

## Design Tokens

| Property | Token Name | Value |
|---|---|---|
| width | raw | 360px |
| min collapsed height | raw | 52px |
| expanded height | raw | 160px |
| padding | `--space-4` | 16px |
| header gap | `--space-3` | 12px |
| header right padding | `--space-6` | 24px |
| body top padding | `--space-2` | 8px |
| icon size | raw | 16px |
| hover background | `default/default` | #f1f1f1 |
| title color | `foreground/foreground` | #18181b |
| description color | `foreground/muted` | #71717a |
| separator color | `border` | #E2E8ED |
| focus ring offset | `ring-offset-width` | 2px |
| focus ring width | `ring-focus-width` | 4px |
| focus ring color | `focus-ring` | #02563d |
| disabled opacity | `disabled-opacity` | 0.5 |

## Typography

| Element | Token Name | Value |
|---|---|---|
| title font | `Body sm medium` | Noto Sans Medium, 14px, 20px line-height |
| collapsed body font | `Body xs` | Noto Sans Regular, 12px, 16px line-height |
| expanded body font | `Body sm` | Noto Sans Regular, 14px, 20px line-height |
| letter spacing | `letter-spacing` | 0 |

## Interaction States

| State | Background | Text | Border | Cursor | Other |
|---|---|---|---|---|---|
| default | transparent | `foreground/foreground` | separator if enabled | default | body height is 0 |
| hover | `default/default` | `foreground/foreground` | separator if enabled | pointer | body height is 0 |
| focus | `default/default` | `foreground/foreground` | separator if enabled | pointer | double focus ring |
| disabled | transparent | `foreground/foreground` | separator if enabled | not-allowed | opacity 0.5 |
| expanded | transparent | title fg, body muted | separator if enabled | pointer | chevron rotated 180deg, body visible |

## Token To Foundation Map

| Figma Token | Foundation Source | Figma Value | Foundation Value | Status |
|---|---|---:|---:|---|
| `dimensions/spacing/4` | spacing.md `--space-4` | 16px | 16px | exact |
| `dimensions/spacing/8` | spacing.md `--space-8` | 32px | 32px | exact |
| `dimensions/radius/rounded-sm` | radius.md `--dimensions/radius/rounded-sm` | 4px | 4px | exact |
| `border` | color.md `--color-border` | #E2E8ED | #E2E8ED | exact |
| `background/background` | color.md `--color-bg` | #F8FAFB | #F8FAFB | exact |
| `foreground/foreground` | color.md `--color-fg` | #18181b | #0F172A | mismatch |
| `foreground/muted` | color.md `--color-fg-muted` | #71717a | #64748B | mismatch |
| `focus-ring` | effects.md Focus Ring | #02563d | rgba(2,86,61,0.22) in color.md, #02563d in effects.md sample | semantic mismatch |

## Notes

- token-mismatch: title color #18181b has no exact foundation match. HTML keeps the Figma value for visual fidelity and exposes `--accordion-title-color`.
- token-mismatch: muted text #71717a has no exact foundation match. HTML keeps the Figma value for visual fidelity and exposes `--accordion-muted-color`.
- token-mismatch: focus ring #02563d differs from `color.md` focus ring but matches the Figma node and `effects.md` focus ring example. HTML keeps #02563d.
- default, hover, focus, and disabled states intentionally keep description clipped at height 0.

