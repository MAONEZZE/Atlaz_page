"use client";

export function SponsorCarouselClient({ brands }: { brands: string[] }) {
  if (!brands.length) return null;

  // duplicate the list so the -50% slide loops with no visible seam
  const loop = [...brands, ...brands];

  return (
    <section className="relative min-h-[180px] px-4 overflow-hidden flex items-center">
      {/* Band background — same deep purple stripe as the impact phrases */}
      <div className="absolute inset-0 bg-[#6740A9]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B0067] via-[#6740A9]/80 to-[#3B0067]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      {/* Carousel — pauses on hover */}
      <div className="group relative w-full overflow-hidden">
        {/* edge fades to hide the loop entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#3B0067] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#3B0067] to-transparent" />

        <div className="flex w-max items-center animate-marquee">
          {loop.map((file, i) => (
            <div key={i} className="flex-shrink-0 px-14 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/marcas/${file}`}
                alt=""
                className="h-20 w-60 object-contain [filter:grayscale(100%)_opacity(0.5)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
