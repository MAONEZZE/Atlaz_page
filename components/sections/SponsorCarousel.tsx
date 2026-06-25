import { readdirSync } from "fs";
import { join } from "path";
import { SponsorCarouselClient } from "./SponsorCarouselClient";

// Server Component: discovers brand logos at build time. Drop new files in
// public/marcas and they show up automatically — no manual list.
export function SponsorCarousel() {
  let files: string[] = [];
  try {
    files = readdirSync(join(process.cwd(), "public/marcas")).filter((f) =>
      /\.(png|svg|jpg|jpeg|webp)$/i.test(f)
    );
  } catch {
    files = [];
  }
  return <SponsorCarouselClient brands={files} />;
}
