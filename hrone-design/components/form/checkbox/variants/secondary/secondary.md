---
component: checkbox
variant: secondary
figma-node-id: 2487:7315
figma-content-hash: a6885ae600a2
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: checkbox
- variant: secondary
- status: ready

## Props

| Prop      | Type                                    | Default      |
|-----------|-----------------------------------------|--------------|
| variant   | primary \| secondary                    | secondary    |
| value     | unselected \| selected \| indeterminate  | unselected   |
| state     | default \| hover \| focus \| error \| disabled | default |
| iconSelect | ReactNode \| null                     | null         |
| iconMix   | ReactNode \| null                       | null         |

## Design Tokens — CheckboxControl (secondary)

| Property                    | Token Name                  | Value                        |
|-----------------------------|-----------------------------|------------------------------|
| width × height              | `--space-4`                 | 16px × 16px                  |
| border-radius               | `--radius-md`               | 6px                          |
| bg (unselected default)     | —                           | `#F1F1F1` (raw — see Notes)  |
| bg (unselected hover/focus) | —                           | `#FFFFFF` (raw — see Notes)  |
| bg (selected/indeterminate default) | `--color-secondary` | `#02563D`               |
| bg (selected/indeterminate hover)   | `--color-secondary-hover` | `#024A34`           |
| bg (selected/indeterminate error)   | `--color-error`   | `#DC2626`                    |
| border (unselected default) | `--color-border`            | `rgba(222,222,224,0)` — transparent |
| border (unselected hover)   | —                           | `rgba(193,193,193,0)` — transparent (raw — see Notes) |
| border (unselected error)   | `--color-error`             | `#DC2626` (1px solid)        |
| border (unselected focus)   | `--color-border`            | transparent (1px)            |
| focus ring offset           | `--color-bg`                | `#F8FAFB` — 2px             |
| focus ring                  | —                           | `#02563D` 4px (raw — see Notes) |
| disabled opacity            | —                           | `0.5` (raw)                 |

## Key Difference vs Primary

| Attribute              | primary                        | secondary                     |
|------------------------|--------------------------------|-------------------------------|
| unselected default bg  | `#FFFFFF` + field shadow       | `#F1F1F1` — no shadow         |
| unselected hover bg    | `rgba(249,249,249,0.92)`       | `#FFFFFF`                     |
| unselected focus bg    | `rgba(249,249,249,0.92)`       | `#FFFFFF`                     |
| field shadow present   | yes (default/hover/disabled)   | no (unselected states)        |

## Interaction States — CheckboxControl (value=unselected)

| State    | Background  | Border                      | Shadow       | Opacity | Cursor      |
|----------|-------------|------------------------------|--------------|---------|-------------|
| default  | `#F1F1F1`   | transparent (1px)            | none         | 1       | default     |
| hover    | `#FFFFFF`   | `rgba(193,193,193,0)` (1px)  | none         | 1       | pointer     |
| focus    | `#FFFFFF`   | transparent (1px)            | focus ring   | 1       | default     |
| error    | transparent | `--color-error` solid 1px    | none         | 1       | default     |
| disabled | `#F1F1F1`   | transparent (1px)            | none         | 0.5     | not-allowed |

## Interaction States — CheckboxControl (value=selected)

| State    | Background               | Border | Shadow       | Opacity | Cursor      |
|----------|--------------------------|--------|--------------|---------|-------------|
| default  | `--color-secondary`      | none   | field shadow | 1       | default     |
| hover    | `--color-secondary-hover`| none   | field shadow | 1       | pointer     |
| focus    | `--color-secondary`      | none   | focus ring   | 1       | default     |
| error    | `--color-error`          | none   | field shadow | 1       | default     |
| disabled | `--color-secondary`      | none   | field shadow | 0.5     | not-allowed |

## Interaction States — CheckboxControl (value=indeterminate)

| State    | Background               | Border | Shadow       | Opacity | Cursor      |
|----------|--------------------------|--------|--------------|---------|-------------|
| default  | `--color-secondary`      | none   | field shadow | 1       | default     |
| hover    | `--color-secondary-hover`| none   | field shadow | 1       | pointer     |
| focus    | `--color-secondary`      | none   | focus ring   | 1       | default     |
| error    | `--color-error`          | none   | field shadow | 1       | default     |
| disabled | `--color-secondary`      | none   | field shadow | 0.5     | not-allowed |

## Notes
- token-mismatch: `--default/default: #F1F1F1` — no foundation token. Closest: `--neutral-100: #F1F5F7` (near-miss, different value) — using raw `#F1F1F1`. Designer must decide if this should map to a neutral token.
- token-near-miss: `--default/default-hover: white (#FFFFFF)` vs `--color-surface: #FFFFFF` — using raw `#FFFFFF`
- token-mismatch: `--field/border-hover: rgba(193,193,193,0)` — transparent border on hover has no foundation token — using raw value
- token-mismatch: focus-ring color = `#02563D` (secondary-500). Foundation `--color-focus-ring: rgba(2,86,61,0.22)` (primary-based) — designer must confirm
- token-mismatch: field shadow values have no named foundation token (same as primary variant)
- Secondary unselected default has NO field shadow (unlike primary which has the lifted shadow effect)
- Secondary unselected disabled also has opacity 0.5 and no shadow
- Selected/indeterminate states are visually identical to primary variant
