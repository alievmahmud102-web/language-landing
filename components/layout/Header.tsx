import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

/**
 * Top bar placeholder — replace with nav, logo, and CTA in a later milestone.
 */
export function Header() {
  return (
    <header className="border-border/80 bg-background/96 supports-[backdrop-filter]:bg-background/88 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <span className="text-foreground text-base font-semibold tracking-tight">
          {siteConfig.name}
        </span>
        <span className="text-muted text-sm">{siteConfig.labels.headerPlaceholder}</span>
      </Container>
    </header>
  );
}
