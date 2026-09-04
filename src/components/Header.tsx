import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const sections = navigationItems.flatMap((item) => {
      const element = document.querySelector<HTMLElement>(item.href)
      return element ? [{ href: item.href, element }] : []
    })

    const updateActiveSection = () => {
      const headerHeight = document.getElementById('site-header')?.offsetHeight ?? 0
      let currentHref = sections[0]?.href ?? '#home'

      sections.forEach(({ href, element }) => {
        if (element.getBoundingClientRect().top <= headerHeight + 1) {
          currentHref = href
        }
      })

      setActiveHref(currentHref)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] bg-hero px-[var(--page-gutter)] py-4 lg:py-5"
    >
      <div className="site-container flex items-start justify-between gap-5 sm:gap-8">
        <a
          href="#home"
          className="group inline-flex flex-col text-[0.625rem] font-semibold tracking-[0.28em] text-ink uppercase sm:text-xs lg:text-sm lg:tracking-[0.32em] xl:text-base"
        >
          Naga Manoj Chittiprolu
          <span className="mt-4 h-px w-7 bg-accent/80 transition-all duration-200 group-hover:w-10" />
        </a>

        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.href === activeHref ? 'page' : undefined}
                  className="group relative block pb-4 text-[0.6875rem] font-medium tracking-[0.08em] text-ink/85 uppercase transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                  {item.href === activeHref && (
                    <span className="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative xl:hidden">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="text-[0.625rem] font-medium tracking-[0.2em] text-muted uppercase transition-colors duration-200 hover:text-ink"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute top-8 right-0 border border-line bg-hero px-6 py-5"
            >
              <ul className="flex min-w-40 flex-col items-end gap-4">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={item.href === activeHref ? 'page' : undefined}
                      className={`text-[0.625rem] font-medium tracking-[0.16em] uppercase transition-colors duration-200 hover:text-ink ${item.href === activeHref ? 'text-accent' : 'text-muted'}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
