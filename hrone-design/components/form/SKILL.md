# Form Component Orchestrator

> Entry point for all form component token context.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `/foundation/foundation-token/`.

---

## Component Index

| Component | File | Figma Node |
|---|---|---|
| **Radio** | [radio/SKILL.md](./radio/SKILL.md) | `2450:5484` |
| **RadioGroup** | [radio-group/SKILL.md](./radio-group/SKILL.md) | `2450:5614` |
| **DateField** | [date-field/date-field.md](./date-field/date-field.md) | `17293:41856` |
| **DatePicker** | [date-picker/SKILL.md](./date-picker/SKILL.md) | `2740:9201` |
| **InputOTP** | [input-otp/SKILL.md](./input-otp/SKILL.md) | `2698:25441` |
| **Autocomplete** | [autocomplete/SKILL.md](./autocomplete/SKILL.md) | `14339:37135` |
| **Meter** | [meter/SKILL.md](./meter/SKILL.md) | `21302:76781` |
| **NumberField** | [number-field/SKILL.md](./number-field/SKILL.md) | `14104:12896` |
| **Calendar** | [calendar/calendar.md](./calendar/calendar.md) | `5375:71626` |
| **RangeCalendar** | [range-calendar/SKILL.md](./range-calendar/SKILL.md) | `19890:13049` |

---

## Shared Tokens (all form components)

### Typography

```css
--form-font-family:    var(--font, 'Noto Sans');
--form-label-size:     var(--dimensions/font/text-sm, 14px);
--form-label-weight:   500;                                   /* Medium */
--form-label-leading:  var(--dimensions/leading/text-sm, 20px);
--form-desc-size:      var(--dimensions/font/text-xs, 12px);
--form-desc-leading:   var(--dimensions/leading/text-xs, 16px);
--form-desc-color:     var(--foreground/muted, #64748B);      /* --color-fg-muted */
```

### Label Colors

```css
--form-label-color:    var(--foreground/foreground, #0F172A);  /* --color-fg */
--form-required-color: var(--danger/danger, #DC2626);          /* --color-error */
--form-error-color:    var(--danger/danger, #DC2626);          /* --color-error */
```

### Field Structure

```css
--field-height:        36px;
--field-radius:        var(--dimensions/radius/rounded-xl, 12px);  /* xl per Figma */
--field-padding-x:     var(--dimensions/spacing/3, 12px);
--field-border-width:  var(--field/border-width, 1px);
--field-gap:           var(--dimensions/spacing/1, 4px);           /* label → field */
```

### Field Shadows

```css
/* Default / Hover */
box-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);

/* Focus — single ring (shield variant) */
box-shadow: 0px 0px 0px 2px var(--focus-ring, #02563D);
```

### Focus Ring

All form fields use the **Focus Ring Shield** (single ring, no offset) — matches `effects.md §Focus Ring Shield`.

```css
box-shadow: 0px 0px 0px 2px var(--focus-ring, #02563D);
```

### Disabled State

```css
opacity: var(--disabled-opacity, 0.5);
pointer-events: none;
```

---

## Rules

- Label always uses `font-medium` (500), description uses `font-regular` (400)
- Error message replaces description when state = error/invalid
- Required asterisk uses `--color-error` (`#DC2626`)
- All fields use `--field-radius` (xl, 12px) — consistent with Figma DS
- Focus ring on fields = single shield ring (not double), color = `--focus-ring: #02563D`
- Disabled = `opacity: 0.5` on entire field wrapper
- Never hardcode resolved hex values — always use token variables
