import SocialIcons from './SocialIcons'
import Link from './NoScrollLink'

const Footer = (): JSX.Element => (
  <footer className="w-full flex flex-col items-center">
    <SocialIcons />
    <a
      className="text-sm mb-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
      href="mailto:stefanlogue@icloud.com?Subject=Hello"
    >
      stefan@stefanlogue.dev
    </a>
  </footer>
)

export default Footer
