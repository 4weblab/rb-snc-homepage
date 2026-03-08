

## Plan: Update Service Card Links

All 5 service cards in `src/components/ServicesSection.tsx` currently have individual `href` values (e.g., `/servizi/bonifica-amianto`). Update all `href` properties in the `services` array to point to `/servizi`.

### Changes

**`src/components/ServicesSection.tsx`** — Change all 5 `href` values in the `services` array from their current paths to `"/servizi"`.

