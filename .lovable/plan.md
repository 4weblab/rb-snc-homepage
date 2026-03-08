

## Plan: Improve Hero Section Typography

### Changes to `src/components/HeroSection.tsx`

Update font weights and families to match the requested specs:

1. **H1** — Already `font-heading font-bold` (Space Grotesk 700). No change needed.

2. **Subtitle (p tag, line 23)** — Change from `text-lg md:text-xl` body font to `font-heading font-semibold` (Space Grotesk 600). Adjust size to `text-xl md:text-2xl` for better visual impact and improve opacity from `/80` to `/85` for better legibility.

3. **CTA Button** — Add `font-body font-semibold` (Inter 600) to the Button. Currently inherits default `font-medium` from the button variant — update to `font-semibold`.

These are small class changes on 2 elements within `HeroSection.tsx`. No structural or layout changes.

