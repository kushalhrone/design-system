# Button — Danger Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: danger
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175" (component set)
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-danger-bg:          var(--danger/danger, #DC2626);
--btn-danger-bg-hover:    var(--danger/danger-hover, #B42318);
--btn-danger-bg-focus:    var(--danger/danger-hover, #B42318);  /* same as hover */
--btn-danger-bg-disabled: var(--danger/danger, #DC2626);        /* + opacity 0.5 */

/* Foreground — text + icons */
--btn-danger-fg:          var(--danger/danger-foreground, #FFFFFF);
```

---

## Focus Ring

```css
/* Danger uses its own ring — NOT primary focus ring */
box-shadow:
  0px 0px 0px 2px #F8FAFB,   /* offset ring (hardcoded bg) */
  0px 0px 0px 4px #B42318;   /* danger ring = --color-error */
```

Named effect: `danger-focus-ring` in Figma effects panel.

---

## State Matrix

| state | bg | fg | ring |
|---|---|---|---|
| default | `#DC2626` | `#FFFFFF` | — |
| hover | `#B42318` | `#FFFFFF` | — |
| focus | `#B42318` | `#FFFFFF` | danger `#B42318` |
| disabled | `#DC2626` + `opacity:0.5` | `#FFFFFF` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `6485:17882` | default | sm | false |
| `6485:17902` | default | sm | true |
| `6485:17874` | default | md | false |
| `6485:17898` | default | md | true |
| `6485:17878` | default | lg | false |
| `6485:17900` | default | lg | true |
| `6485:17918` | hover | sm | false |
| `6485:17938` | hover | sm | true |
| `6485:17910` | hover | md | false |
| `6485:17934` | hover | md | true |
| `6485:17914` | hover | lg | false |
| `6485:17936` | hover | lg | true |
| `6485:17990` | focus | sm | false |
| `6485:18034` | focus | sm | true |
| `6485:17982` | focus | md | false |
| `6485:18030` | focus | md | true |
| `6485:17986` | focus | lg | false |
| `6485:18032` | focus | lg | true |
| `6485:18006` | disabled | sm | false |
| `6485:18042` | disabled | sm | true |
| `6485:17998` | disabled | md | false |
| `6485:18038` | disabled | md | true |
| `6485:18002` | disabled | lg | false |
| `6485:18040` | disabled | lg | true |

---

## Rules

- Only for destructive or irreversible actions (delete, remove, terminate)
- Focus ring uses `--color-error` (`#B42318`) — NOT primary `--focus-ring`
- Never use for warnings or non-destructive actions — use danger-soft instead
- No blur effect on danger variant
