export function Hero() {
  return (
    <div id="home" className="viewport-section relative bg-hero">
      <section
        aria-labelledby="hero-title"
        className="hero-layout site-container relative min-h-svh overflow-hidden px-[var(--page-gutter)] pt-[var(--header-height)] pb-24 lg:pb-20 min-[1600px]:grid min-[1600px]:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] min-[1600px]:gap-x-12"
      >
        <div className="relative z-20 w-full">
          <p className="text-xs font-medium tracking-[0.26em] text-accent uppercase sm:text-sm">
            Hello.
          </p>

          <p className="mt-6 text-3xl leading-none font-semibold tracking-[-0.035em] text-ink sm:text-4xl lg:mt-7 lg:text-[2.65rem]">
            I'M
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2.6rem,4.1vw,4.1rem)] leading-[0.88] font-bold tracking-[-0.055em] text-ink lg:whitespace-nowrap"
          >
            NAGA MANOJ CHITTIPROLU
          </h1>

          <span aria-hidden="true" className="mt-9 block h-px w-12 bg-accent sm:w-16" />
          <p className="mt-8 text-[0.825rem] font-medium tracking-[0.34em] text-accent uppercase sm:text-[0.9625rem]">
            Software Engineer
          </p>

          <p className="mt-7 max-w-[34rem] text-sm leading-7 text-ink/75 italic sm:text-base sm:leading-8 lg:max-w-none">
            <span className="hero-description-line lg:whitespace-nowrap">
              I build scalable, efficient, and user-focused web applications that solve real problems and deliver meaningful results.
            </span>
            <span className="block">
              I care about the details—from how an application works to how it feels to use.
            </span>
          </p>
        </div>

        <div className="hero-laptop relative mt-8 flex items-center justify-center lg:absolute lg:right-[4%] lg:bottom-[-2vh] lg:mt-0 lg:w-[50vw] lg:max-w-[48rem] lg:justify-end min-[1600px]:static min-[1600px]:mb-10 min-[1600px]:w-full min-[1600px]:max-w-[36rem] min-[1600px]:self-end min-[1600px]:justify-self-start">
          <img
            src="/images/laptop-hero-transparent.png"
            alt="A half-closed dark graphite laptop"
            width="1536"
            height="1024"
            className="relative z-10 h-auto w-full max-w-2xl object-contain lg:max-w-none"
          />
        </div>

        <div className="absolute bottom-[2.875rem] left-[var(--page-gutter)] z-10 flex items-end gap-5 text-ink/80 sm:bottom-[3.625rem]">
          <div className="flex flex-col items-center">
            <span className="h-12 w-px bg-ink/70" />
            <span className="mt-2 size-1.5 rounded-full bg-accent" />
          </div>
          <span className="pb-0.5 text-[0.5625rem] font-medium tracking-[0.28em] uppercase">
            Scroll to explore
          </span>
        </div>
      </section>
    </div>
  )
}
