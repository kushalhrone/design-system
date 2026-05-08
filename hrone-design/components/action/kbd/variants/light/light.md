---
component: kbd
variant: light
figma-node-id: 12108:25708
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: kbd
- variant: light
- status: ready

## Props
| Prop     | Type                                                        | Default   |
|----------|-------------------------------------------------------------|-----------|
| variant  | `default` \| `light`                                        | light     |
| shortcut | `command` \| `ctrl` \| `option` \| `shift` \| `windows` \| `key` | command |
| key      | string                                                      | "K"       |

## Anatomy
```
Kbd (light)
├── ModifierSegment   (optional — omitted when shortcut="key")
│   ├── SymbolChar    (Unicode glyph or text abbr)
│   └── Separator     " + " or "Win +"  (for windows shortcut)
└── KeyChar           (the key prop value, e.g. "K")
```

## Design Tokens — Container

| Property      | Token                              | Value       |
|---------------|------------------------------------|-------------|
| padding-x     | `--space-1.5`                      | 6px         |
| padding-y     | `--space-px`                       | 1px         |
| border-radius | `--dimensions/radius/rounded-lg`   | 8px         |
| gap           | `--space-0.5`                      | 2px         |
| background    | none (transparent)                 | —           |
| line-height   | leading-0 (outer), `dimensions/leading/text-sm` 20px (inner text) |

## Design Tokens — Text

| Property    | Token              | Value  |
|-------------|--------------------|--------|
| color       | `var(--foreground/muted, #71717a)` | see Notes |
| font-size   | `--text-sm`        | 14px   |
| font-weight | `--font-medium`    | 500    |
| line-height | `dimensions/leading/text-sm` | 20px |

## Design Tokens — Modifier Key Segment

| Property    | Token           | Value |
|-------------|-----------------|-------|
| padding-x   | `--space-px`    | 1px   |

## Shortcut Symbols

| shortcut | Display     | Font                        | Notes                         |
|----------|-------------|-----------------------------|-------------------------------|
| command  | `⌘ K`       | `Noto_Sans_Symbols:Medium`  | U+2318                        |
| ctrl     | `⌃ K`       | `Noto_Sans_Symbols:Medium`  | U+2303                        |
| option   | `⌥ K`       | `Noto_Sans_Symbols:Medium`  | U+2325                        |
| shift    | `⇧ K`       | `Noto_Sans_Symbols:Medium`  | U+21E7                        |
| windows  | `Win + K`   | `Noto_Sans:Medium`          | Plain text, no Unicode symbol |
| key      | `K`         | `Noto_Sans:Medium`          | No modifier segment           |

## Differences from Default

| Property   | Default                               | Light         |
|------------|---------------------------------------|---------------|
| background | `#f1f1f1` (`var(--default/default)`)  | none (transparent) |
| use case   | standalone kbd, contrasts on white bg | inline in text, coloured surfaces |

## Figma Node Map

| Node ID        | Description                       |
|----------------|-----------------------------------|
| `12108:25708`  | light + command (outer)           |
| `12108:25709`  | light + command (inner)           |
| `12108:25713`  | light + windows (outer)           |
| `12108:25714`  | light + windows (inner)           |
| `12108:25718`  | light + ctrl (outer)              |
| `12108:25719`  | light + ctrl (inner)              |
| `12108:25723`  | light + option (outer)            |
| `12108:25724`  | light + option (inner)            |
| `12108:25728`  | light + shift (outer)             |
| `12108:25729`  | light + shift (inner)             |
| `14768:19115`  | light + key (outer)               |
| `14768:19116`  | light + key (inner)               |

## Notes
- token-near-miss: `var(--foreground/muted, #71717a)` vs `--color-fg-muted` (#64748B). 6-point hex diff — do NOT auto-snap. Use raw `#71717a`.
- Light variant has no background — renders transparent. No token needed for bg.
- Symbol chars (⌘ ⌃ ⌥ ⇧) require `Noto_Sans_Symbols` font. Windows uses plain `Noto_Sans` with "Win +".
- `shortcut="key"` renders no modifier — KeyChar only.
- Disabled state not defined in Figma — do not implement without designer confirmation.
- All structural tokens (padding, radius, gap, typography) identical to default variant.
