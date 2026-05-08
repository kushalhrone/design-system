# DateField Component

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/form/SKILL.md` for shared form tokens.

---

## Meta

```yaml
component: DateField
figma_file: ykoHMdavBzSeeplUfco3HZ
figma_node: "17293:41856"
variants: [primary, secondary]
states: [default, hover, focus, filled, error, disabled]
```

---

## Anatomy

- **Label** — field label with optional required (`*`) indicator
- **_DateFieldInput** — the interactive date input row
  - Date segments: `mm`, `dd`, `yyyy` (and time segments if enabled)
  - Suffix icon: calendar icon (right side)
- **Description / Error Message** — helper or validation text

---

## Structure Tokens

```css
--datefield-height:       36px;
--datefield-radius:       var(--field/radius, 12px);         /* xl — confirmed Figma DS */
--datefield-padding-x:    var(--dimensions/spacing/3, 12px);
--datefield-border-width: var(--field/border-width, 1px);
--datefield-gap-label:    var(--dimensions/spacing/1, 4px);  /* label → input */
--datefield-gap-suffix:   var(--dimensions/spacing/1\.5, 6px);
--datefield-segment-px:   var(--dimensions/spacing/0\.5, 2px);  /* segment padding-x */
```

> **Note on radius**: Figma DS uses `--field/radius: 12px` (xl). Foundation `radius.md` lists Input/Field as `md (6px)`. Figma value applied here — consistent with how DatePicker, DateRangePicker, and all date components render in the DS.

---

## Color Tokens — Primary Variant

```css
/* Default */
--datefield-bg:             var(--field/background, #FFFFFF);
--datefield-border:         var(--field/border, rgba(222,222,224,0));
--datefield-shadow:         shadow-field (effects.md §Field);
--datefield-text:           var(--foreground/muted, #64748B);  /* placeholder segments */

/* Hover — same structure, pointer cursor */
--datefield-bg-hover:       var(--field/background-hover, rgba(249,249,249,0.92));

/* Focus — active segment highlighted */
--datefield-segment-focus-bg:   var(--accent/accent-soft, rgba(2,86,61,0.15));  /* --color-secondary-soft */
--datefield-segment-focus-text: var(--accent/accent-soft-foreground, #02563D);  /* --color-secondary */
--datefield-focus-ring:     0px 0px 0px 2px var(--focus-ring, #02563D);  /* shield ring */

/* Filled */
--datefield-text-filled:    var(--foreground/foreground, #0F172A);  /* --color-fg */

/* Error */
--datefield-border-error:   var(--danger/danger, #DC2626);

/* Disabled */
--datefield-disabled-opacity: var(--disabled-opacity, 0.5);
```

---

## Color Tokens — Secondary Variant

Secondary sits on elevated surfaces (cards, modals, drawers). Slightly darker background.

```css
--datefield-secondary-bg:       var(--field/background, #FFFFFF);  /* lighter on elevated surface */
--datefield-secondary-border:   var(--field/border, rgba(222,222,224,0));
/* Other states same as primary */
```

---

## State Matrix

| State | BG | Border | Ring | Text |
|---|---|---|---|---|
| default | `#FFFFFF` | transparent | — | `#64748B` (muted) |
| hover | `rgba(249,249,249,0.92)` | transparent | — | `#64748B` (muted) |
| focus | `#FFFFFF` | transparent | `0 0 0 2px #02563D` | active seg: `#02563D` on `rgba(2,86,61,0.15)` |
| filled | `#FFFFFF` | transparent | — | `#0F172A` (fg) |
| error | `#FFFFFF` | `#DC2626` 1px | — | `#0F172A` (fg) |
| disabled | original + `opacity:0.5` | — | — | — |

---

## Focus Behavior

Focus uses the **shield ring** variant (single ring, no offset).

```css
box-shadow: 0px 0px 0px 2px var(--focus-ring, #02563D);
```

Active date segment gets a soft highlight:

```css
background: var(--accent/accent-soft, rgba(2,86,61,0.15));
color:      var(--accent/accent-soft-foreground, #02563D);
border-radius: var(--dimensions/radius/rounded-md, 6px);  /* md on segment */
```

---

## Typography

```css
font-family:  var(--font, 'Noto Sans');
font-size:    var(--dimensions/font/text-sm, 14px);
line-height:  var(--dimensions/leading/text-sm, 20px);

/* Label */
font-weight:  500;  /* medium */
color:        var(--foreground/foreground, #0F172A);

/* Segments — placeholder */
font-weight:  400;  /* regular */
color:        var(--foreground/muted, #64748B);

/* Separators ( / , : ) */
font-weight:  500;  /* medium */
color:        var(--foreground/muted, #64748B);
```

---

## Properties

| Property | Type | Default |
|---|---|---|
| `state` | `default \| hover \| focus \| filled \| error \| disabled` | `default` |
| `showLabel` | `boolean` | `true` |
| `label` | `string` | `"Date"` |
| `showDescription` | `boolean` | `true` |
| `description` | `string` | — |
| `showRequired` | `boolean` | `false` |
| `variant` | `primary \| secondary` | `primary` |

---

## Rules

- Use `primary` on page backgrounds; `secondary` on elevated surfaces (modal, card, drawer)
- Segment radius is `md (6px)` for the active highlight — not the field radius
- Field radius is xl (12px) — do not override
- Focus ring on field = shield (single 2px ring), not double-ring
- Error border replaces transparent border — same shadow retained
- Pair with DatePicker when calendar selection is needed
- Always expose label and error message for accessibility

---

## Figma Node Map

| Node ID | State |
|---|---|
| `14546:11181` | default |
| `14546:11198` | hover |
| `14546:11280` | focus |
| `14546:11621` | filled |
| `14546:11670` | error |
| `14546:11713` | disabled |
| `14538:24553` | input — primary |
| `14538:24657` | input — secondary |
