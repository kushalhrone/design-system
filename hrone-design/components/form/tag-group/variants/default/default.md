---
component: tag-group
variant: default
figma-node-id: 14288:4575
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: tag-group
- variant: default
- status: ready
- states: default | hover | focus | selected | disabled

## Anatomy
```
TagGroup
├── Label               (showLabel=true — shared Label sub-component)
├── TagList             (showLimit=false by default)
│   └── Tag[]           (variant=default, any size/state)
└── DescriptionWrapper
    ├── Description     (showDescription=true)
    └── ErrorMessage    (showError=true)
```

## Props — Tag
| Prop        | Type                                                              | Default  |
|-------------|-------------------------------------------------------------------|----------|
| variant     | `default` \| `surface`                                            | default  |
| state       | `default` \| `hover` \| `focus` \| `selected` \| `disabled`      | default  |
| size        | `sm` \| `md` \| `lg`                                              | sm       |
| label       | string                                                            | "Label"  |
| showPrefix  | boolean                                                           | true     |
| showSuffix  | boolean                                                           | true     |
| prefix      | ReactNode \| null                                                 | null (icon) |
| suffix      | ReactNode \| null                                                 | null (icon) |

## Props — TagList
| Prop       | Type            | Default |
|------------|-----------------|---------|
| showLimit  | boolean         | false   |
| limit      | string          | "+1"    |
| children   | ReactNode       | 3 Tags  |

## Props — TagGroup
| Prop            | Type    | Default |
|-----------------|---------|---------|
| showLabel       | boolean | true    |
| showDescription | boolean | true    |
| showError       | boolean | true    |

## Design Tokens — Tag Container

| Property      | Token                              | Value  |
|---------------|------------------------------------|--------|
| border-radius | `--dimensions/radius/rounded-sm`   | 4px    |
| gap           | `--space-1`                        | 4px    |
| backdrop-blur | `var(--blur, 0px)`                 | 0px    |

## Size Variants — Tag

| Size | Height      | px  | Padding-X     | px  | Padding-Y      | px  | Icon size | Font size  |
|------|-------------|-----|---------------|-----|----------------|-----|-----------|------------|
| sm   | `--space-5` | 20px | `--space-1`  | 4px | `--space-0.5`  | 2px | 12×12px   | `--text-xs` 12px |
| md   | `--space-6` | 24px | `--space-1.5`| 6px | `--space-1`    | 4px | 12×12px   | `--text-xs` 12px |
| lg   | `--space-8` | 32px | `--space-2.5`| 10px | `--space-1.5` | 6px | 14×14px   | `--text-sm` 14px |

## Design Tokens — Tag Text

| Property     | Token / Value                           | Resolved  |
|--------------|-----------------------------------------|-----------|
| font-weight  | `--font-medium`                         | 500       |
| line-height (sm/md) | `dimensions/leading/text-xs`   | 16px      |
| line-height (lg)    | `dimensions/leading/text-sm`   | 20px      |
| color (non-selected) | `var(--field/foreground, #18181b)` | see Notes |
| color (selected)     | `var(--accent/accent-soft-foreground, #02563d)` | `--color-secondary` / `--secondary-500` ✓ |

## Interaction States — Tag (default variant)

| State    | Background                                         | Focus Ring        | Opacity | Cursor      |
|----------|----------------------------------------------------|-------------------|---------|-------------|
| default  | `var(--default/default, #f1f1f1)`                  | none              | 1       | pointer     |
| hover    | `var(--default/default-hover, white)` = `#FFFFFF`  | none              | 1       | pointer     |
| focus    | `var(--default/default-hover, white)` = `#FFFFFF`  | yes (see below)   | 1       | pointer     |
| selected | `var(--accent/accent-soft, rgba(2,86,61,0.15))`    | none              | 1       | pointer     |
| disabled | `var(--default/default, #f1f1f1)`                  | none              | 0.5     | not-allowed |

### Focus Ring
```
box-shadow:
  0 0 0 var(--ring-offset-width, 2px) var(--background/background, #F8FAFB),
  0 0 0 var(--ring-focus-width, 4px)  var(--focus-ring, #02563d)
```
- Offset color: `var(--background/background, #F8FAFB)` = `--color-bg: #F8FAFB` ✓
- Ring color: `var(--focus-ring, #02563d)` — pre-established green (see Notes)
- overflow: clip on focus state

### Disabled
`opacity: var(--disabled-opacity, 0.5)` applied to Tag container.

## Design Tokens — TagList

| Property  | Token          | Value                  |
|-----------|----------------|------------------------|
| gap-x     | `--space-1.5`  | 6px                    |
| gap-y     | 6px (raw)      | no token — raw 6px     |
| width     | —              | 100% (240px canvas)    |
| layout    | flex-wrap      | —                      |

### Limit Text (showLimit=true)
| Property    | Token / Value                       |
|-------------|-------------------------------------|
| color       | `var(--field/placeholder, #71717a)` |
| font-size   | `--text-sm` 14px                    |
| font-weight | `--font-regular` 400                |

## Design Tokens — TagGroup

| Property  | Token         | Value               |
|-----------|---------------|---------------------|
| gap       | `--space-1`   | 4px                 |
| width     | —             | 100% (296px canvas) |
| layout    | flex-col      | —                   |

## Design Tokens — Label (sub-component)

| Property    | Token / Value                               |
|-------------|---------------------------------------------|
| font-size   | `--text-sm` 14px                            |
| font-weight | `--font-medium` 500                         |
| line-height | `dimensions/leading/text-sm` 20px           |
| color       | `var(--foreground/foreground, #18181b)`      |
| required `*`| `var(--danger/danger, #DC2626)` = `--color-error` ✓ |
| tooltip icon| circle-info, 12×12px (showTooltip=true)     |

## Design Tokens — Description / Error Message

| Property    | Token / Value                                | Resolved  |
|-------------|----------------------------------------------|-----------|
| font-size   | `--text-xs` 12px                             | —         |
| font-weight | `--font-regular` 400                         | —         |
| line-height | `dimensions/leading/text-xs` 16px            | —         |
| description | `var(--foreground/muted, #71717a)`           | see Notes |
| error       | `var(--danger/danger, #DC2626)`              | `--color-error` ✓ |

## Figma Node Map

| Node ID        | Description                               |
|----------------|-------------------------------------------|
| `14288:4575`   | Tag — root component set                  |
| `14288:4584`   | Tag default+default+sm                    |
| `14288:4576`   | Tag default+default+md                    |
| `14288:4580`   | Tag default+default+lg                    |
| `14298:6415`   | Tag default+hover+md                      |
| `14298:6425`   | Tag default+hover+sm                      |
| `14298:6420`   | Tag default+hover+lg                      |
| `14298:6595`   | Tag default+focus+md                      |
| `14298:6605`   | Tag default+focus+sm                      |
| `14298:6600`   | Tag default+focus+lg                      |
| `15416:7227`   | Tag default+selected+md                   |
| `15416:7251`   | Tag default+selected+sm                   |
| `15416:7239`   | Tag default+selected+lg                   |
| `14298:6865`   | Tag default+disabled+md                   |
| `14298:6875`   | Tag default+disabled+sm                   |
| `14298:6870`   | Tag default+disabled+lg                   |
| `14298:7071`   | TagList                                   |
| `14298:7429`   | TagGroup                                  |
| `21988:145605` | TagList canvas example                    |
| `21988:145606` | TagGroup canvas example                   |

## Notes
- token-mismatch: `var(--default/default, #f1f1f1)` — no foundation token. Recurring issue (colorfield, date-range-picker, kbd, searchfield). Designer must assign.
- token-mismatch: `var(--default/default-hover, white)` = `#FFFFFF` — no foundation token for `default/default-hover`. Use raw `#FFFFFF` until designer creates token.
- token-near-miss: `var(--field/foreground, #18181b)` vs `--color-fg` (#0F172A). Use raw `#18181b`.
- token-near-miss: `var(--field/placeholder, #71717a)` vs `--color-fg-muted` (#64748B). Use raw `#71717a`.
- token-near-miss: `var(--foreground/muted, #71717a)` — same as above. Use raw `#71717a`.
- token-mismatch (focus ring): `var(--focus-ring, #02563d)` = green. Pre-established convention from button/date-picker. Log, do not change.
- `var(--accent/accent-soft, rgba(2,86,61,0.15))` = `--color-secondary-soft` ✓ exact match for selected bg.
- `var(--accent/accent-soft-foreground, #02563d)` = `--secondary-500: #02563D` ✓ exact match for selected text.
- `var(--background/background, #F8FAFB)` = `--color-bg: #F8FAFB` ✓ exact match for focus ring offset.
- TagList gap-y = 6px (`--space-1.5`) in row wrapping — Figma uses `gap-y-[6px]` raw, not token. Treat as `--space-1.5` in implementation.
- TagGroup width 296px and TagList width 240px are canvas placeholders — use `width: 100%`.
- `--color-error: #DC2626` = exact match for `var(--danger/danger)` ✓.
