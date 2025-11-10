import Image from 'next/image';

export default function Hero() {
    return (
 <section
      className="
        relative overflow-hidden
        flex flex-col items-start
        min-h-[520px] mb-8
        justify-end lg:justify-center
        md:min-h-[50vh] lg:min-h-[60vh]
      "
    >
      {/* Background image */}
      <Image
        src="/brand/hero-scout.jpg"
        alt="Dynamic action shot of a football player mid-kick on a professional stadium pitch at night."
        fill
        priority
        /* keep it performant on wide screens */
        sizes="(min-width:1280px) 1280px, 100vw"
        /* crop behavior & focal point: keep subject visible on desktop */
        className="object-cover object-[40%_50%] lg:object-[30%_50%]"
      />

      {/* Gradient overlay (a touch stronger near bottom; lighter on desktop top) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 lg:from-black/20 lg:via-transparent lg:to-black/70" />

      {/* Content wrapper with sensible max-width and side padding on wide screens */}
        <div className="max-w-2xl lg:ml-8 xl:ml-16 flex flex-col gap-4 sm:gap-5 relative">
          <h1 className="text-tertiary text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight">
            Discover the Next Generation of Talent
          </h1>

          <h2 className="text-tertiary/90 text-base leading-normal @[480px]:text-lg">
            Our platform combines advanced analytics with global video scouting to
            give you an unfair advantage.
          </h2>

          <button
            className="
              mt-2 inline-flex w-fit cursor-pointer items-center justify-center
              rounded-lg px-5 py-3 text-sm font-bold tracking-[0.015em]
              bg-primary text-secondary hover:opacity-90 transition-opacity
            "
          >
            Sign up
          </button>
        </div>
    </section>
    )
}