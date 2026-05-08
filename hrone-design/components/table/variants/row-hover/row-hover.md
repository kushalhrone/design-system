---
component: table
variant: row-hover
figma-node-id: 19107:10221
figma-content-hash: 4a8c2e7f1b5d
foundation-ref: ../../../../foundation/foundation-token
---

## Meta
- component: table
- sub-component: TableRow
- variant: row-hover
- status: ready

## Props
| Prop          | Type              | Default  |
|---------------|-------------------|----------|
| showDrag      | boolean           | true     |
| showSeparator | boolean           | true     |
| state         | hover             | —        |
| width         | leading \| equal  | leading  |

## Design Tokens
| Property          | Token Name              | Value               |
|-------------------|-------------------------|---------------------|
| background-overlay| default/default         | #f1f1f1 at 30%      |
| height            | —                       | 56px                |
| padding-x         | dimensions/spacing/4    | 16px                |
| padding-y         | dimensions/spacing/3    | 12px                |
| column-gap        | dimensions/spacing/8    | 32px                |

## Interaction States
| State | Background Overlay          | Opacity   | Other           |
|-------|-----------------------------|-----------|-----------------|
| hover | default/default (#f1f1f1)   | 30%       | same layout     |

## Notes
- The hover state is achieved via an **absolute background overlay layer** (`bg-[var(--default/default)] opacity-30`) that sits beneath all cell content
- All content, separator, and cell tokens remain identical to `row-default`
- token-near-miss: `default/default #f1f1f1` → `--neutral-100` (#F1F5F7). Using raw.
- No transition defined in Figma — implement with `transition-colors duration-150` in code for smooth hover
