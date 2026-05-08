# Effect Styles

Effect styles define depth, separation, and focus in the system. Applied consistently across the interface to communicate hierarchy without relying on color alone. **Never modify at component level** — these are system-level styles.

---

## Shadows

Shadows represent elevation and layering. Distinguish surfaces, floating elements, and interactive components. Intentionally subtle.

### Inner

Inset shadow. Used for pressed/recessed states, inset wells.

```css
box-shadow: inset 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
```

| Property | Value |
|---|---|
| Type | Inner Shadow |
| Offset | 0, 0 |
| Blur | 1px |
| Spread | 0 |
| Color | `rgba(0,0,0,0.3)` |

---

### Surface

Raised surface. Used for cards, panels, floating containers.

```css
box-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);
```

| Layer | Offset | Blur | Spread | Color |
|---|---|---|---|---|
| 1 | 0, 2px | 4px | 0 | `rgba(0,0,0,0.04)` |
| 2 | 0, 1px | 2px | 0 | `rgba(0,0,0,0.06)` |
| 3 | 0, 0 | 1px | 0 | `rgba(0,0,0,0.06)` |

Background blur also applied on surface: `backdrop-blur: var(--blur)`.

---

### Field

Input fields, text areas, form controls.

```css
box-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);
/* + inset highlight */
box-shadow: inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1);
```

Same outer layers as Surface. Additionally has a subtle white inset highlight for depth.

---

### Switch

Toggle switch knob.

```css
box-shadow:
  0px 0px 1px 0px rgba(0, 0, 0, 0.3),
  0px 2px 10px 0px rgba(0, 0, 0, 0.06),
  0px 0px 5px 0px rgba(0, 0, 0, 0.02);
```

| Layer | Offset | Blur | Spread | Color |
|---|---|---|---|---|
| 1 | 0, 0 | 1px | 0 | `rgba(0,0,0,0.3)` |
| 2 | 0, 2px | 10px | 0 | `rgba(0,0,0,0.06)` |
| 3 | 0, 0 | 5px | 0 | `rgba(0,0,0,0.02)` |

---

### Tab

Active tab indicator or selected tab surface.

```css
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
```

---

### Overlay

Modals, drawers, dropdowns, popovers.

```css
box-shadow:
  0px 14px 28px 0px rgba(0, 0, 0, 0.08),
  0px -6px 12px 0px rgba(0, 0, 0, 0.03),
  0px 2px 8px 0px rgba(0, 0, 0, 0.06);
/* + inset overlay */
box-shadow: inset 0px 0px 1px 0px rgba(0, 0, 0, 0);
```

Background blur applied: `backdrop-blur: var(--blur)`.

| Layer | Offset | Blur | Spread | Color |
|---|---|---|---|---|
| 1 | 0, 14px | 28px | 0 | `rgba(0,0,0,0.08)` |
| 2 | 0, -6px | 12px | 0 | `rgba(0,0,0,0.03)` |
| 3 | 0, 2px | 8px | 0 | `rgba(0,0,0,0.06)` |

---

## Blur

Used selectively for focus and separation — overlays, backgrounds, temporary states.

### Blur

Standard background blur. Used behind glass-style surfaces.

```css
backdrop-filter: blur(6px);   /* var(--blur) resolves to 6px */
```

### Backdrop

Full overlay backdrop blur. Used behind modals, sheets, dialogs.

```css
backdrop-filter: blur(12px);  /* blur-backdrop */
background: rgba(0, 0, 0, 0.5);
```

---

## Focus Rings

Communicate keyboard focus on interactive elements. Required for WCAG 2.4.7 compliance.

### Focus Ring

Standard focus state. Double-ring: outer brand ring + white offset.

```css
box-shadow:
  0px 0px 0px 2px var(--background\/background, #F8FAFB),   /* offset ring */
  0px 0px 0px 4px var(--focus-ring, #02563d);               /* brand ring */
```

| Ring | Spread | Color |
|---|---|---|
| Offset (inner) | 2px | `--color-bg` (`#F8FAFB` light / `#0F172A` dark) |
| Brand (outer) | 4px | `--color-focus-ring` (`#02563D` light / `#3DAB87` dark) |

Tailwind: `ring-2 ring-offset-2 ring-primary`

---

### Focus Ring Shield

Single-ring variant. Used for elements where the offset ring is unnecessary (e.g. full-width inputs, inline elements).

```css
box-shadow: 0px 0px 0px 2px var(--focus-ring, #02563d);
```

| Ring | Spread | Color |
|---|---|---|
| Brand | 2px | `--color-focus-ring` |

---

### Secondary Focus Ring

Double-ring variant using secondary brand color. Used on secondary action buttons/interactive elements.

```css
box-shadow:
  0px 0px 0px 2px var(--background\/background, #F8FAFB),  /* offset ring */
  0px 0px 0px 4px var(--color-secondary, #02563D);          /* secondary ring */
```

| Ring | Spread | Color |
|---|---|---|
| Offset (inner) | 2px | `--color-bg` (`#F8FAFB` light / `#0F172A` dark) |
| Secondary (outer) | 4px | `--color-secondary` (`#02563D`) |

---

### Secondary Focus Ring Shield

Single-ring secondary variant.

```css
box-shadow: 0px 0px 0px 2px var(--color-secondary, #02563D);
```

| Ring | Spread | Color |
|---|---|---|
| Secondary | 2px | `--color-secondary` (`#02563D`) |

---

### Danger Focus Ring

Double-ring variant for destructive/danger actions.

```css
box-shadow:
  0px 0px 0px 2px var(--background\/background, #F8FAFB),  /* offset ring */
  0px 0px 0px 4px var(--color-error, #b42318);              /* danger ring */
```

| Ring | Spread | Color |
|---|---|---|
| Offset (inner) | 2px | `--color-bg` (`#F8FAFB` light / `#0F172A` dark) |
| Danger (outer) | 4px | `--color-error` (`#B42318`) |

---

### Danger Focus Ring Shield

Single-ring danger variant.

```css
box-shadow: 0px 0px 0px 2px var(--color-error, #b42318);
```

| Ring | Spread | Color |
|---|---|---|
| Danger | 2px | `--color-error` (`#B42318`) |

---

## Token Reference

| Token | Light | Dark |
|---|---|---|
| `--color-focus-ring` | `#02563D4D` | `#3DAB8766` |
| `--color-secondary` | `#02563D` | `#FFDC8A` |
| `--color-error` | `#B42318` | `#DC2626` |
| `--ring-offset-width` | `2px` | `2px` |
| `--ring-focus-width` | `4px` | `4px` |
| `--blur` | `6px` | `6px` |
| `--blur-backdrop` | `12px` | `12px` |

---

## Rules

- Never override shadow styles at component level
- Focus rings must be visible on all backgrounds — use offset ring when surface and ring color are close
- Blur applies to background only (`backdrop-filter`), not the element itself
- Overlay shadow always pairs with backdrop blur
- `clipsContent: false` required on parent frames for focus ring to render outside bounds
