'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { isActiveLink } from '../lib/utils'
import Link from './NoScrollLink'

const links: { name: string; href: string }[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  // {
  //   name: 'Portfolio',
  //   href: '/portfolio',
  // },
]

const Navigation = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <nav className="flex">
      {links.map(({ name, href }) => (
        <Link key={name} href={href}>
          <div className="mr-6 sm:mr-8 flex flex-col relative">
            {name}
            {isActiveLink(href, pathname) && (
              <motion.div
                layoutId='navigation-underline'
                className="navigation-underline"
                animate
              />
            )}
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
