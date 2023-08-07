import PageTitle from "@/components/PageTitle"
import { PageWrapper } from "@/components/PageWrapper"
import Section from "@/components/Section"

const title = "Hello, I'm Stefan👋"
const subtitle = "I'm a software engineer at Evergreen Energy, and living in Manchester, UK."

export default function Home() {
  return (
    <PageWrapper>
      <PageTitle title={title} subtitle={subtitle} />
      <Section linebreak>
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">About</h2>
        <p className="my-2">
          I spend a lot of my time working on the backend, usually across a range of languages
          such as Python, Typescript and Rust. I also get to dabble in React Native from time
          to time, and write a lot of dev tools in bash.
        </p>
        <p className="my-2">
          Outside of work I spend my time working on open source projects, checking out new
          technologies, and an unholy amount of time configuring Neovim (it's almost perfect, I swear).
        </p>
      </Section>
    </PageWrapper>
  )
}
