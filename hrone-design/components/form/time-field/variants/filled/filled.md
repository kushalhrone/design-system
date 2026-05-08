---
component: time-field
variant: filled
figma-node-id: "14551:13710"
figma-content-hash: "1455113710fi"
foundation-ref: "../../../../foundation/foundation-token"
---

## Meta

- component: time-field
- variant: filled
- status: ready
- state: user has entered a valid time value

## Diff from default

| Property | Default | Filled |
|---|---|---|
| segment text color | `#71717a` (muted/placeholder) | `#18181b` (foreground) |
| segment content | `—` dashes | actual values (`12`, `32`, `53`) |
| AM/PM | `AM` | `AM` |
| TZ | `EST` | `EST` |
| border | transparent | transparent |
| shadow | shadow-field | shadow-field |

## Design Tokens

All tokens same as default except:

| Property | Token | Value |
|---|---|---|
| segment text (filled) | raw (near-miss `--color-fg`) | `#18181b` |

## Segment Content (Filled Example)

| Segment | Value |
|---|---|
| HH | `12` |
| MM | `32` |
| SS | `53` |
| AM/PM | `AM` |
| TZ | `EST` |

## Notes

- Only color difference from default: segment text shifts from muted `#71717a` → foreground `#18181b`.
- AM/PM and TZ always show as text in all states — they never show dashes.
- token-near-miss: filled text color Figma `#18181b` vs `--color-fg` `#0F172A`. Confirm.
