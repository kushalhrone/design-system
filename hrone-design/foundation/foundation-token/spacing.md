# Spacing System (Unified)

---

## 1. Base Unit

| Token      | Value   | Description                   |
| ---------- | ------- | ------------------------------ |
| `--space-1`| `0.25rem` (4px) | Foundation unit |
| `--space-px`| `1px` | Single pixel |

---

## 2. Spacing Scale (Linear)

| Token         | Value      | Pixels | Usage                        |
| ------------- | ---------- | ------ | ---------------------------- |
| `--space-0`   | `0`        | 0      | No spacing                   |
| `--space-0.5` | `0.125rem` | 2px    | Tight inline spacing        |
| `--space-1`   | `0.25rem`  | 4px    | Icon gaps, tight compacts   |
| `--space-1.5` | `0.375rem` | 6px    | Tight padding               |
| `--space-2`   | `0.5rem`   | 8px    | Default component padding   |
| `--space-2.5` | `0.625rem` | 10px   | Form field spacing           |
| `--space-3`   | `0.75rem`  | 12px   | Card padding                |
| `--space-3.5` | `0.875rem` | 14px   | Section padding             |
| `--space-4`   | `1rem`     | 16px   | Standard spacing            |
| `--space-5`   | `1.25rem`  | 20px   | Section gaps                |
| `--space-6`   | `1.5rem`   | 24px   | Section padding             |
| `--space-7`   | `1.75rem`  | 28px   | Large spacing               |
| `--space-8`   | `2rem`     | 32px   | Page sections               |
| `--space-9`   | `2.25rem`  | 36px   | Hero spacing                |
| `--space-10`  | `2.5rem`   | 40px   | Large page gaps             |
| `--space-11`  | `2.75rem`  | 44px   | XL spacing                  |
| `--space-12`  | `3rem`     | 48px   | Section dividers            |
| `--space-14`  | `3.5rem`   | 56px   | Major sections              |
| `--space-16`  | `4rem`     | 64px   | Page-level spacing          |
| `--space-20`  | `5rem`     | 80px   | Hero sections               |
| `--space-24`  | `6rem`     | 96px   | Landing sections            |
| `--space-28`  | `7rem`     | 112px  | Large gaps                  |
| `--space-32`  | `8rem`     | 128px | Full-width sections         |
| `--space-36`  | `9rem`     | 144px | Oversized spacing           |
| `--space-40`  | `10rem`    | 160px | Maximum spacing            |

---

## 3. Semantic Spacing Tokens

### Component Spacing

```css
--space-inset-xs: var(--space-1);
--space-inset-sm: var(--space-2);
--space-inset-md: var(--space-3);
--space-inset-lg: var(--space-4);
--space-inset-xl: var(--space-6);
```

### Inline Spacing

```css
--space-inline-xs: var(--space-1);
--space-inline-sm: var(--space-2);
--space-inline-md: var(--space-3);
--space-inline-lg: var(--space-4);
--space-inline-xl: var(--space-6);
```

### Stack Spacing (Vertical)

```css
--space-stack-xs: var(--space-2);
--space-stack-sm: var(--space-3);
--space-stack-md: var(--space-4);
--space-stack-lg: var(--space-6);
--space-stack-xl: var(--space-8);
--space-stack-2xl: var(--space-12);
```

### Gap Spacing

```css
--space-gap-xs: var(--space-1);
--space-gap-sm: var(--space-2);
--space-gap-md: var(--space-3);
--space-gap-lg: var(--space-4);
--space-gap-xl: var(--space-6);
--space-gap-2xl: var(--space-8);
```

---

## 4. Container Widths

| Token              | Value     | Usage                        |
| ------------------ | --------- | ---------------------------- |
| `--container-sm`   | `640px`   | Small containers            |
| `--container-md`   | `768px`   | Tablet containers           |
| `--container-lg`   | `1024px`  | Desktop containers          |
| `--container-xl`   | `1280px`  | Large desktop containers    |
| `--container-2xl`  | `1536px`  | Extra large screens         |
| `--container-full` | `100%`    | Full width container        |

---

## 5. Max Content Width

| Token              | Value      | Usage                        |
| ------------------ | ---------- | ---------------------------- |
| --content-sm       | `65ch`     | Narrow readable content     |
| --content-md       | `75ch`     | Standard readable width      |
| --content-lg       | `85ch`     | Wide readable content        |

---

## 6. Padding System (Inset)

```css
--padding-xs: var(--space-2) var(--space-3);
--padding-sm: var(--space-3) var(--space-4);
--padding-md: var(--space-4) var(--space-6);
--padding-lg: var(--space-6) var(--space-8);
--padding-xl: var(--space-8) var(--space-12);
```

### Card Padding

```css
--padding-card: var(--space-4);
--padding-card-lg: var(--space-6);
```

### Button Padding

```css
--padding-button-sm: var(--space-1) var(--space-2);
--padding-button-md: var(--space-2) var(--space-4);
--padding-button-lg: var(--space-3) var(--space-6);
```

### Input Padding

```css
--padding-input: var(--space-2) var(--space-3);
--padding-input-sm: var(--space-1) var(--space-2);
```

---

## 7. Section Spacing

```css
--space-section-sm: var(--space-12);
--space-section-md: var(--space-16);
--space-section-lg: var(--space-24);
--space-section-xl: var(--space-32);
```

---

## 8. Layout Spacing

### Page Margins

```css
--margin-page-xs: var(--space-4);
--margin-page-sm: var(--space-6);
--margin-page-md: var(--space-8);
--margin-page-lg: var(--space-12);
--margin-page-xl: var(--space-16);
```

### Sidebar Width

```css
--width-sidebar-sm: 200px;
--width-sidebar-md: 240px;
--width-sidebar-lg: 280px;
--width-sidebar-xl: 320px;
```

---

## 9. Grid Gap Scale

```css
--grid-gap-xs: var(--space-2);
--grid-gap-sm: var(--space-3);
--grid-gap-md: var(--space-4);
--grid-gap-lg: var(--space-6);
--grid-gap-xl: var(--space-8);
--grid-gap-2xl: var(--space-12);
```

---

## 10. Dark Mode Spacing

Spacing values remain consistent in dark mode. No adjustments needed.

---

## 11. DS / Figma Mapping (Reference Only)

```css
spacing/space-0 → --space-0
spacing/space-1 → --space-1
spacing/space-2 → --space-2
spacing/space-3 → --space-3
spacing/space-4 → --space-4
spacing/space-6 → --space-6
spacing/space-8 → --space-8
spacing/space-12 → --space-12
spacing/space-16 → --space-16
spacing/space-24 → --space-24

spacing/inset-sm → --space-inset-sm
spacing/inset-md → --space-inset-md
spacing/inset-lg → --space-inset-lg

spacing/inline-xs → --space-inline-xs
spacing/inline-sm → --space-inline-sm
spacing/inline-md → --space-inline-md

spacing/stack-xs → --space-stack-xs
spacing/stack-sm → --space-stack-sm
spacing/stack-md → --space-stack-md
spacing/stack-lg → --space-stack-lg

container/sm → --container-sm
container/md → --container-md
container/lg → --container-lg
container/xl → --container-xl

layout/section → --space-section-md
layout/page-margin → --margin-page-md
layout/sidebar → --width-sidebar-md
```

---

## Rules

* Use `--space-*` primitives only when no semantic token fits
* Use `--space-inset-*` for component padding
* Use `--space-inline-*` for horizontal spacing between elements
* Use `--space-stack-*` for vertical spacing between elements
* Use `--space-gap-*` for grid/flex gap
* Use `--space-section-*` for page section spacing
* Never use raw pixel values in components
* Container width tokens for content boundaries
* Dark mode uses same spacing values

---