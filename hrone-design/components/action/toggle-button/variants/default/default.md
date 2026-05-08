---
component: toggle-button
variant: default
figma-node-id: 15241:24193
figma-content-hash: a3f91c2bd0e4
foundation-ref: ../../../../foundation
---

## Meta
- component: toggle-button
- variant: default
- status: ready

## Props
| Prop        | Type                                             | Default          |
|-------------|--------------------------------------------------|------------------|
| variant     | default \| ghost                                 | default          |
| size        | sm \| md \| lg                                   | sm               |
| state       | default \| hover \| focus \| selected \| disabled| default          |
| iconOnly    | boolean                                          | false            |
| label       | string                                           | Call to action   |
| showPrefix  | boolean                                          | true             |
| showSuffix  | boolean                                          | true             |
| prefix      | ReactNode \| null                                | null (icon slot) |
| suffix      | ReactNode \| null                                | null (icon slot) |

## Design Tokens
| Property        | Token Name                    | Value                    |
|-----------------|-------------------------------|--------------------------|
| background      | default/default               | #f1f1f1                  |
| text            | default/default-foreground    | #18181b                  |
| border          | none                          | —                        |
| border-radius   | dimensions/radius/rounded-lg  | 8px                      |
| gap             | dimensions/spacing/2          | 8px                      |
| icon size       | —                             | 16px                     |
| blur            | blur                          | background-blur effect   |

## Interaction States
| State    | Background                        | Text                             | Border         | Cursor   | Other                                                                 |
|----------|-----------------------------------|----------------------------------|----------------|----------|-----------------------------------------------------------------------|
| default  | default/default (#f1f1f1)         | default/default-foreground       | none           | default  | backdrop-blur                                                         |
| hover    | default/default-hover (white)     | default/default-foreground       | none           | pointer  | backdrop-blur                                                         |
| focus    | default/default-hover (white)     | default/default-foreground       | focus-ring     | —        | box-shadow: 0 0 0 2px background/background, 0 0 0 4px focus-ring (#02563d) |
| selected | accent/accent-soft rgba(2,86,61,0.15) | accent/accent-soft-foreground (#02563d) | none  | pointer  | backdrop-blur; renders as `<button>` not `<div>`                      |
| disabled | default/default (#f1f1f1)         | default/default-foreground       | none           | —        | backdrop-blur; content (icon + label) opacity: disabled-opacity (0.5) |

## Size Variants
| Size | Height                        | Padding X                    | Font Size                      | Line Height                       | Radius (text)                  | Radius (icon-only)               |
|------|-------------------------------|------------------------------|--------------------------------|-----------------------------------|--------------------------------|----------------------------------|
| sm   | dimensions/spacing/8 (32px)   | dimensions/spacing/3 (12px)  | dimensions/font/text-sm (14px) | dimensions/leading/text-sm (20px) | dimensions/radius/rounded-lg (8px) | dimensions/radius/rounded-2xl (16px) |
| md   | dimensions/spacing/9 (36px)   | dimensions/spacing/4 (16px)  | dimensions/font/text-sm (14px) | dimensions/leading/text-sm (20px) | dimensions/radius/rounded-lg (8px) | dimensions/radius/rounded-3xl (24px) |
| lg   | dimensions/spacing/10 (40px)  | dimensions/spacing/4 (16px)  | dimensions/font/text-base (16px)| dimensions/leading/text-base (24px)| dimensions/radius/rounded-lg (8px) | dimensions/radius/rounded-3xl (24px) |

## Notes
- `selected` state renders as `<button>` element; all other states use `<div>`
- `iconOnly=true` uses pill/circle radius, not rounded-lg
- `prefix` and `suffix` slots each render a 16×16px icon container; both visible by default
- `disabled` applies opacity to children only, not the container
- Font family token: `font` (resolves to Noto Sans, weight 500, variation settings `'CTGR' 0, 'wdth' 100`)
- `focus-ring` color: #02563d (brand accent)
- `background/background` (focus ring offset): #F8FAFB
