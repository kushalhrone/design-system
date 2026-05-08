# Button — Primary Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: primary
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175"
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-primary-bg:          var(--color-brand-secondary, #ff674d);
--btn-primary-bg-hover:    var(--color-brand-secondary-dark, #e55c44);
--btn-primary-bg-focus:    var(--color-brand-secondary-dark, #e55c44);  /* same as hover */
--btn-primary-bg-disabled: var(--color-brand-secondary, #ff674d);       /* + opacity 0.5 */

/* Foreground — text + icons */
--btn-primary-fg:          #FFFFFF;
```

---

## Focus Ring

```css
box-shadow:
  0px 0px 0px 2px var(--color-bg, #F8FAFB),
  0px 0px 0px 4px var(--color-brand-secondary, #ff674d);
```

- Outer ring: `--color-brand-secondary` = `#ff674d` (light) / `#ffa090` (dark)
- Offset ring: `--color-bg` = `#F8FAFB` (light) / `#0F172A` (dark)

---

## State Matrix

| state | bg | fg | ring |
|---|---|---|---|
| default | `#ff674d` | `#FFFFFF` | — |
| hover | `#e55c44` | `#FFFFFF` | — |
| focus | `#e55c44` | `#FFFFFF` | tomato `#ff674d` |
| disabled | `#ff674d` + `opacity:0.5` | `#FFFFFF` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `5249:26676` | default | sm | false |
| `5249:26680` | default | sm | true |
| `2218:6174` | default | md | false |
| `2223:2122` | default | md | true |
| `5249:26872` | default | lg | false |
| `5249:26876` | default | lg | true |
| `5249:26682` | hover | sm | false |
| `5249:26686` | hover | sm | true |
| `2218:6187` | hover | md | false |
| `2223:2126` | hover | md | true |
| `5249:26878` | hover | lg | false |
| `5249:26882` | hover | lg | true |
| `5249:26694` | focus | sm | false |
| `5249:26702` | focus | sm | true |
| `2218:6197` | focus | md | false |
| `2223:2134` | focus | md | true |
| `5249:26890` | focus | lg | false |
| `5249:26898` | focus | lg | true |
| `5249:26698` | disabled | sm | false |
| `5249:26704` | disabled | sm | true |
| `2224:1294` | disabled | md | false |
| `2224:1298` | disabled | md | true |
| `5249:26894` | disabled | lg | false |
| `5249:26900` | disabled | lg | true |

---

## Rules

- Main CTA — one per view hierarchy maximum
- Never stack two primary buttons side-by-side
- Always has filled background — never transparent for primary
- `cursor: pointer` on hover/focus; `cursor: not-allowed` on disabled
