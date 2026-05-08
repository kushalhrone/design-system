# Typography System (Unified)

---

## 1. Font Families (Brand Primitives)

| Token | Value | Usage |
|---|---|---|
| `--font-display` | `Noto Sans` | Headlines, hero, UI text |
| `--font-body` | `Noto Sans` | Body text, UI, components |

---

## 2. Font Size Scale

| Token | Value | Line Height | Usage |
|---|---|---|---|
| `--text-xs` | `0.75rem` | `1rem` | Caption, labels |
| `--text-sm` | `0.875rem` | `1.25rem` | Small body, helper |
| `--text-base` | `1rem` | `1.5rem` | Body text |
| `--text-lg` | `1.125rem` | `1.75rem` | Large body |
| `--text-xl` | `1.25rem` | `1.75rem` | Subheadings |
| `--text-2xl` | `1.5rem` | `2rem` | Section titles |
| `--text-3xl` | `1.875rem` | `2.25rem` | Page titles |
| `--text-4xl` | `2.25rem` | `2.5rem` | Hero headings |
| `--text-5xl` | `3rem` | `1` | Display (tight) |
| `--text-6xl` | `3.75rem` | `1` | Big impact |

---

## 3. Font Weight Scale

| Token | Value | Usage |
|---|---|---|
| `--font-light` | `300` | Decorative, large display |
| `--font-regular` | `400` | Body text, standard |
| `--font-medium` | `500` | Labels, emphasis |
| `--font-semibold` | `600` | Headings, navigation |
| `--font-bold` | `700` | Strong emphasis, buttons |
| `--font-extrabold` | `800` | Display, hero headlines |

---

## 4. Line Height Scale

| Token | Value | Usage |
|---|---|---|
| `--leading-none` | `1` | Tight display, buttons |
| `--leading-tight` | `1.25` | Headings |
| `--leading-snug` | `1.375` | Subheadings |
| `--leading-normal` | `1.5` | Body text (default) |
| `--leading-relaxed` | `1.625` | Large body, comfortable read |
| `--leading-loose` | `2` | Captions, metadata |

---

## 5. Letter Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--tracking-tighter` | `-0.05em` | Large display headings |
| `--tracking-tight` | `-0.025em` | Headings, titles |
| `--tracking-normal` | `0` | Body text (default) |
| `--tracking-wide` | `0.025em` | Small caps, labels |
| `--tracking-wider` | `0.05em` | All caps, badges |

---

## 6. Semantic Typography Tokens

### Display

```css
--text-display-xl: var(--text-6xl);
--text-display-lg: var(--text-5xl);
--text-display-md: var(--text-4xl);
--text-display-sm: var(--text-3xl);
```

### Headings

```css
--text-h1: var(--text-3xl);
--text-h2: var(--text-2xl);
--text-h3: var(--text-xl);
--text-h4: var(--text-lg);
```

### Body

```css
--text-body-lg: var(--text-lg);
--text-body-md: var(--text-base);
--text-body-sm: var(--text-sm);
--text-body-xs: var(--text-xs);
```

### UI / Component

```css
--text-button: var(--text-sm);
--text-button-sm: var(--text-xs);
--text-label: var(--text-sm);
--text-caption: var(--text-xs);
--text-overline: var(--text-xs);
```

---

## 7. Semantic Token Mapping (with font/weight/leading)

### Display

```css
--typography-display-xl: var(--text-6xl) var(--font-display) var(--font-extrabold) var(--leading-none);
--typography-display-lg: var(--text-5xl) var(--font-display) var(--font-extrabold) var(--leading-none);
--typography-display-md: var(--text-4xl) var(--font-display) var(--font-bold) var(--leading-tight);
--typography-display-sm: var(--text-3xl) var(--font-display) var(--font-bold) var(--leading-tight);
```

### Headings

```css
--typography-h1: var(--text-3xl) var(--font-display) var(--font-bold) var(--leading-tight);
--typography-h2: var(--text-2xl) var(--font-display) var(--font-semibold) var(--leading-tight);
--typography-h3: var(--text-xl) var(--font-display) var(--font-semibold) var(--leading-snug);
--typography-h4: var(--text-lg) var(--font-display) var(--font-medium) var(--leading-snug);
```

### Body

```css
--typography-body-lg: var(--text-lg) var(--font-body) var(--font-regular) var(--leading-normal);
--typography-body-md: var(--text-base) var(--font-body) var(--font-regular) var(--leading-normal);
--typography-body-sm: var(--text-sm) var(--font-body) var(--font-regular) var(--leading-normal);
--typography-body-xs: var(--text-xs) var(--font-body) var(--font-regular) var(--leading-loose);
```

### UI

```css
--typography-button: var(--text-sm) var(--font-body) var(--font-semibold) var(--leading-none);
--typography-label: var(--text-sm) var(--font-body) var(--font-medium) var(--leading-normal);
--typography-caption: var(--text-xs) var(--font-body) var(--font-regular) var(--leading-loose);
--typography-overline: var(--text-xs) var(--font-body) var(--font-semibold) var(--tracking-wider);
```

---

## 8. Dark Theme Typography

Dark mode uses the same tokens but may adjust for contrast:

```css
--text-display-xl: var(--text-5xl);
--text-display-lg: var(--text-4xl);
--text-display-md: var(--text-3xl);
```

Font families and weights remain consistent between light/dark.

---

## 9. Dark Mode Font Family Override

```css
--font-display: var(--font-display);
--font-body: var(--font-body);
```

---

## 10. DS / Figma Mapping (Reference Only)

```css
text/display-xl → --text-display-xl
text/display-lg → --text-display-lg
text/display-md → --text-display-md
text/h1 → --text-h1
text/h2 → --text-h2
text/h3 → --text-h3
text/h4 → --text-h4
text/body-lg → --text-body-lg
text/body-md → --text-body-md
text/body-sm → --text-body-sm
text/body-xs → --text-body-xs
text/button → --text-button
text/label → --text-label
text/caption → --text-caption

font/display → --font-display
font/body → --font-body
font-weight/light → --font-light
font-weight/regular → --font-regular
font-weight/medium → --font-medium
font-weight/semibold → --font-semibold
font-weight/bold → --font-bold

line-height/tight → --leading-tight
line-height/snug → --leading-snug
line-height/normal → --leading-normal
line-height/relaxed → --leading-relaxed

letter-spacing/tight → --tracking-tight
letter-spacing/normal → --tracking-normal
letter-spacing/wide → --tracking-wide
```

---

## Rules

- Always use `--typography-*` tokens in components for full token composition
- Use `--text-*` tokens for individual font-size only scenarios
- Use `--font-*` tokens only when combining with custom weight/leading
- Never use raw font sizes or weights in UI
- Use `Noto Sans` consistently across headings, body, and UI
- Dark mode may use adjusted display sizes for hierarchy
- Letter spacing for caps, labels, and large displays only