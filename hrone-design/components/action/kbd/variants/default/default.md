---
component: kbd
variant: default
figma-node-id: 2396:4484
figma-content-hash: not-computed
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: kbd
- variant: default
- status: ready

## Props
| Prop     | Type                                                        | Default   |
|----------|-------------------------------------------------------------|-----------|
| variant  | `default` \| `light`                                        | default   |
| shortcut | `command` \| `ctrl` \| `option` \| `shift` \| `windows` \| `key` | command |
| key      | string                                                      | "K"       |

## Anatomy
```
Kbd (default)
├── ModifierSegment   (optional — omitted when shortcut="key")
│   ├── SymbolChar    (Unicode glyph or text abbr)
│   └── Separator     " + " or "Win +"  (for windows shortcut)
└── KeyChar           (the key prop value, e.g. "K")
```

## Design Tokens — Container

| Property      | Token                              | Value  |
|---------------|------------------------------------|--------|
| padding-x     | `--space-1.5`                      | 6px    |
| padding-y     | `--space-px`                       | 1px    |
| border-radius | `--dimensions/radius/rounded-lg`   | 8px    |
| gap           | `--space-0.5`                      | 2px    |
| background    | `var(--default/default, #f1f1f1)`  | see Notes |
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

## Figma Node Map

| Node ID       | Description                          |
|---------------|--------------------------------------|
| `2396:4484`   | Kbd — default variant root           |
| `2396:4485`   | default + command (outer)            |
| `2396:4486`   | default + command (inner)            |
| `2396:4663`   | default + windows (outer)            |
| `2396:4664`   | default + windows (inner)            |
| `2396:4495`   | default + ctrl (outer)               |
| `2396:4496`   | default + ctrl (inner)               |
| `2396:4500`   | default + option (outer)             |
| `2396:4501`   | default + option (inner)             |
| `2396:4490`   | default + shift (outer)              |
| `2396:4491`   | default + shift (inner)              |
| `14768:9838`  | default + key (outer)                |
| `14768:9839`  | default + key (inner)                |

## Notes
- token-mismatch: `var(--default/default, #f1f1f1)` — no foundation token. Closest: `--neutral-100` (#F1F5F7) — too far to auto-snap. Consistent unresolved issue across colorfield and date-range-picker components. Designer must assign token.
- token-near-miss: `var(--foreground/muted, #71717a)` vs `--color-fg-muted` (#64748B). 6-point hex diff — do NOT auto-snap. Use raw `#71717a`.
- Symbol chars (⌘ ⌃ ⌥ ⇧) require `Noto_Sans_Symbols` font — falls back to system glyph if unavailable. Windows shortcut uses plain `Noto_Sans` with text "Win +".
- `shortcut="key"` renders no modifier — KeyChar only.
- Disabled state not defined in Figma — do not implement without designer confirmation.
- `--space-px` = 1px — single-pixel padding on modifier segment horizontal edges.
