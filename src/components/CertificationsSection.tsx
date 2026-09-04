type Certification = {
  name: string
  issuer: string
  supportingText?: string
}

const certifications: Certification[] = [
  { name: 'Oracle Certified Java SE 8 Programmer', issuer: 'Oracle' },
  {
    name: 'Advanced RPA Professional',
    issuer: 'Automation Anywhere',
    supportingText: 'Automation Anywhere Certified',
  },
  {
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC2',
  },
  { name: 'ServiceNow Certified System Administrator', issuer: 'ServiceNow' },
]

function CertificationIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" className="shrink-0 min-[1600px]:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 13.5 17 21l-5-3-5 3 1.5-7.5M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 8 1.25 1.25L14 6.5" />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" className="shrink-0 min-[1600px]:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.25 2.25L15.5 9.5" />
    </svg>
  )
}

function CertificationPanel({ certification }: { certification: Certification }) {
  return (
    <article className="group grid min-h-32 grid-cols-[2.5rem_minmax(0,1fr)_1.25rem] items-center gap-4 rounded-lg border border-line bg-surface/25 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface/35 min-[1600px]:min-h-[11rem] min-[1600px]:grid-cols-[3rem_minmax(0,1fr)_1.5rem] min-[1600px]:gap-5 min-[1600px]:p-6">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-hero/50 text-accent/70 transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent min-[1600px]:size-12">
        <CertificationIcon />
      </span>

      <div className="min-w-0">
        <h3 className="text-base leading-snug font-semibold tracking-[-0.01em] text-ink sm:text-lg min-[1600px]:text-[1.3125rem]">{certification.name}</h3>
        {certification.supportingText && <p className="mt-1.5 text-xs text-muted sm:text-[0.8125rem]">{certification.supportingText}</p>}
        <p className="mt-1 text-[0.8125rem] font-medium text-accent sm:text-sm min-[1600px]:text-base">{certification.issuer}</p>
      </div>

      <span className="text-accent/65 transition-colors duration-200 group-hover:text-accent">
        <VerifiedIcon />
      </span>
    </article>
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="viewport-section bg-hero px-[var(--page-gutter)] pt-0 pb-12 text-ink md:pb-16 lg:pb-20">
      <div className="site-container">
        <header className="text-center">
          <p className="flex items-center justify-center gap-3 text-[0.625rem] font-semibold tracking-[0.22em] text-accent uppercase before:h-px before:w-6 before:bg-accent/50 after:h-px after:w-6 after:bg-accent/50">My credentials</p>
          <h2 id="certifications-title" className="mt-2.5 text-[2rem] leading-tight font-bold tracking-[-0.04em] md:text-[2.5rem] lg:text-[3.5rem] min-[1600px]:text-[3.75rem]">
            CERTIFICATIONS
          </h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-px w-12 bg-accent" />
        </header>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-9 md:grid-cols-2 md:gap-6 min-[1600px]:mx-auto min-[1600px]:mt-8 min-[1600px]:w-[95%] min-[1600px]:gap-7">
          {certifications.map((certification) => <CertificationPanel key={certification.name} certification={certification} />)}
        </div>
      </div>
    </section>
  )
}
