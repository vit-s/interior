'use client'

import Link from "next/link"

// hooks
import { motion }      from "framer-motion"
import { usePathname } from "next/navigation"

const links = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/gallery',
    name: 'gallery',
  },
  {
    path: '/projects',
    name: 'projects',
  },
  {
    path: '/contact',
    name: 'contact',
  },
]
const Nav = ({
  containerStyles,
  linkStyles,
  underlinedStyles,
}) => {

  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {
        links.map((
          link,
          index,
        ) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`uppercase ${linkStyles}`}
            >
              {link.path === path && (<motion.span
                initial={{ y: '-100' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlinedStyles}`}
              />)}
              {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Nav
