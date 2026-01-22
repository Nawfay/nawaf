"use client"
import { useTheme } from "next-themes"

export function IntroSection() {
  const { theme } = useTheme()



  return (
      <section className="mb-16">

          <p className="text-lg text-muted-foreground dark:text-muted-foreground-light leading-relaxed">
            I'm <span className="font-medium text-foreground">Nawaf Ahmed</span>, a Computer Engineering student at the University of Ottawa focused on <span className="underline text-gray-400">platform engineering and architectural design</span>. I build tools to optimize how code runs in the cloud. Currently, I'm also helping power <span className="underline text-gray-400">uOttaHack, the nation's capital hackathon</span>.
          </p>

          

      </section>
  )
}

