# Button — Secondary Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: secondary
figma_file: TUglSZMJBE460niebdLUmU / ykoHMdavBzSeeplUfco3HZ
figma_node: "2218:6175" (component set)
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-secondary-bg:          var(--secondary/secondary, #02563D);
--btn-secondary-bg-hover:    var(--secondary/secondary-hover, #013E2C);
--btn-secondary-bg-focus:    var(--secondary/secondary, #02563D);
--btn-secondary-bg-disabled: var(--secondary/secondary, #02563D);  /* + opacity 0.5 */

/* Foreground — text + icons */
--btn-secondary-fg:          var(--secondary/secondary-foreground, #FFFFFF);
```

---

## Focus Ring

```css
box-shadow:
  0px 0px 0px 2px #FFFFFF,    /* offset ring — white */
  0px 0px 0px 4px #02563D;    /* secondary ring */
```

Uses secondary brand color for ring — NOT the primary `--focus-ring` token.

---

## State Matrix

| state | bg | fg | ring |
|---|---|---|---|
| default | `#02563D` | `#FFFFFF` | — |
| hover | `#013E2C` | `#FFFFFF` | — |
| focus | `#02563D` | `#FFFFFF` | secondary `#02563D` |
| disabled | `#02563D` + `opacity:0.5` | `#FFFFFF` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `5249:27337` | default | sm | false |
| `5249:27341` | default | sm | true |
| `2219:6523` | default | md | false |
| `2223:2311` | default | md | true |
| `5249:27487` | default | lg | false |
| `5249:27491` | default | lg | true |
| `5249:27343` | hover | sm | false |
| `5249:27347` | hover | sm | true |
| `2219:6527` | hover | md | false |
| `2223:2315` | hover | md | true |
| `5249:27493` | hover | lg | false |
| `5249:27497` | hover | lg | true |
| `5249:27355` | focus | sm | false |
| `5249:27363` | focus | sm | true |
| `2219:6535` | focus | md | false |
| `2223:2319` | focus | md | true |
| `5249:27505` | focus | lg | false |
| `5249:27513` | focus | lg | true |
| `5249:27359` | disabled | sm | false |
| `5249:27365` | disabled | sm | true |
| `2224:1306` | disabled | md | false |
| `2224:1310` | disabled | md | true |
| `5249:27509` | disabled | lg | false |
| `5249:27515` | disabled | lg | true |

---

## Rules

- Use alongside primary as an alternative action — never as the sole CTA
- Focus ring is secondary orange, not primary green — see `effects.md` §Secondary Focus Ring
- Foreground is always white — never dark text on secondary fill
- `blur` effect applied on container (backdrop-blur)
