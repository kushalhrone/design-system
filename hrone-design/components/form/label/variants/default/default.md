---
component: label
variant: default
figma-node-id: 13605:42525
figma-content-hash: 13605425230
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: label
- variant: default
- status: ready

## Props
| Prop         | Type    | Default      |
|--------------|---------|--------------|
| value        | string  | "Your name"  |
| showRequired | boolean | false        |
| showTooltip  | boolean | false        |

## Design Tokens

| Property       | Token Name        | Value                       |
|----------------|-------------------|-----------------------------|
| font-family    | `--font-body`     | Noto Sans                   |
| font-size      | `--text-sm`       | 14px (0.875rem)             |
| line-height    | `--leading-normal`| 20px (1.25rem)              |
| font-weight    | `--font-medium`   | 500                         |
| text color     | —                 | `#18181B` (raw — see Notes) |
| letter-spacing | `--tracking-normal` | 0                         |
| layout         | flex wrap         | items-center, content-center|
| gap            | `--space-1`       | 4px                         |
| padding-right  | `--space-2`       | 8px                         |
| width          | —                 | 148px (raw — context-dependent) |
| white-space    | nowrap            | —                           |

## Interaction States
| State   | Text color  |
|---------|-------------|
| default | `#18181B`   |

## Notes
- token-near-miss: `--foreground/foreground: #18181B` vs `--neutral-900: #0F172A` — use raw `#18181B`
- `Body sm medium` type style = `--text-sm` (14px) + `--font-medium` (500) + `--leading-normal` (20px)
- Width 148px is Figma frame default — in practice `width: auto` or `flex: 1` in form layout context
- Ref: https://v3.heroui.com/docs/react/components/label
