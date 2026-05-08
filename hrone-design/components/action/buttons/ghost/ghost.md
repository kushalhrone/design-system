# Button — Ghost Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: ghost
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175" (component set)
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-ghost-bg:          transparent;
--btn-ghost-bg-hover:    var(--default/default-hover, #E1E1E2);
--btn-ghost-bg-focus:    var(--default/default-hover, #E1E1E2);
--btn-ghost-bg-disabled: transparent;  /* + opacity 0.5 */

/* Foreground — text + icons */
--btn-ghost-fg:          var(--default/default-foreground, #18181B);
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

| state | bg | fg | ring |
|---|---|---|---|
| default | transparent | `#18181B` | — |
| hover | `#E1E1E2` | `#18181B` | — |
| focus | `#E1E1E2` | `#18181B` | primary `#02563D` |
| disabled | transparent + `opacity:0.5` | `#18181B` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `5249:28699` | default | sm | false |
| `5249:28703` | default | sm | true |
| `2219:6603` | default | md | false |
| `2223:2391` | default | md | true |
| `5249:28849` | default | lg | false |
| `5249:28853` | default | lg | true |
| `5249:28705` | hover | sm | false |
| `5249:28709` | hover | sm | true |
| `2219:6607` | hover | md | false |
| `2223:2395` | hover | md | true |
| `5249:28855` | hover | lg | false |
| `5249:28859` | hover | lg | true |
| `5249:28717` | focus | sm | false |
| `5249:28725` | focus | sm | true |
| `2219:6615` | focus | md | false |
| `2223:2403` | focus | md | true |
| `5249:28867` | focus | lg | false |
| `5249:28875` | focus | lg | true |
| `5249:28721` | disabled | sm | false |
| `5249:28727` | disabled | sm | true |
| `2224:1312` | disabled | md | false |
| `2224:1316` | disabled | md | true |
| `5249:28871` | disabled | lg | false |
| `5249:28877` | disabled | lg | true |

---

## Rules

- No border, no background on default — invisible until interaction
- Never use for critical or destructive actions
- No blur effect on ghost variant
- Ideal for icon-only supplementary actions in toolbars
