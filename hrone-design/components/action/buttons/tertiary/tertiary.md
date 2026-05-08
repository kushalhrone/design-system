# Button — Tertiary Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: tertiary
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175" (component set)
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-tertiary-bg:          var(--default/default, #EBEBEC);
--btn-tertiary-bg-hover:    var(--default/default-hover, #E1E1E2);
--btn-tertiary-bg-focus:    var(--default/default-hover, #E1E1E2);
--btn-tertiary-bg-disabled: var(--default/default, #EBEBEC);  /* + opacity 0.5 */

/* Foreground — text + icons */
--btn-tertiary-fg:          var(--default/default-foreground, #18181B);
```

---

## Focus Ring

```css
box-shadow:
  0px 0px 0px 2px var(--background/background, #F8FAFB),
  0px 0px 0px 4px var(--focus-ring, #02563D);
```

Uses primary focus ring (same as primary/outline/ghost).

---

## State Matrix

| state | bg | fg | ring |
|---|---|---|---|
| default | `#EBEBEC` | `#18181B` | — |
| hover | `#E1E1E2` | `#18181B` | — |
| focus | `#E1E1E2` | `#18181B` | primary `#02563D` |
| disabled | `#EBEBEC` + `opacity:0.5` | `#18181B` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `5249:27941` | default | sm | false |
| `5249:27945` | default | sm | true |
| `3335:15341` | default | md | false |
| `3335:15349` | default | md | true |
| `5249:28091` | default | lg | false |
| `5249:28095` | default | lg | true |
| `5249:27947` | hover | sm | false |
| `5249:27951` | hover | sm | true |
| `3335:15353` | hover | md | false |
| `3335:15361` | hover | md | true |
| `5249:28097` | hover | lg | false |
| `5249:28101` | hover | lg | true |
| `5249:27959` | focus | sm | false |
| `5249:27967` | focus | sm | true |
| `3335:15377` | focus | md | false |
| `3335:15393` | focus | md | true |
| `5249:28109` | focus | lg | false |
| `5249:28117` | focus | lg | true |
| `5249:27963` | disabled | sm | false |
| `5249:27969` | disabled | sm | true |
| `3335:15381` | disabled | md | false |
| `3335:15395` | disabled | md | true |
| `5249:28113` | disabled | lg | false |
| `5249:28119` | disabled | lg | true |

---

## Rules

- Low-emphasis — use alongside primary or secondary, never as sole action
- `blur` backdrop effect applied on container
- Fill uses `--default/default` token (neutral surface) — not transparent
