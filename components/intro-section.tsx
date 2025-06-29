"use client"
import { useTheme } from "next-themes"

export function IntroSection() {
  const { theme } = useTheme()



  return (
      <section className="mb-16">

          <p className="text-lg text-muted-foreground dark:text-muted-foreground-light leading-relaxed">
            I'm <span className="font-medium text-foreground">Nawaf Ahmed</span>, a computer engineering student at the University of Ottawa. I'm passionate about <span className="underline text-gray-400">system design</span> and currently part of the sponsorship team at uOttaHack, <span className="underline text-gray-400">the nation's capital hackathon</span> that brings together over 900+ student hackers from across Canada.
          </p>

      </section>
  )
}

