'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Topics', href: '#topics' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Dates', href: '#dates' },
  { name: 'Organizers', href: '#organizers' },
  { name: 'Committee', href: '#committee' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-zinc-200' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="font-semibold tracking-tight text-zinc-900">
            GP3D
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-zinc-800 transition-transform ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-zinc-800 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-zinc-800 transition-transform ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-zinc-200 bg-white">
          <ul className="px-5 py-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-zinc-600 hover:text-zinc-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
