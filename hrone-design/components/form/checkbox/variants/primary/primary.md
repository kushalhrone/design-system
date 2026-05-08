---
component: checkbox
variant: primary
figma-node-id: 2487:7315
figma-content-hash: a6c77b5a6c6e
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: checkbox
- variant: primary
- status: ready

## Props

### CheckboxControl
| Prop      | Type                                   | Default      |
|-----------|----------------------------------------|--------------|
| variant   | primary \| secondary                   | primary      |
| value     | unselected \| selected \| indeterminate | unselected  |
| state     | default \| hover \| focus \| error \| disabled | default |
| iconSelect | ReactNode \| null                    | null         |
| iconMix   | ReactNode \| null                      | null         |

### Checkbox (composite — label wrapper)
| Prop            | Type                           | Default                   |
|-----------------|--------------------------------|---------------------------|
| state           | default \| invalid \| disabled | default                   |
| title           | string                         | "Title here"              |
| description     | string                         | "Description here"        |
| errorMessage    | string                         | "Error message goes here" |
| showTitle       | boolean                        | true                      |
| showDescription | boolean                        | true                      |
| showError       | boolean                        | true                      |

## Design Tokens — CheckboxControl

| Property              | Token Name                  | Value                        |
|-----------------------|-----------------------------|------------------------------|
| width × height        | `--space-4`                 | 16px × 16px                  |
| border-radius         | `--radius-md`               | 6px                          |
| bg (unselected default) | —                         | `#FFFFFF` (raw — see Notes)  |
| bg (unselected hover) | —                           | `rgba(249,249,249,0.92)` (raw — see Notes) |
| bg (selected/indeterminate default) | `--color-secondary` | `#02563D`               |
| bg (selected/indeterminate hover)   | `--color-secondary-hover` | `#024A34`           |
| bg (selected/indeterminate error)   | `--color-error`   | `#DC2626`                    |
| border (unselected default/hover/disabled) | `--color-border` | `rgba(222,222,224,0)` — transparent |
| border (unselected error) | `--color-error`        | `#DC2626` (1px solid)        |
| border-width          | 1px (var `--field/border-width`) | 1px                    |
| field shadow          | —                           | `0 2px 4px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.06)` (raw — see Notes) |
| focus ring offset     | `--color-bg`                | `#F8FAFB` — 2px             |
| focus ring            | —                           | `#02563D` 4px (raw — see Notes) |
| disabled opacity      | —                           | `0.5` (raw — see Notes)     |
| icon (checkmark) color | white (inset SVG)          | inherited from bg contrast   |

## Design Tokens — Composite Label

| Property         | Token Name              | Value                  |
|------------------|-------------------------|------------------------|
| gap (box → text) | `--space-3`             | 12px                   |
| font-family      | `--font-body`           | Noto Sans              |
| font-size        | `--text-sm`             | 14px (0.875rem)        |
| line-height      | `--leading-normal`      | 20px (1.25rem)         |
| label weight     | `--font-medium`         | 500                    |
| description weight | `--font-regular`      | 400                    |
| label color (default) | —                  | `#18181B` (raw — see Notes) |
| description color | `--color-fg-muted`     | `#64748B` (near-miss — see Notes) |
| label color (invalid) | `--color-error`    | `#DC2626`              |
| error msg color   | `--color-error`         | `#DC2626`              |
| label color (disabled) | —                 | `#18181B` at 50% opacity (raw) |
| pt (align to box) | 2px                    | raw — see Notes        |

## Interaction States — CheckboxControl (value=unselected)

| State    | Background                  | Border                      | Shadow        | Opacity | Cursor      |
|----------|-----------------------------|------------------------------|---------------|---------|-------------|
| default  | `#FFFFFF`                   | transparent (1px)            | field shadow  | 1       | default     |
| hover    | `rgba(249,249,249,0.92)`    | transparent (1px)            | field shadow  | 1       | pointer     |
| focus    | `rgba(249,249,249,0.92)`    | transparent (1px)            | focus ring    | 1       | default     |
| error    | transparent (backdrop-blur) | `--color-error` solid 1px   | field shadow  | 1       | default     |
| disabled | `#FFFFFF`                   | transparent (1px)            | field shadow  | 0.5     | not-allowed |

## Interaction States — CheckboxControl (value=selected)

| State    | Background               | Border | Shadow        | Opacity | Cursor      |
|----------|--------------------------|--------|---------------|---------|-------------|
| default  | `--color-secondary`      | none   | field shadow  | 1       | default     |
| hover    | `--color-secondary-hover`| none   | field shadow  | 1       | pointer     |
| focus    | `--color-secondary`      | none   | focus ring    | 1       | default     |
| error    | `--color-error`          | none   | field shadow  | 1       | default     |
| disabled | `--color-secondary`      | none   | field shadow  | 0.5     | not-allowed |

## Interaction States — CheckboxControl (value=indeterminate)

| State    | Background               | Border | Shadow        | Opacity | Cursor      |
|----------|--------------------------|--------|---------------|---------|-------------|
| default  | `--color-secondary`      | none   | field shadow  | 1       | default     |
| hover    | `--color-secondary-hover`| none   | field shadow  | 1       | pointer     |
| focus    | `--color-secondary`      | none   | focus ring    | 1       | default     |
| error    | `--color-error`          | none   | field shadow  | 1       | default     |
| disabled | `--color-secondary`      | none   | field shadow  | 0.5     | not-allowed |

## Composite States (Checkbox with label)

| state   | Control value | Label color    | Description color  | Error shown |
|---------|---------------|----------------|--------------------|-------------|
| default | unselected    | `#18181B`      | `#71717A`          | no          |
| invalid | unselected    | `--color-error`| `#71717A`          | yes         |
| disabled| unselected    | `#18181B` 50%  | `#71717A` 50%      | no          |

## Notes
- token-near-miss: `--field/background: #FFFFFF` vs `--color-surface: #FFFFFF` (2 hex points) — using raw `#FFFFFF`
- token-near-miss: `--field/background-hover: rgba(249,249,249,0.92)` — no foundation token for semi-transparent field bg — using raw value
- token-near-miss: `--foreground/foreground: #18181B` vs `--neutral-900: #0F172A` (different hue family, Figma uses Zinc not Gray) — using raw `#18181B`
- token-near-miss: `--foreground/muted: #71717A` vs `--neutral-500: #64748B` (different hue family) — using raw `#71717A`
- token-mismatch: focus-ring color in Figma = `#02563D` (secondary-500). Foundation `--color-focus-ring: rgba(2,86,61,0.22)` (primary-based). Checkbox uses secondary as focus ring — designer must confirm whether this is intentional or should use `--color-focus-ring`
- token-mismatch: field shadow (`rgba(0,0,0,0.04/0.06)`) has no named foundation token — using raw values
- token-mismatch: `--disabled-opacity: 0.5` has no foundation token — using raw value
- token-mismatch: `pt-[2px]` on label container-align has no foundation token — using raw 2px
- Unselected default bg renders as white with inset highlight (`rgba(255,255,255,0.1)`) and layered drop shadows to produce a "lifted" field look
- Checkmark icon and minus icon are SVG assets embedded as image nodes (Figma asset URLs expire in 7 days)
- `pointer-events-none` set on `base` div for selected/indeterminate — interaction handled at wrapper level
