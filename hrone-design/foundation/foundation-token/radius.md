# Radius

Radius defines the overall shape language of the system. Treated as a **system-level variable**, not a per-component style. Based on Tailwind's base radius scale. Changing the base radius proportionally updates the entire interface — sharper or softer without redesigning individual components.

---

## Scale

| Token | CSS Variable | Value | Usage |
|---|---|---|---|
| None | — | `0px` | Tables, full-bleed images, flush edges |
| `xs` | `--dimensions/radius/rounded-xs` | `2px` | Subtle rounding, badges, chips |
| `sm` | `--dimensions/radius/rounded-sm` | `4px` | Inputs, small buttons, tags |
| `md` | `--dimensions/radius/rounded-md` | `6px` | Default buttons, small cards |
| `lg` | `--dimensions/radius/rounded-lg` | `8px` | Cards, dropdowns, popovers |
| `xl` | `--dimensions/radius/rounded-xl` | `12px` | Modals, sheets, panels |
| `2xl` | `--dimensions/radius/rounded-2xl` | `16px` | Large cards, containers |
| `2_5xl` | `--dimensions/radius/rounded-2_5xl` | `20px` | Hero sections, feature blocks |
| `3xl` | `--dimensions/radius/rounded-3xl` | `24px` | Decorative containers |
| `4xl` | `--dimensions/radius/rounded-4xl` | `32px` | Large decorative elements |
| `full` | `--dimensions/radius/rounded-full` | `9999px` | Pills, avatars, toggles |

---

## Mapping to rule.md Tokens

The project's `rule.md` uses a simplified subset. Map as follows:

| rule.md Token | Value | DS Equivalent |
|---|---|---|
| `--radius-sm` | `4px` | `rounded-sm` |
| `--radius-md` | `6px` | `rounded-md` |
| `--radius-lg` | `8px` | `rounded-lg` |
| `--radius-xl` | `12px` | `rounded-xl` |
| `--radius-2xl` | `16px` | `rounded-2xl` |
| `--radius-3xl` | `24px` | `rounded-3xl` |
| `--radius-full` | `9999px` | `rounded-full` |

> `xs` (2px), `2_5xl` (20px), `4xl` (32px) exist in DS but have no direct rule.md token. Use nearest or map explicitly if needed.

---

## Component Defaults

| Component | Radius |
|---|---|
| Button | `lg` (8px) |
| Input / Field | `xl` (12px) |
| Badge / Tag | `sm` (4px) or `full` |
| Card | `lg` (8px) – `xl` (12px) |
| Modal / Drawer | `xl` (12px) – `2xl` (16px) |
| Dropdown / Popover | `lg` (8px) |
| Avatar | `full` (9999px) |
| Toggle / Switch | `full` (9999px) |
| Separator | `sm` (4px) |
| Overlay container | `2_5xl` (20px) |

---

## Rules

- Use system tokens only — never hardcode pixel values
- `rounded-full` exclusively for circular elements (avatars, toggles, pills)
- Do not mix radius steps within a single component (e.g. top `lg`, bottom `none` = intentional exception only)
- Consistent radius across all states (default, hover, focus, disabled)
