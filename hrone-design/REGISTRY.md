# Component Registry

> Flat intent → file path lookup. Load this file to find any component.
> **Do not traverse folders.** Find your intent here, load the exact path returned.
>
> **Load order:** `DESIGN.md` → this file → the path below → `foundation/foundation-token/<topic>.md` if needed

---

## How to Use

1. Find your intent in the table below
2. Load the **Entry Point** path — this is the component orchestrator with all shared tokens + variant index
3. If you need a specific variant, load the **Variant Path** instead
4. For foundation tokens (colors, spacing, radius, effects), see the Foundation section at bottom

---

## Action Components

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Primary CTA button | button/primary | `components/action/buttons/SKILL.md` | `components/action/buttons/primary/primary.md` |
| Secondary / brand-green button | button/secondary | `components/action/buttons/SKILL.md` | `components/action/buttons/secondary/secondary.md` |
| Tertiary / neutral-fill button | button/tertiary | `components/action/buttons/SKILL.md` | `components/action/buttons/tertiary/SKILL.md` |
| Outline / border-only button | button/outline | `components/action/buttons/SKILL.md` | `components/action/buttons/outline/outline.md` |
| Ghost / subtle button | button/ghost | `components/action/buttons/SKILL.md` | `components/action/buttons/ghost/ghost.md` |
| Destructive / danger button | button/danger | `components/action/buttons/SKILL.md` | `components/action/buttons/danger/danger.md` |
| Soft destructive button | button/danger-soft | `components/action/buttons/SKILL.md` | `components/action/buttons/danger-soft/danger-soft.md` |
| Group of buttons horizontal | button-group/horizontal | `components/action/button-group/SKILL.md` | `components/action/button-group/variants/horizontal/SKILL.md` |
| Group of buttons vertical | button-group/vertical | `components/action/button-group/SKILL.md` | `components/action/button-group/variants/vertical/SKILL.md` |
| Close / dismiss button | close-button | `components/action/close-button/SKILL.md` | — |
| Keyboard shortcut display | kbd | `components/action/kbd/SKILL.md` | — |
| Hyperlink / anchor | link | `components/action/link/SKILL.md` | — |
| Toggle button default | toggle-button/default | `components/action/toggle-button/SKILL.md` | `components/action/toggle-button/variants/default/SKILL.md` |
| Toggle button ghost | toggle-button/ghost | `components/action/toggle-button/SKILL.md` | `components/action/toggle-button/variants/ghost/SKILL.md` |
| Toggle button group horizontal | toggle-button-group/horizontal | `components/action/toggle-button-group/SKILL.md` | `components/action/toggle-button-group/variants/detached-horizontal/SKILL.md` |
| Toggle button group vertical | toggle-button-group/vertical | `components/action/toggle-button-group/SKILL.md` | `components/action/toggle-button-group/variants/detached-vertical/SKILL.md` |
| Attached toggle group horizontal | toggle-button-group/attached-h | `components/action/toggle-button-group/SKILL.md` | `components/action/toggle-button-group/variants/attached-horizontal/SKILL.md` |
| Attached toggle group vertical | toggle-button-group/attached-v | `components/action/toggle-button-group/SKILL.md` | `components/action/toggle-button-group/variants/attached-vertical/SKILL.md` |
| Toolbar horizontal | toolbar/horizontal | `components/action/toolbar/SKILL.md` | `components/action/toolbar/variants/horizontal-detached/SKILL.md` |
| Toolbar vertical | toolbar/vertical | `components/action/toolbar/SKILL.md` | `components/action/toolbar/variants/vertical-attached/SKILL.md` |

---

## Feedback Components

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Alert / banner message | alert | `components/feedback/alert/SKILL.md` | `components/feedback/alert/variants/alert/SKILL.md` |
| Status badge / pill | badge | `components/feedback/badge/SKILL.md` | `components/feedback/badge/variants/state-matrix/SKILL.md` |
| Filter chip / tag chip | chip | `components/feedback/chip/SKILL.md` | `components/feedback/chip/variants/state-matrix/SKILL.md` |
| Descriptive info modal | descriptive-modal | `components/feedback/descriptive-modal/SKILL.md` | `components/feedback/descriptive-modal/variants/default/SKILL.md` |
| Drawer / side panel | drawer | `components/feedback/drawer/SKILL.md` | `components/feedback/drawer/variants/state-matrix/SKILL.md` |
| Modal / dialog | modal | `components/feedback/modal/SKILL.md` | `components/feedback/modal/variants/state-matrix/SKILL.md` |
| Progress bar large | progress-bar/lg | `components/feedback/progress-bar/SKILL.md` | `components/feedback/progress-bar/variants/lg/SKILL.md` |
| Progress bar medium | progress-bar/md | `components/feedback/progress-bar/SKILL.md` | `components/feedback/progress-bar/variants/md/SKILL.md` |
| Progress bar small | progress-bar/sm | `components/feedback/progress-bar/SKILL.md` | `components/feedback/progress-bar/variants/sm/SKILL.md` |
| Progress circle large | progress-circle/lg | `components/feedback/progress-circle/SKILL.md` | `components/feedback/progress-circle/variants/lg/SKILL.md` |
| Progress circle medium | progress-circle/md | `components/feedback/progress-circle/SKILL.md` | `components/feedback/progress-circle/variants/md/SKILL.md` |
| Progress circle small | progress-circle/sm | `components/feedback/progress-circle/SKILL.md` | `components/feedback/progress-circle/variants/sm/SKILL.md` |
| Loading spinner (brand) | spinner/accent | `components/feedback/spinner/SKILL.md` | `components/feedback/spinner/variants/accent/SKILL.md` |
| Loading spinner (contextual) | spinner/current | `components/feedback/spinner/SKILL.md` | `components/feedback/spinner/variants/current/SKILL.md` |
| Loading spinner (danger) | spinner/danger | `components/feedback/spinner/SKILL.md` | `components/feedback/spinner/variants/danger/SKILL.md` |
| Loading spinner (success) | spinner/success | `components/feedback/spinner/SKILL.md` | `components/feedback/spinner/variants/success/SKILL.md` |
| Toast notification | toast | `components/feedback/toast/SKILL.md` | `components/feedback/toast/variants/toast/SKILL.md` |

---

## Form Components

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Text input default | text-field/default | `components/form/text-field/SKILL.md` | `components/form/text-field/variants/placeholder/SKILL.md` |
| Text input hover | text-field/hover | `components/form/text-field/SKILL.md` | `components/form/text-field/variants/hover/SKILL.md` |
| Text input focus | text-field/focus | `components/form/text-field/SKILL.md` | `components/form/text-field/variants/focus/SKILL.md` |
| Text input filled | text-field/filled | `components/form/text-field/SKILL.md` | `components/form/text-field/variants/filled/SKILL.md` |
| Text input error | text-field/error | `components/form/text-field/SKILL.md` | `components/form/text-field/variants/error/SKILL.md` |
| Text input disabled | text-field/disabled | `components/form/text-field/SKILL.md` | `components/form/text-field/variants/disabled/SKILL.md` |
| Text area / multiline input | text-area | `components/form/text-area/SKILL.md` | `components/form/text-area/variants/default/SKILL.md` |
| Number / numeric input | number-field | `components/form/number-field/SKILL.md` | `components/form/number-field/variants/default/SKILL.md` |
| Number input error | number-field/error | `components/form/number-field/SKILL.md` | `components/form/number-field/variants/error/SKILL.md` |
| Search input | searchfield | `components/form/searchfield/SKILL.md` | — |
| OTP / pin input | input-otp | `components/form/input-otp/SKILL.md` | `components/form/input-otp/variants/primary/SKILL.md` |
| Input with prefix/suffix | input-affix | `components/form/input-affix/SKILL.md` | `components/form/input-affix/variants/active/SKILL.md` |
| Input group (stacked fields) | input-group | `components/form/input-group/SKILL.md` | `components/form/input-group/variants/primary/SKILL.md` |
| Color input / color picker | color-picker | `components/form/color-picker/SKILL.md` | `components/form/color-picker/variants/empty/SKILL.md` |
| Hex color field | colorfield | `components/form/colorfield/SKILL.md` | — |
| Form field label | label | `components/form/label/SKILL.md` | `components/form/label/variants/default/SKILL.md` |
| Required field label | label/required | `components/form/label/SKILL.md` | `components/form/label/variants/required/SKILL.md` |
| Label with tooltip | label/tooltip | `components/form/label/SKILL.md` | `components/form/label/variants/with-tooltip/SKILL.md` |
| Error / description message | descriptive-error | `components/form/descriptive-error-message/SKILL.md` | `components/form/descriptive-error-message/variants/error-message/SKILL.md` |
| Helper / description text | description-text | `components/form/descriptive-error-message/SKILL.md` | `components/form/descriptive-error-message/variants/description/SKILL.md` |
| Checkbox | checkbox | `components/form/checkbox/SKILL.md` | `components/form/checkbox/variants/primary/SKILL.md` |
| Checkbox group | checkbox-group | `components/form/checkbox-group/SKILL.md` | `components/form/checkbox-group/variants/vertical/SKILL.md` |
| Checkbox group horizontal | checkbox-group/horizontal | `components/form/checkbox-group/SKILL.md` | `components/form/checkbox-group/variants/horizontal/SKILL.md` |
| Checkbox group error | checkbox-group/error | `components/form/checkbox-group/SKILL.md` | `components/form/checkbox-group/variants/error/SKILL.md` |
| Radio button | radio | `components/form/radio/SKILL.md` | `components/form/radio/variants/state-matrix/SKILL.md` |
| Radio group | radio-group | `components/form/radio-group/SKILL.md` | `components/form/radio-group/variants/state-matrix/SKILL.md` |
| Toggle switch | switch | `components/form/switch/SKILL.md` | `components/form/switch/variants/default/SKILL.md` |
| Switch checked | switch/checked | `components/form/switch/SKILL.md` | `components/form/switch/variants/checked/SKILL.md` |
| Switch group | switch-group | `components/form/switch-group/SKILL.md` | `components/form/switch-group/variants/default/SKILL.md` |
| Tag input / tag group | tag-group | `components/form/tag-group/SKILL.md` | `components/form/tag-group/variants/default/SKILL.md` |
| Dropdown select closed | select/closed | `components/select/SKILL.md` | `components/select/variants/closed/SKILL.md` |
| Dropdown select open | select/open | `components/select/SKILL.md` | `components/select/variants/open/SKILL.md` |
| Combobox / searchable select | combobox | `components/form/combobox/SKILL.md` | `components/form/combobox/variants/closed/SKILL.md` |
| Combobox open | combobox/open | `components/form/combobox/SKILL.md` | `components/form/combobox/variants/open/SKILL.md` |
| Autocomplete | autocomplete | `components/form/autocomplete/SKILL.md` | `components/form/autocomplete/variants/closed/SKILL.md` |
| Autocomplete open | autocomplete/open | `components/form/autocomplete/SKILL.md` | `components/form/autocomplete/variants/open/SKILL.md` |
| Date field | date-field | `components/form/date-field/SKILL.md` | `components/form/date-field/variants/state-matrix/SKILL.md` |
| Date picker closed | date-picker/closed | `components/form/date-picker/SKILL.md` | `components/form/date-picker/variants/closed/SKILL.md` |
| Date picker open | date-picker/open | `components/form/date-picker/SKILL.md` | `components/form/date-picker/variants/open/SKILL.md` |
| Date range picker | date-range-picker | `components/form/date-range-picker/SKILL.md` | `components/form/date-range-picker/variants/primary/SKILL.md` |
| Time field | time-field | `components/form/time-field/SKILL.md` | `components/form/time-field/variants/default/SKILL.md` |
| Calendar | calendar | `components/form/calendar/SKILL.md` | `components/form/calendar/variants/present/SKILL.md` |
| Range calendar | range-calendar | `components/form/range-calendar/SKILL.md` | `components/form/range-calendar/variants/empty/SKILL.md` |
| Slider single | slider/single | `components/form/slider/SKILL.md` | `components/form/slider/variants/single/SKILL.md` |
| Slider range | slider/range | `components/form/slider/SKILL.md` | `components/form/slider/variants/range/SKILL.md` |
| Meter / gauge | meter | `components/form/meter/SKILL.md` | `components/form/meter/variants/md/SKILL.md` |
| Link box / clickable area | link-box | `components/form/link-box/SKILL.md` | `components/form/link-box/variants/state-matrix/SKILL.md` |

---

## Layout Components

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Resizable panel layout | resizable | `components/layout/resizable/SKILL.md` | `components/layout/resizable/variants/primary/SKILL.md` |
| Surface / container | surface | `components/layout/surface/SKILL.md` | `components/layout/surface/variants/default/SKILL.md` |
| Surface secondary | surface/secondary | `components/layout/surface/SKILL.md` | `components/layout/surface/variants/secondary/SKILL.md` |
| Surface with image | surface/img | `components/layout/surface/SKILL.md` | `components/layout/surface/variants/img/SKILL.md` |
| Transparent surface | surface/transparent | `components/layout/surface/SKILL.md` | `components/layout/surface/variants/transparent/SKILL.md` |

---

## Navigation Components

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Accordion | accordion | `components/navigation/accordion/SKILL.md` | `components/navigation/accordion/variants/accordion/SKILL.md` |
| Breadcrumbs 2-level | breadcrumbs/l2 | `components/navigation/breadcrumbs/SKILL.md` | `components/navigation/breadcrumbs/variants/level-2/SKILL.md` |
| Breadcrumbs 3-level | breadcrumbs/l3 | `components/navigation/breadcrumbs/SKILL.md` | `components/navigation/breadcrumbs/variants/level-3/SKILL.md` |
| Breadcrumbs 4-level | breadcrumbs/l4 | `components/navigation/breadcrumbs/SKILL.md` | `components/navigation/breadcrumbs/variants/level-4/SKILL.md` |
| Pagination primary | pagination/primary | `components/navigation/pagination/SKILL.md` | `components/navigation/pagination/variants/primary/SKILL.md` |
| Pagination secondary | pagination/secondary | `components/navigation/pagination/SKILL.md` | `components/navigation/pagination/variants/secondary/SKILL.md` |
| Tabs primary fill | tabs/primary-fill | `components/navigation/tabs/SKILL.md` | `components/navigation/tabs/variants/primary-fill/SKILL.md` |
| Tabs primary hug | tabs/primary-hug | `components/navigation/tabs/SKILL.md` | `components/navigation/tabs/variants/primary-hug/SKILL.md` |
| Tabs secondary fill | tabs/secondary-fill | `components/navigation/tabs/SKILL.md` | `components/navigation/tabs/variants/secondary-fill/SKILL.md` |
| Tabs secondary hug | tabs/secondary-hug | `components/navigation/tabs/SKILL.md` | `components/navigation/tabs/variants/secondary-hug/SKILL.md` |
| Single tab element horizontal | tabs-element/h | `components/navigation/tabs-element/SKILL.md` | `components/navigation/tabs-element/variants/primary-horizontal/SKILL.md` |
| Single tab element vertical | tabs-element/v | `components/navigation/tabs-element/SKILL.md` | `components/navigation/tabs-element/variants/primary-vertical/SKILL.md` |

---

## Data Display

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Data table | table | `components/table/SKILL.md` | — |
| Table default row | table/row | `components/table/SKILL.md` | `components/table/variants/row-default/SKILL.md` |
| Table hover row | table/row-hover | `components/table/SKILL.md` | `components/table/variants/row-hover/SKILL.md` |
| Table disabled row | table/row-disabled | `components/table/SKILL.md` | `components/table/variants/row-disabled/SKILL.md` |
| Table header primary | table/header | `components/table/SKILL.md` | `components/table/variants/header-primary/SKILL.md` |
| Table header with sort | table/header-sort | `components/table/SKILL.md` | `components/table/variants/header-cell-sorting/SKILL.md` |
| Table cell with value | table/cell-value | `components/table/SKILL.md` | `components/table/variants/cell-value/SKILL.md` |
| Table cell with actions | table/cell-actions | `components/table/SKILL.md` | `components/table/variants/cell-actions/SKILL.md` |
| Table footer with pagination | table/footer-pagination | `components/table/SKILL.md` | `components/table/variants/footer-pagination/SKILL.md` |
| Card basic | card/basic | `components/card/SKILL.md` | `components/card/variants/basic/SKILL.md` |
| Card full-width | card/full | `components/card/SKILL.md` | `components/card/variants/basic-full/SKILL.md` |
| Card with image | card/img | `components/card/SKILL.md` | `components/card/variants/basic-img/SKILL.md` |
| Card side layout | card/side | `components/card/SKILL.md` | `components/card/variants/side/SKILL.md` |
| Card list item | card/item | `components/card/SKILL.md` | `components/card/variants/item/SKILL.md` |
| Avatar image | avatar/img | `components/avatar/SKILL.md` | `components/avatar/variants/img/SKILL.md` |
| Avatar letter | avatar/letter | `components/avatar/SKILL.md` | `components/avatar/variants/letter/SKILL.md` |
| Avatar icon | avatar/icon | `components/avatar/SKILL.md` | `components/avatar/variants/icon/SKILL.md` |
| Avatar group | avatar/group | `components/avatar/SKILL.md` | `components/avatar/variants/avatar-group/SKILL.md` |
| Dropdown menu | dropdown | `components/dropdown/SKILL.md` | `components/dropdown/variants/container/SKILL.md` |
| Dropdown item default | dropdown/item | `components/dropdown/SKILL.md` | `components/dropdown/variants/item-default/SKILL.md` |
| Dropdown item danger | dropdown/item-danger | `components/dropdown/SKILL.md` | `components/dropdown/variants/item-danger/SKILL.md` |
| Alert dialog / confirm modal | alert-dialog | `components/alert-dialog/SKILL.md` | `components/alert-dialog/variants/desktop/SKILL.md` |
| Alert dialog mobile | alert-dialog/mobile | `components/alert-dialog/SKILL.md` | `components/alert-dialog/variants/mobile/SKILL.md` |

---

## Utilities

| Intent | Component | Entry Point | Variant Path |
|---|---|---|---|
| Tooltip | tooltip | `components/utilities/tooltip/SKILL.md` | `components/utilities/tooltip/variants/default/SKILL.md` |
| Tooltip inverse / dark | tooltip/inverse | `components/utilities/tooltip/SKILL.md` | `components/utilities/tooltip/variants/inverse/SKILL.md` |
| Scroll shadow (blur) | scroll-shadow/blur | `components/utilities/scroll-shadow/SKILL.md` | `components/utilities/scroll-shadow/variants/blur/SKILL.md` |
| Scroll shadow (opacity) | scroll-shadow/opacity | `components/utilities/scroll-shadow/SKILL.md` | `components/utilities/scroll-shadow/variants/opacity/SKILL.md` |
| Skeleton card | skeleton/card | `components/utilities/skeleton/SKILL.md` | `components/utilities/skeleton/variants/card/SKILL.md` |
| Skeleton list | skeleton/list | `components/utilities/skeleton/SKILL.md` | `components/utilities/skeleton/variants/list-items/SKILL.md` |
| Skeleton text | skeleton/text | `components/utilities/skeleton/SKILL.md` | `components/utilities/skeleton/variants/text-content/SKILL.md` |
| Skeleton user profile | skeleton/profile | `components/utilities/skeleton/SKILL.md` | `components/utilities/skeleton/variants/user-profile/SKILL.md` |

---

## Foundation Tokens (load directly — no component needed)

| Topic | File |
|---|---|
| Colors, brand palette, semantic states | `foundation/foundation-token/color.md` |
| Typography scale, font tokens | `foundation/foundation-token/typography.md` |
| Spacing, padding, gap, layout | `foundation/foundation-token/spacing.md` |
| Border radius scale | `foundation/foundation-token/radius.md` |
| Shadows, blur, focus rings | `foundation/foundation-token/effects.md` |
| Foundation orchestrator (all topics) | `foundation/SKILL.md` |

---

## Orchestrator Protocol

```
Step 1 — Load DESIGN.md
Step 2 — Load REGISTRY.md (this file) — find entry point for needed component
Step 3 — Load the Entry Point path — shared tokens + variant index
Step 4 — If specific variant needed, load the Variant Path
Step 5 — Load foundation/foundation-token/<topic>.md for CSS variable definitions
Step 6 — Generate code. Never before Step 5.

Priority: DESIGN.md > foundation > component SKILL. Never invent tokens.
```
