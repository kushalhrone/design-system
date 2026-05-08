---
component: slider
variant: disabled
figma-node-id: "5375:69699"
figma-content-hash: "2306-2324-disabled"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: slider
- variant: disabled
- status: ready
- thumbs: range | state: disabled

## Anatomy

Visually identical to range variant. Differences:
- Wrapper: `opacity: 0.5`
- Cursor: `not-allowed` / `default`
- Pointer events: none — not interactive
- No tooltip

## Props

| Prop | Type | Default |
|---|---|---|
| `state` | `"disabled"` | — |
| `thumbs` | `"range"` | `"range"` |
| `showHeader` | `boolean` | `true` |
| `showMarks` | `boolean` | false in Figma |
| `disabled` | `boolean` | `true` |

## Design Tokens

All tokens same as range variant. Wrapper override only:

| Property | Token Name | Value |
|---|---|---|
| wrapper opacity | `--disabled-opacity` | `0.5` |
| pointer-events | — | `none` |
| cursor | — | `not-allowed` |

## Interaction States

No interaction — all events suppressed.

| State | Visual |
|---|---|
| disabled | Opacity 50%, static, no hover/focus/drag |

## Notes

- Figma shows range thumbs in disabled state (not single thumb).
- No marks visible in Figma disabled spec — `showMarks` defaults to false.
- Use `aria-disabled="true"` on the slider root.
- Do not use `disabled` attribute alone — CSS `pointer-events: none` still needed for full suppression.
- `--disabled-opacity` `0.5` — standard DS value, no mismatch.
