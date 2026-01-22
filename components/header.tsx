import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <h1 className="text-lg font-medium">nawaf.homes</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/nawaf-ahmed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Nawfay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
