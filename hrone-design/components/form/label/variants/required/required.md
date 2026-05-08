---
component: label
variant: required
figma-node-id: 13605:42525
figma-content-hash: 13605425231
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: label
- variant: required
- status: ready

## Props
| Prop         | Type    | Default     |
|--------------|---------|-------------|
| value        | string  | "Your name" |
| showRequired | boolean | true        |
| showTooltip  | boolean | false       |

## Design Tokens — Label Text (same as default)

| Property       | Token Name        | Value       |
|----------------|-------------------|-------------|
| font-family    | `--font-body`     | Noto Sans   |
| font-size      | `--text-sm`       | 14px        |
| line-height    | `--leading-normal`| 20px        |
| font-weight    | `--font-medium`   | 500         |
| text color     | —                 | `#18181B` (raw) |

## Design Tokens — Required Asterisk

| Property       | Token Name       | Value       |
|----------------|------------------|-------------|
| content        | `*`              | literal     |
| font-family    | `--font-body`    | Noto Sans   |
| font-size      | `--text-sm`      | 14px        |
| line-height    | `--leading-normal`| 20px       |
| font-weight    | `--font-medium`  | 500         |
| text color     | `--color-error`  | `#DC2626`   |
| white-space    | nowrap           | —           |

## Layout
```
Label (flex wrap, gap: 4px, items-center)
├── <p> label text (#18181B, medium)
└── <p> * (--color-error, medium) ← showRequired=true
```

## Notes
- `--danger/danger: #DC2626` → `--color-error: #DC2626` ✓ exact match for asterisk
- Asterisk shares same font style as label text (medium weight, sm size) — not superscript
- gap between label and asterisk: `--space-1` = 4px
