import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"

const projects = [
  {
    name: "didban",
    description: "🎶 Go library for downloading and tagging music via Deezer track IDs, built for the Sorn system. ",
    icon: "D",
    iconColor: "bg-orange-500",
    githubUrl: "https://github.com/Nawfay/didban",
    technologies: ["Go", "YouTube", "Deezer"],
  },
  {
    name: "dynamicspace",
    description: "📃 A paper on architectural redesign of Serverless Hosting using dynamic volumes to eliminate \"cold starts\"  ",
    icon: "D",
    iconColor: "bg-blue-500",
    githubUrl: "https://github.com/Nawfay/DynamicSpace",
    technologies: ["Go", "Docker", "Rust",],
  },
  {
    name: "dimmcie",
    description: "⏲️ Dynamically starts your Minecraft server on player activity ",
    icon: "D",
    iconColor: "bg-purple-500",
    githubUrl: "https://github.com/Nawfay/dimmcie",
    technologies: ["Docker", "Gate", "Deno"],
  },
  {
    name: "seenit",
    description: "🔗 Sonarr alternative",
    icon: "S",
    iconColor: "bg-gray-800",
    githubUrl: "https://github.com/Nawfay/Seenit",
    technologies: ["Rust", "Scraping", "Torrents","Tailwind CSS"],
  },
]

export function ProjectsSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Button variant="ghost" className="text-sm text-muted-foreground" asChild>
          <a href="https://github.com/Nawfay?tab=repositories" target="_blank" className="flex items-center gap-1">
            More <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
