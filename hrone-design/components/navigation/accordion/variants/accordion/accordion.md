---
component: accordion
variant: default-secondary
figma-node-id: "3073:31272"
figma-content-hash: "307331272-v1"
foundation-ref: "../../../foundation/foundation-token"
---

# Accordion Token Spec

> Machine-readable token file. Values are resolved from Figma and cross-checked against `/foundation/foundation-token/`.
> Rule priority: effects > radius > color > typography > spacing.

## Meta

```yaml
component: Accordion
figma_file: g9XgqUp3tqZLGR0unL1QUg
figma_nodes:
  - id: "3061:21258"
    name: "type=default"
    size: "360x312"
  - id: "3073:31273"
    name: "type=secondary"
    size: "360x312"
variant_axes:
  - axis: type
    values: [default, secondary]
slots:
  - accordion-option[]
```

## Structure

```text
Accordion
└── slot
    ├── AccordionOption
    ├── AccordionOption
    ├── AccordionOption
    ├── AccordionOption
    ├── AccordionOption
    └── AccordionOption
```

## Container Tokens

| Property | Default | Secondary |
|---|---|---|
| width | 360px | 360px |
| background | transparent | `surface/surface` #ffffff |
| opacity | 1 | 0.6 |
| radius | none | `rounded-sm` 4px |
| overflow | visible | hidden |
| backdrop blur | none | `blur` 0px |
| shadow | none | `shadow-surface` |

## Option Tokens

Accordion uses `_AccordionOption` instances. Read `../accordion-option/accordion-option.md` for item-level state, typography, icon, separator, and focus behavior.

## Interaction States

| State | Behavior |
|---|---|
| collapsed | option body is clipped to height 0 |
| expanded | option body becomes visible, chevron rotates upward |
| keyboard focus | active option uses double focus ring |
| disabled | item opacity is 0.5 and cannot be toggled |

## Token To Foundation Map

| Figma Token | Foundation Source | Figma Value | Foundation Value | Status |
|---|---|---:|---:|---|
| `surface/surface` | color.md `--color-surface` | #ffffff | #FFFFFF | mismatch |
| `border` | color.md `--color-border` | #E2E8ED | #E2E8ED | exact |
| `dimensions/radius/rounded-sm` | radius.md `--dimensions/radius/rounded-sm` | 4px | 4px | exact |
| `shadow-surface` | effects.md Surface | same outer shadow layers | same outer shadow layers | exact |
| `blur` | effects.md Blur | 0px | 6px documented default | mismatch |

## Notes

- token-mismatch: secondary surface uses #ffffff in Figma while foundation `--color-surface` resolves to #FFFFFF. HTML keeps #ffffff under `--accordion-surface` to match the Figma output.
- token-mismatch: Figma secondary blur is 0px, while effects.md documents 6px as the standard blur. HTML keeps 0px because the node explicitly resolves `blur` to 0.
- The secondary variant applies opacity 0.6 to the whole container, matching the Figma node.

