'use client'

import { usePathname }         from "next/navigation"
import { useState, useEffect } from "react"
// components
import Nav                     from "./Nav"
import Logo                    from './Logo'
import MobileNavigation        from "./MobileNavigation"

import ThemeToggler from "@/components/ThemeToggler"

const Header = () => {

  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    })
    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header
      className={`${header
        ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
        : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}
    >
      <div className={`container mx-auto`}>
        <div className={`flex items-center justify-between`}>
          {/*logo section */}
          <Logo/>
          <div className={`flex items-center gap-x-6`}>
            {/*Nav section */}
            <Nav
              containerStyles={`hidden xl:flex gap-x-8 items-center`}
              linkStyles={`relative hover:text-primary transition-all`}
              underlinedStyles={`absolute left-0 top-full h-[2px] bg-primary w-full`}
            />
            {/*  theme toggler */}
            <ThemeToggler/>
            {/*  Mobile navigation*/}
            <div className={`xl:hidden`}>
              <MobileNavigation/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
