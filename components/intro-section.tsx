"use client"
import { useTheme } from "next-themes"

export function IntroSection() {
  const { theme } = useTheme()



  return (
      <section className="mb-16">

          <p className="text-lg text-muted-foreground dark:text-muted-foreground-light leading-relaxed">
            I'm <span className="font-medium text-foreground">Nawaf Ahmed</span>. Right now, I'm building machine learning algorithms with a focus on meta-reinforcement learning.
          </p>

      </section>
  )
}

