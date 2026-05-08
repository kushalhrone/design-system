# Component Library — Orchestrator

> Entry point for all components. Directs to category and component SKILL files.
> Rule priority: foundation tokens → component SKILL → variants index → variant SKILL → variant spec.

---

## Categories

| Category | Components |
|---|---|
| [action](./action/) | button-group, buttons, close-button, kbd, link, toggle-button, toggle-button-group, toolbar |
| [alert-dialog](./alert-dialog/) | alert-dialog |
| [avatar](./avatar/) | avatar |
| [card](./card/) | card |
| [dropdown](./dropdown/) | dropdown |
| [feedback](./feedback/) | alert, badge, chip, descriptive-modal, drawer, modal, progress-bar, progress-circle, spinner, toast |
| [form](./form/) | autocomplete, calendar, checkbox, checkbox-group, color-picker, colorfield, combobox, date-field, date-picker, date-range-picker, descriptive-error-message, input-affix, input-group, input-otp, label, link-box, meter, number-field, radio, radio-group, range-calendar, searchfield, slider, switch, switch-group, tag-group, text-area, text-field, time-field |
| [layout](./layout/) | resizable, surface |
| [navigation](./navigation/) | accordion, breadcrumbs, pagination, tabs, tabs-element |
| [select](./select/) | select |
| [table](./table/) | table |
| [utilities](./utilities/) | scroll-shadow, skeleton, tooltip |

---

## Foundation References

| Token Group | Source |
|---|---|
| Color | `../foundation/foundation-token/color.md` |
| Typography | `../foundation/foundation-token/typography.md` |
| Spacing | `../foundation/foundation-token/spacing.md` |
| Radius | `../foundation/foundation-token/radius.md` |
| Effects | `../foundation/foundation-token/effects.md` |

---

## Authority Chain

When token values conflict between files, this order wins:

```
DESIGN.md  →  foundation/foundation-token/*.md  →  components/**/SKILL.md
```

## Rules

- Always load foundation tokens before component tokens
- Use `--color-*` semantic tokens — never hardcode primitive values
- Each component SKILL.md is the single source of truth for that component's shared tokens
- Variant files are additive — they extend the component SKILL, never override shared tokens
