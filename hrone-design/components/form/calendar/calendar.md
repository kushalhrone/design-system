# Calendar Component

> References foundation tokens from `/foundation/foundation-token/`.
> See `/components/form/SKILL.md` for shared form tokens.
> Range selection: see `range-calendar.md`.

---

## Meta

```yaml
component: Calendar
figma_file: ykoHMdavBzSeeplUfco3HZ
figma_node: "5375:71626"
types: [present, future, years, multi, mobile]
width: 256px
```

---

## Anatomy

- **CalendarNavigation** — month/year header with prev/next arrows
- **Weekday Headers** — Sun–Sat row
- **Calendar Grid** — 5–6 rows × 7 columns of CalendarDay cells
- **_CalendarTime** (optional) — time selector below grid
- **Top Content** (optional) — ButtonGroup or filter controls
- **Bottom Content** (optional) — TagList, presets, or summary

---

## Structure Tokens

```css
--calendar-width:         256px;
--calendar-day-size:      var(--dimensions/spacing/9, 36px);   /* 36×36px cells */
--calendar-row-gap:       var(--dimensions/spacing/0\.5, 2px); /* between day rows */
--calendar-header-py:     var(--dimensions/spacing/4, 16px);   /* nav padding-y */
--calendar-week-py:       var(--dimensions/spacing/2, 8px);    /* weekday row padding */
--calendar-grid-py:       var(--dimensions/spacing/2, 8px);    /* grid padding */
```

---

## CalendarDay States

### Default

```css
border-radius: var(--dimensions/radius/rounded-3xl, 24px);  /* 24px = full circle on 36px */
color: var(--foreground/foreground, #0F172A);
font-size: var(--dimensions/font/text-sm, 14px);
font-weight: 500;
```

### Today (active)

```css
/* Ring indicator or highlighted background — same radius */
border-radius: var(--dimensions/radius/rounded-3xl, 24px);
```

### Hover

```css
background: var(--default/default, #EBEBEC);
border-radius: var(--dimensions/radius/rounded-3xl, 24px);
cursor: pointer;
```

### Selected

```css
background: var(--accent/accent, #02563D);      /* --color-secondary */
color:      var(--accent/accent-foreground, #FFFFFF);  /* --neutral-25 */
border-radius: var(--dimensions/radius/rounded-3xl, 24px);
cursor: pointer;
```

### Out of Month

```css
opacity: var(--disabled-opacity, 0.5);
color:   var(--foreground/muted, #64748B);       /* --color-fg-muted */
```

### Disabled

```css
opacity: var(--disabled-opacity, 0.5);
pointer-events: none;
```

### Hidden

```css
display: none;  /* not rendered in grid */
```

---

## CalendarNavigation

```css
--nav-height:       56px;
--nav-arrow-size:   24px;
--nav-arrow-radius: var(--dimensions/radius/rounded-md, 6px);
--nav-arrow-p:      var(--dimensions/spacing/1, 4px);

/* Month/Year text */
font-size:    var(--dimensions/font/text-sm, 14px);
font-weight:  500;
color:        var(--foreground/foreground, #0F172A);

/* Arrow hover */
background: var(--default/default, #EBEBEC);
```

---

## Weekday Header

```css
font-size:   var(--dimensions/font/text-sm, 14px);
font-weight: 500;
color:       var(--foreground/muted, #64748B);  /* --color-fg-muted */
text-align:  center;
width:       36px;
```

---

## Day Indicator (dot)

Optional event/today indicator below day number.

```css
width:  3px;
height: 3px;
border-radius: var(--dimensions/radius/rounded-xl, 12px);
background: var(--foreground/muted, #64748B);  /* muted on default days */
/* Selected day: --accent/accent-foreground (#FFFFFF) */
position: absolute;
bottom: 4px;
left: 50%;
transform: translateX(-50%);
```

---

## Calendar Types

| Type | Description |
|---|---|
| `present` | Current month, standard grid |
| `future` | Navigating upcoming months |
| `years` | Year-picker grid |
| `multi` | Two months side-by-side (516px wide) |
| `mobile` | Single-column compact (343px wide) |

---

## Rules

- Calendar day radius = `rounded-3xl` (24px) — creates full circle on 36px cell
- Navigation arrow radius = `rounded-md` (6px) — small interactive element
- Selected = `--color-secondary` (#02563D) fill, never primary orange
- Out-of-month days = `opacity:0.5`, still same color tokens
- Never resize day cells from 36×36px
- Multi type: two calendars share one navigation header

---

## Figma Node Map

| Node ID | Type |
|---|---|
| `19806:13945` | present |
| `19806:14162` | future |
| `19806:14219` | years |
| `19806:14002` | multi |
| `2726:27247` | popover — present |
| `2734:28467` | popover — future |
| `14480:4994` | popover — years |
| `14485:4989` | popover — multi |
