# Design System Orchestrator Skill

> **Purpose**: This file serves as the entry point for any agent seeking design system context. It directs the agent to the appropriate foundation file based on their query.

---

## When to Use This Skill

Use this orchestrator when you need to:
- Build or modify UI components
- Apply consistent styling across the codebase
- Understand design tokens and their usage
- Resolve questions about colors, typography, spacing, radius, or effects
- Ensure component implementation follows the design system

---

## Foundation Files Index

| Foundation File | When to Reference |
|-----------------|-------------------|
| **[color.md](./foundation-token/color.md)** | Questions about colors, brand palette, semantic states, dark mode colors, background/foreground/border tokens |
| **[typography.md](./foundation-token/typography.md)** | Questions about fonts, text sizes, weights, line heights, letter spacing, heading styles, body text |
| **[spacing.md](./foundation-token/spacing.md)** | Questions about margins, padding, gaps, container widths, section spacing, layout spacing |
| **[radius.md](./foundation-token/radius.md)** | Questions about border radius, corner rounding, component shape defaults |
| **[effects.md](./foundation-token/effects.md)** | Questions about shadows, blur, focus rings, elevation, visual effects |

---

## Quick Reference by Topic

### Colors & Themes
- **Brand colors**: `color.md` → Section 1 (Brand Primitives)
- **Semantic states** (success/warning/error/info): `color.md` → Section 2
- **Neutral palette**: `color.md` → Section 3 (Neutral Ramp)
- **Dark mode**: `color.md` → Section 7
- **Background/Surface/Border**: `color.md` → Section 5 (Semantic Tokens)

### Typography
- **Font families**: `typography.md` → Section 1
- **Font sizes**: `typography.md` → Section 2
- **Font weights**: `typography.md` → Section 3
- **Heading styles**: `typography.md` → Section 7 (Heading tokens)
- **Body text**: `typography.md` → Section 7 (Body tokens)
- **UI text** (buttons, labels, captions): `typography.md` → Section 7 (UI tokens)

### Spacing & Layout
- **Component padding**: `spacing.md` → Section 6 (Padding System)
- **Gap between elements**: `spacing.md` → Section 3 (Gap Spacing)
- **Vertical spacing**: `spacing.md` → Section 3 (Stack Spacing)
- **Page sections**: `spacing.md` → Section 7 (Section Spacing)
- **Container widths**: `spacing.md` → Section 4
- **Sidebar width**: `spacing.md` → Section 8

### Visual Effects
- **Shadows**: `effects.md` → Section 1 (Shadows)
- **Focus rings**: `effects.md` → Section 3 (Focus Rings)
- **Blur effects**: `effects.md` → Section 2 (Blur)
- **Elevation levels**: `effects.md` → Sections 1 (inner, surface, overlay)

### Component Defaults
- **Button radius**: `foundation-token/radius.md` → Section 3
- **Input radius**: `foundation-token/radius.md` → Section 3
- **Card padding**: `spacing.md` → Section 6
- **Modal shadows**: `effects.md` → Section 1 (Overlay)

---

## Authority Chain

When token values conflict between files, this order wins:

```
DESIGN.md  →  foundation/foundation-token/*.md  →  components/**/SKILL.md
```

## Rule Priority (within foundation)

When implementation guidance conflicts between foundation files, follow this order:
1. **effects.md** - Visual effects are system-level and should not be overridden
2. **radius.md** - Radius is a system-level variable
3. **color.md** - Semantic color tokens take precedence
4. **typography.md** - Typography tokens for text styling
5. **spacing.md** - Spacing is the most flexible

---

## Implementation Guidelines

### DO
- Use semantic tokens (`--color-bg`, `--text-h1`, `--space-stack-md`) in components
- Reference this orchestrator first when unsure which file to use
- Follow the Rules section in each foundation file
- Use dark mode tokens when working in dark contexts

### DON'T
- Hardcode pixel values for spacing, radius, or shadows
- Override shadow styles at component level
- Mix radius steps within a single component
- Use primitive tokens directly (e.g., `--neutral-500`) instead of semantic tokens

---

## File Structure

```
foundation/
├── skill.md                    ← You are here (Orchestrator)
├── color.md                    ← Colors & themes
├── typography.md               ← Typography system
├── spacing.md                  ← Spacing & layout
└── foundation-token/
    ├── color.md                ← Source of truth (reference)
    ├── typography.md           ← Source of truth (reference)
    ├── spacing.md              ← Source of truth (reference)
    ├── radius.md               ← Border radius
    └── effects.md              ← Shadows, blur, focus rings
```

---

## How to Use

1. **Agent receives a design question** → Start here at `skill.md`
2. **Identify the topic** → Use the Quick Reference or Index above
3. **Navigate to the appropriate file** → Read the relevant section
4. **Apply the tokens** → Use CSS variables defined in the foundation files

---

## Notes

- `foundation-token/` contains the source-of-truth definitions
- Root-level files (`color.md`, `typography.md`, `spacing.md`) are synchronized copies for easy access
- Always check the **Rules** section in each foundation file before implementing
- For Figma/DS mapping references, see the mapping section at the end of each foundation file

---