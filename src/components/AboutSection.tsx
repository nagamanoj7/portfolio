export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-section viewport-section bg-hero px-[var(--page-gutter)] pt-0 pb-16 text-ink md:pb-20 lg:pb-24">
      <div className="site-container">
        <header className="mx-auto max-w-[64rem] text-left min-[1600px]:max-w-[75rem]">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">Who I am</p>
          <h2 id="about-title" className="mt-2.5 text-[clamp(2rem,2.5vw,2.125rem)] leading-tight font-bold tracking-[-0.04em]">
            ABOUT ME
          </h2>
          <span aria-hidden="true" className="mt-3 block h-px w-12 bg-accent" />
        </header>

        <div className="about-copy mx-auto mt-10 max-w-[64rem] text-left min-[1600px]:max-w-[75rem]">
            <p className="about-motto max-w-[64rem] text-[2rem] leading-[1.3] font-medium tracking-[-0.025em] text-ink sm:text-[2.25rem] md:text-[2.625rem] lg:text-5xl xl:text-[3.125rem] min-[1600px]:max-w-[75rem] min-[1600px]:text-[3.375rem]">
              &quot;A believer that small details make a big difference. For me, development has
              always been about more than writing code.&quot;
            </p>
            <p className="about-paragraph mt-8 max-w-[54rem] text-base leading-[1.65] text-muted md:text-[1.0625rem] lg:text-[1.1875rem] min-[1600px]:max-w-[60rem] min-[1600px]:text-xl">
              I’m a software engineer who enjoys taking an idea, understanding the problem behind
              it, and turning it into something that works well and feels right to use. With a{' '}
              <span className="font-medium text-accent">Master’s in Computer Science</span> from{' '}
              <span className="font-medium text-accent">Texas Tech University</span>, I bring a
              strong foundation in software development and a mindset shaped by curiosity,
              problem-solving, and continuous learning.
            </p>
        </div>
      </div>
    </section>
  )
}
