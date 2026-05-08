# Date Picker Component Orchestrator

> Entry point for the date-picker component.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `/foundation/foundation-token/`.

---

## Component Index

| Component | File | Figma Node | Notes |
|---|---|---|---|
| **Closed** | [variants/closed/closed.md](./variants/closed/closed.md) | `2740:9205` | Date field only |
| **Open** | [variants/open/open.md](./variants/open/open.md) | `2740:9202` | Date field + calendar popover |

---

## Shared Tokens

### Structure

```css
--datepicker-width: 288px;
--datepicker-field-gap: var(--dimensions/spacing/2, 8px);
--datepicker-popover-radius: var(--dimensions/radius/rounded-lg, 8px);
--datepicker-popover-padding-x: var(--dimensions/spacing/4, 16px);
--datepicker-popover-padding-bottom: var(--dimensions/spacing/4, 16px);
```

### Color Tokens

```css
--datepicker-surface: var(--field/background, #FFFFFF);
--datepicker-popover-surface: var(--overlay, #FFFFFF);
--datepicker-label: var(--foreground/foreground, #18181B);
--datepicker-muted: var(--foreground/muted, #71717A);
--datepicker-ring: var(--focus-ring, #02563D);
```

### Effects

```css
--datepicker-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);

--datepicker-focus-ring: 0px 0px 0px 2px var(--datepicker-ring);
--datepicker-popover-shadow:
  0px 14px 28px 0px rgba(0, 0, 0, 0.08),
  0px -6px 12px 0px rgba(0, 0, 0, 0.03),
  0px 2px 8px 0px rgba(0, 0, 0, 0.06);
```

### Typography

```css
--datepicker-label-size: var(--dimensions/font/text-sm, 14px);
--datepicker-label-weight: 500;
--datepicker-value-size: var(--dimensions/font/text-sm, 14px);
--datepicker-value-weight: 400;
--datepicker-weekday-size: var(--dimensions/font/text-sm, 14px);
--datepicker-day-size: var(--dimensions/font/text-sm, 14px);
```

---

## Rules

- Closed state shows only the date field.
- Open state shows the date field in focus plus the calendar popover below.
- Use the shield focus ring on the date field, not the double-ring button focus style.
- Calendar popover uses the overlay shadow and 8px radius.
- Month navigation and day grid stay inside the 256px calendar body.
- Keep the field width at 288px to match the Figma component set.
- Do not duplicate DateField tokens inside the popover; reuse the shared form tokens.

