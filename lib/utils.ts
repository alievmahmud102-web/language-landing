/**
 * Shared helpers. Extend with clsx + tailwind-merge when class merging grows.
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}
