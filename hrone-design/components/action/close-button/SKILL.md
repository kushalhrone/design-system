# Close Button Component Orchestrator

> Entry point for the close-button component.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `/foundation/foundation-token/`.

---

## Component Index

| Component | File | Figma Node | Notes |
|---|---|---|---|
| **Default** | [variants/default/default.md](./variants/default/default.md) | `3136:29454` | Resting state |
| **Hover** | [variants/hover/hover.md](./variants/hover/hover.md) | `3136:29456` | Hover background |
| **Focus** | [variants/focus/focus.md](./variants/focus/focus.md) | `3760:28182` | Double-ring focus treatment |

---

## Shared Tokens

### Structure

```css
--close-button-size: 24px;
--close-button-radius: var(--dimensions/radius/rounded-xl, 12px);
--close-button-padding: var(--dimensions/spacing/1, 4px);
--close-button-icon-size: 16px;
--close-button-icon-inset: 20.31%;
```

### Color Tokens

```css
--close-button-bg: var(--default/default, #F1F1F1);
--close-button-bg-hover: var(--default/default-hover, #FFFFFF);
--close-button-fg: var(--foreground/muted, #71717A);
--close-button-ring-offset: var(--background/background, #F8FAFB);
--close-button-ring: var(--focus-ring, #02563D);
```

### Typography

```css
--close-button-label-size: var(--dimensions/font/text-base, 16px);
--close-button-label-weight: 500;
--close-button-label-leading: var(--dimensions/leading/text-base, 24px);
```

### Effects

```css
--close-button-focus-ring:
  0px 0px 0px 2px var(--close-button-ring-offset),
  0px 0px 0px 4px var(--close-button-ring);
```

---

## Rules

- Use a 24px square hit area with 4px internal padding.
- Render the xmark icon at 16px.
- Default state uses the gray default surface.
- Hover and focus use the white hover surface.
- Focus state uses a double ring: background offset ring + brand ring.
- Keep the icon centered and clipped inside the rounded container.
- Do not add extra label text or borders.

