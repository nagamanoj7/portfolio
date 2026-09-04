import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { premiumEase } from '../motion'

type Theme = 'dark' | 'light'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const isLight = theme === 'light'
  const label = `Switch to ${isLight ? 'dark' : 'light'} mode`

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={label}
      title={label}
      onClick={onToggle}
      className="relative h-5 w-9 shrink-0 rounded-full border border-line bg-surface/70 text-hero transition-colors duration-200 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className={`absolute top-0.5 left-0.5 flex size-3.5 items-center justify-center rounded-full bg-accent transition-transform duration-200 ${isLight ? 'translate-x-4' : 'translate-x-0'}`}
      >
        {isLight ? (
          <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="2.5" />
            <path strokeLinecap="round" d="M8 1.5v1M8 12.5v2M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M12.6 3.4l-.7.7M4.1 11.9l-.7.7" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.8 10.2A5 5 0 0 1 5.8 3.3a5 5 0 1 0 7 6.9Z" />
          </svg>
        )}
      </span>
    </button>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    root.classList.add('theme-transition')
    root.dataset.theme = nextTheme
    try {
      localStorage.setItem('portfolio-theme', nextTheme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
    setTheme(nextTheme)

    window.setTimeout(() => root.classList.remove('theme-transition'), 250)
  }

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
                    <motion.span
                      layoutId="active-navigation-dot"
                      transition={{ duration: 0.2, ease: premiumEase }}
                      className="absolute bottom-0 left-1/2 -ml-0.5 size-1 rounded-full bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
            <li className="flex items-center pb-4">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </li>
          </ul>
        </nav>

        <div className="relative flex items-center gap-2 xl:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
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
