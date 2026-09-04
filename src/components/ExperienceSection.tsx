type Experience = {
  company: string
  role: string
  description?: string
}

const experiences: Experience[] = [
  {
    company: 'Georgia Department of Transportation',
    role: 'Software Engineer',
    description:
      'Working on the TPRO application, rewriting the existing legacy system into a modern, scalable, and maintainable application. My work focuses on rebuilding core functionality, improving workflows, performance, and security, while ensuring the new system continues to support transportation project reporting needs.',
  },
  {
    company: 'Texas Tech University',
    role: 'Application Developer',
    description:
      'Worked on developing and improving a survey management application designed to create, manage, and respond to surveys. My work focused on building reusable features, improving system performance and security, and providing a reliable and user-friendly experience for administrators, survey creators, and respondents.',
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="viewport-section bg-hero px-[var(--page-gutter)] pt-0 pb-20 text-ink md:pb-24 lg:pb-40"
    >
      <div className="site-container">
        <div className="w-full">
          <header className="pb-[0.1875rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[0.625rem] font-semibold tracking-[0.22em] text-accent uppercase before:h-px before:w-6 before:bg-accent/50 after:h-px after:w-6 after:bg-accent/50">
            WHERE I&apos;VE BEEN
          </p>
          <h2
            id="experience-title"
            className="mt-2.5 text-[2rem] leading-tight font-bold tracking-[-0.04em] md:text-[2.5rem] lg:text-[3.5rem] min-[1600px]:text-[3.75rem]"
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-px w-12 bg-accent" />
          </header>

          <ol className="relative mt-10 space-y-10 before:absolute before:top-2 before:bottom-2 before:left-0 before:w-px before:bg-line sm:mt-14 sm:space-y-12 lg:mt-16 lg:space-y-14">
          {experiences.map((experience) => (
            <li key={experience.company} className="group relative pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 size-2 -translate-x-1/2 rounded-full border border-accent bg-surface transition-colors duration-200 group-hover:bg-accent"
              />

              <article>
                <h3 className="max-w-4xl text-[1.375rem] leading-tight font-semibold tracking-[-0.03em] text-ink transition-colors duration-200 group-hover:text-accent sm:text-[1.625rem] lg:text-[2rem] min-[1600px]:text-[2.125rem]">
                  {experience.company.toUpperCase()}
                </h3>
                <p className="mt-1.5 text-sm font-medium tracking-wide text-ink/75 sm:text-base">
                  {experience.role}
                </p>

                {experience.description && (
                  <p className="mt-4 max-w-[60rem] text-sm leading-[1.65] text-muted sm:text-base">
                    {experience.description}
                  </p>
                )}
              </article>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
