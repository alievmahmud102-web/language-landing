/**
 * Controls homepage section rendering order.
 * Add/remove/reorder keys to compose different landing variants.
 */
export const layout = [
  "hero",
  "courses",
  "about",
  "teachers",
  "reviews",
  "cta",
  "contact",
] as const;

export type SectionName = (typeof layout)[number];

