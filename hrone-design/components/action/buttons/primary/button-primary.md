# Primary Button

## States

| State | Background | Ring | Opacity |
| ----- | ---------- | ---- | ------- |
| Default | `#02563D` | none | 100% |
| Hover | `#013E2C` | none | 100% |
| Focus | `#02563D` | 2px offset + 4px ring `#02563D` | 100% |
| Disabled | `#02563D` | none | 50% |

## Usage

```tsx
import { ButtonPrimary } from './components/action/buttons/primary';

// Default
<ButtonPrimary>Click me</ButtonPrimary>

// Disabled
<ButtonPrimary disabled>Disabled</ButtonPrimary>

// With icon
<ButtonPrimary prefix={<Icon />}>With Prefix</ButtonPrimary>
```