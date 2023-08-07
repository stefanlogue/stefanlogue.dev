'use client'
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const PageWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  return (

    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'just' }}
      className={classNames("flex flex-col items-start w-full px-8 sm:px-16 md:px-32 lg:px-52 xl:px-80 2xl:px-96 pt-24 h-full", className)}>
      {children}
    </motion.div>
  )
}
