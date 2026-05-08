# Input OTP Component Orchestrator

> Entry point for the input-otp component.
> Rule priority: effects > radius > color > typography > spacing.
> Foundation source of truth: `/foundation/foundation-token/`.

---

## Component Index

| Component | File | Figma Node | Notes |
|---|---|---|---|
| **Primary** | [variants/primary/primary.md](./variants/primary/primary.md) | `2698:25441` | Default elevated input OTP |
| **Secondary** | [variants/secondary/secondary.md](./variants/secondary/secondary.md) | `12948:29646` | Elevated surface variant |

---

## Shared Tokens

### Structure

```css
--otp-layout-gap: var(--dimensions/spacing/2, 8px);
--otp-header-gap: var(--dimensions/spacing/1, 4px);
--otp-slot-width: 38px;
--otp-slot-height: var(--dimensions/spacing/10, 40px);
--otp-slot-radius: var(--dimensions/radius/rounded-lg, 8px);
--otp-slot-gap: var(--dimensions/spacing/2, 8px);
--otp-separator-width: 6px;
--otp-separator-height: 2px;
--otp-footer-padding-top: var(--dimensions/spacing/1, 4px);
```

### Color Tokens

```css
--otp-field-surface: var(--field/background, #FFFFFF);
--otp-field-surface-hover: var(--field/background-hover, rgba(249,249,249,0.92));
--otp-field-surface-focus: var(--field/background-focus, #FFFFFF);
--otp-field-surface-secondary: var(--default/default, #F1F1F1);
--otp-field-fg: var(--field/foreground, #18181B);
--otp-muted: var(--foreground/muted, #71717A);
--otp-danger: var(--danger/danger, #DC2626);
--otp-ring: var(--focus-ring, #02563D);
--otp-disabled-opacity: var(--disabled-opacity, 0.5);
```

### Typography

```css
--otp-label-size: var(--dimensions/font/text-sm, 14px);
--otp-label-weight: 500;
--otp-label-leading: var(--dimensions/leading/text-sm, 20px);
--otp-slot-size: var(--dimensions/font/text-lg, 18px);
--otp-slot-weight: 600;
--otp-slot-leading: var(--dimensions/leading/text-lg, 28px);
--otp-footer-size: var(--dimensions/font/text-sm, 14px);
--otp-footer-weight: 400;
```

### Effects

```css
--otp-field-shadow:
  0px 2px 4px 0px rgba(0, 0, 0, 0.04),
  0px 1px 2px 0px rgba(0, 0, 0, 0.06),
  0px 0px 1px 0px rgba(0, 0, 0, 0.06);

--otp-focus-ring: 0px 0px 0px 2px var(--otp-ring);
--otp-inset-highlight: inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1);
```

---

## Rules

- Six slots always: three, separator, three.
- Slot radius is `rounded-lg` (8px) by design spec.
- Digit font is `18px` semibold, centered.
- Focus ring is the shield ring on the active slot only.
- Error state applies to the full layout, not one slot at a time.
- Disabled state sets the wrapper opacity to `0.5`.
- Secondary is intended for elevated surfaces and uses the gray surface token.

