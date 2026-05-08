# Button — Danger Soft Variant

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/action/buttons/SKILL.md` for shared structure tokens.

---

## Meta

```yaml
variant: dangerSoft
figma_file: TUglSZMJBE460niebdLUmU
figma_node: "2218:6175" (component set)
states: [default, hover, focus, disabled]
sizes: [sm, md, lg]
```

---

## Color Tokens

```css
/* Fill */
--btn-danger-soft-bg:          var(--danger/danger-soft, rgba(217, 45, 32, 0.15));
--btn-danger-soft-bg-hover:    var(--danger/danger-soft-hover, rgba(180, 35, 24, 0.20));
--btn-danger-soft-bg-focus:    var(--danger/danger-soft-hover, rgba(180, 35, 24, 0.20));
--btn-danger-soft-bg-disabled: var(--danger/danger-soft, rgba(217, 45, 32, 0.15));  /* + opacity 0.5 */

/* Foreground — text + icons */
--btn-danger-soft-fg:          var(--danger/danger, #DC2626);
```

Note: foreground uses `--danger/danger` (the full red) — NOT the foreground token.

---

## Focus Ring

```css
/* Uses primary focus ring */
box-shadow:
  0px 0px 0px 2px var(--background/background, #F8FAFB),
  0px 0px 0px 4px var(--focus-ring, #02563D);
```

---

## State Matrix

| state | bg | fg | ring |
|---|---|---|---|
| default | `rgba(217,45,32,0.15)` | `#DC2626` | — |
| hover | `rgba(180,35,24,0.20)` | `#DC2626` | — |
| focus | `rgba(180,35,24,0.20)` | `#DC2626` | primary `#02563D` |
| disabled | `rgba(217,45,32,0.15)` + `opacity:0.5` | `#DC2626` | — |

---

## Figma Node Map

| Node ID | State | Size | Icon only |
|---|---|---|---|
| `6485:18797` | default | sm | false |
| `6485:18819` | default | sm | true |
| `6485:18793` | default | md | false |
| `6485:18817` | default | md | true |
| `6485:18813` | default | lg | false |
| `6485:18827` | default | lg | true |
| `6485:18833` | hover | sm | false |
| `6485:18855` | hover | sm | true |
| `6485:18829` | hover | md | false |
| `6485:18853` | hover | md | true |
| `6485:18849` | hover | lg | false |
| `6485:18863` | hover | lg | true |
| `6485:18905` | focus | sm | false |
| `6485:18951` | focus | sm | true |
| `6485:18901` | focus | md | false |
| `6485:18949` | focus | md | true |
| `6485:18933` | focus | lg | false |
| `6485:18965` | focus | lg | true |
| `6485:18917` | disabled | sm | false |
| `6485:18957` | disabled | sm | true |
| `6485:18913` | disabled | md | false |
| `6485:18955` | disabled | md | true |
| `6485:18945` | disabled | lg | false |
| `6485:18971` | disabled | lg | true |

---

## Rules

- Use when caution is required but urgency is lower than full Danger
- Fill is semi-transparent — backdrop-blur applied on container
- Foreground uses `--danger/danger` (full red), NOT `--danger/danger-foreground` (white)
- Focus ring is primary green (same as primary/tertiary/outline/ghost)
- Pair with Danger variant: DangerSoft = secondary action, Danger = primary action
