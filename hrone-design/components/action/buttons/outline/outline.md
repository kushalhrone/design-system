# Button — Outline Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: outline
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175" (component set)
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-outline-bg:          transparent;
--btn-outline-bg-hover:    var(--default/default-hover, #E1E1E2);
--btn-outline-bg-focus:    var(--default/default-hover, #E1E1E2);
--btn-outline-bg-disabled: transparent;  /* + opacity 0.5 */

/* Border */
--btn-outline-border:        var(--border, #E2E8ED);   /* --color-border */
--btn-outline-border-width:  var(--border-width, 1px);

/* Foreground — text + icons */
--btn-outline-fg:            var(--default/default-foreground, #18181B);
```

---

## Focus Ring

```css
box-shadow:
  0px 0px 0px 2px var(--background/background, #F8FAFB),
  0px 0px 0px 4px var(--focus-ring, #02563D);
```

---

## State Matrix

| state | bg | border | fg | ring |
|---|---|---|---|---|
| default | transparent | `#E2E8ED` | `#18181B` | — |
| hover | `#E1E1E2` | `#E2E8ED` | `#18181B` | — |
| focus | `#E1E1E2` | `#E2E8ED` | `#18181B` | primary `#02563D` |
| disabled | transparent + `opacity:0.5` | `#E2E8ED` | `#18181B` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `17112:28323` | default | sm | false |
| `17112:28333` | default | sm | true |
| `17112:28319` | default | md | false |
| `17112:28331` | default | md | true |
| `17112:28327` | default | lg | false |
| `17112:28335` | default | lg | true |
| `17112:28341` | hover | sm | false |
| `17112:28351` | hover | sm | true |
| `17112:28337` | hover | md | false |
| `17112:28349` | hover | md | true |
| `17112:28345` | hover | lg | false |
| `17112:28353` | hover | lg | true |
| `17112:28377` | focus | sm | false |
| `17112:28399` | focus | sm | true |
| `17112:28373` | focus | md | false |
| `17112:28397` | focus | md | true |
| `17112:28389` | focus | lg | false |
| `17112:28405` | focus | lg | true |
| `17112:28385` | disabled | sm | false |
| `17112:28403` | disabled | sm | true |
| `17112:28381` | disabled | md | false |
| `17112:28401` | disabled | md | true |
| `17112:28393` | disabled | lg | false |
| `17112:28407` | disabled | lg | true |

---

## Rules

- No background fill on default — border only
- Border always `--color-border` — never fg color
- No blur effect on outline variant
