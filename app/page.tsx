import { Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-medium tracking-tight">Nawaf Ahmed</h1>
          <p className="text-muted-foreground leading-relaxed">
            Building machine learning algorithms with a focus on meta-reinforcement learning.
          </p>
          <p className="text-sm text-muted-foreground/80">
            i love boko 🦥
          </p>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/Nawfay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nawaf-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <span className="text-xs text-muted-foreground/60 ml-auto">
            ottawa, toronto
          </span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
