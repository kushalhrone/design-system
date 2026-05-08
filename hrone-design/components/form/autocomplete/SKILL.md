# Autocomplete Component Orchestrator

> Entry point for the autocomplete/autofill component family.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `/foundation/foundation-token/`.

---

## Component Index

| Component | File | Figma Node | Notes |
|---|---|---|---|
| **Closed** | [variants/closed/closed.md](./variants/closed/closed.md) | `14339:37145` | Compact field with tags and chevron |
| **Open** | [variants/open/open.md](./variants/open/open.md) | `14339:37136` | Field plus dropdown list |
| **Empty** | [variants/empty/empty.md](./variants/empty/empty.md) | `14339:37142` | Open state with no matches |
| **Selected** | [variants/selected/selected.md](./variants/selected/selected.md) | `14339:37139` | Selected chips, clear action, checks |
| **Input** | [variants/input/input.md](./variants/input/input.md) | `14339:37081`, `14339:37089` | Shared input primitive, primary + secondary |
| **Clear** | [variants/clear/clear.md](./variants/clear/clear.md) | `18010:6038`, `18010:6043` | Clear icon hit area |

---

## Shared Tokens

### Structure

```css
--autocomplete-field-height: 36px;
--autocomplete-field-radius: var(--dimensions/radius/rounded-lg, 8px);
--autocomplete-input-radius: var(--field/radius, 12px);
--autocomplete-padding-x: var(--dimensions/spacing/3, 12px);
--autocomplete-gap: var(--dimensions/spacing/2, 8px);
--autocomplete-chip-height: 20px;
--autocomplete-chip-radius: var(--dimensions/radius/rounded-sm, 4px);
```

### Color Tokens

```css
--autocomplete-surface: var(--field/background, #FFFFFF);
--autocomplete-surface-hover: var(--field/background-hover, rgba(249,249,249,0.92));
--autocomplete-surface-secondary: var(--default/default, #F1F1F1);
--autocomplete-surface-elevated: var(--surface/surface, #FFFFFF);
--autocomplete-fg: var(--foreground/foreground, #18181B);
--autocomplete-muted: var(--field/placeholder, #71717A);
--autocomplete-chip-fg: var(--field/foreground, #18181B);
--autocomplete-chip-bg: var(--default/default, #F1F1F1);
--autocomplete-ring: var(--focus-ring, #02563D);
--autocomplete-disabled-opacity: var(--disabled-opacity, 0.5);
```

### Typography

```css
--autocomplete-label-size: var(--dimensions/font/text-sm, 14px);
--autocomplete-label-weight: 500;
--autocomplete-label-leading: var(--dimensions/leading/text-sm, 20px);
--autocomplete-chip-size: var(--dimensions/font/text-xs, 12px);
--autocomplete-chip-weight: 500;
--autocomplete-chip-leading: var(--dimensions/leading/text-xs, 16px);
--autocomplete-value-size: var(--dimensions/font/text-sm, 14px);
--autocomplete-value-weight: 400;
--autocomplete-value-leading: var(--dimensions/leading/text-sm, 20px);
```

### Effects

```css
--autocomplete-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);

--autocomplete-focus-ring: 0px 0px 0px 2px var(--autocomplete-ring);
--autocomplete-dropdown-shadow:
  0px 14px 28px 0px rgba(0, 0, 0, 0.08),
  0px -6px 12px 0px rgba(0, 0, 0, 0.03),
  0px 2px 8px 0px rgba(0, 0, 0, 0.06);
```

---

## Rules

- Use `Noto Sans` for all labels, chips, and values.
- The field radius is `lg` (8px); the inner input radius is `12px`.
- Use the shield focus ring: single 2px ring, no offset ring stack.
- `selected` state shows the clear action and checkmarks in the list.
- `showTags=false` switches the field to the search-input layout.
- Disabled state is `opacity: 0.5` on the whole field wrapper.
- Do not hardcode alternate fonts or Inter.
- Keep chip and list item heights at 20px and 36px respectively.

