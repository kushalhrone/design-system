# Modal — Variants Index

> Index of all variants for this component.
> Shared tokens and rules: [../SKILL.md](../SKILL.md)

---

## Variants

| Variant | Spec | HTML | Size | Radius | Purpose |
|---|---|---|---|---|---|
| xs | [xs/xs.md](./xs/xs.md) | [xs.html](./xs/xs.html) | 320x248px | 16px | Compact desktop, simple confirmations |
| sm | [sm/sm.md](./sm/sm.md) | [sm.html](./sm/sm.html) | 480x228px | 16px | Compact desktop, short dialogs |
| md | [md/md.md](./md/md.md) | [md.html](./md/md.html) | 640x208px | 16px | Standard desktop, default choice |
| lg | [lg/lg.md](./lg/lg.md) | [lg.html](./lg/lg.html) | 800x208px | 24px | Large desktop, complex content |
| cover | [cover/cover.md](./cover/cover.md) | [cover.html](./cover/cover.html) | 640x308px | 24px | Centered cover layout, rich header |
| full | [full/full.md](./full/full.md) | [full.html](./full/full.html) | 640x246px | 0px | Full-bleed surface, no radius |
| mobile | [mobile/mobile.md](./mobile/mobile.md) | [mobile.html](./mobile/mobile.html) | 393x324px | 24px | Mobile sheet, stacked buttons |
| mobile-cover | [mobile-cover/mobile-cover.md](./mobile-cover/mobile-cover.md) | [mobile-cover.html](./mobile-cover/mobile-cover.html) | 393x324px | 24px | Mobile cover layout |

---

## Rules

- All variants inherit shared tokens from `../SKILL.md`
- Load variant SKILL before variant spec for quick-ref
- Never override shared structure tokens at variant level
- xs/sm/md use 16px radius; lg/cover/mobile/mobile-cover use 24px; full uses 0px
- Mobile variants use 16px padding (vs 24px for desktop)
- Old `state-matrix/` folder superseded by this structure — do not use
