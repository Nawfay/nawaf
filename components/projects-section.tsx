import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"

const projects = [
  {
    name: "Bookclub",
    description: "A full-stack Next.js application for tracking reading progress, managing shared sessions, and posting community notes.",
    icon: "B",
    iconColor: "bg-indigo-500",
    githubUrl: "https://github.com/nawfay/bookclub",
    mediaUrl: "https://imgur.com/rUyxil8",
    technologies: ["Next.js", "TypeScript", "PocketBase", "Go"],
  },  
  {
    name: "dynamicspace",
    description: "A paper on architectural redesign of Serverless Hosting using dynamic volumes to eliminate \"cold starts\"  ",
    icon: "D",
    iconColor: "bg-blue-500",
    githubUrl: "https://dynamicspace.nawaf.homes/",
    mediaUrl: "https://imgur.com/8vxECnj.png", // Add your image URL here
    technologies: ["Go", "Docker", "Rust",],
  },
  {
    name: "didban",
    description: " Go library for downloading and tagging music via Deezer track IDs, built for the Sorn system.",
    icon: "D",
    iconColor: "bg-purple-500",
    githubUrl: "https://github.com/Nawfay/dimmcie",
    mediaUrl: "https://imgur.com/wpZRHKP.png",
    technologies: ["Go", "ffmpeg", "Scraping"],
  },
  {
    name: "seenit",
    description: "A high-performance Sonarr alternative. Automates media discovery, torrent scraping, and library management with a modern web interface.",
    icon: "S",
    iconColor: "bg-gray-800",
    githubUrl: "https://github.com/Nawfay/Seenit",
    mediaUrl: "https://camo.githubusercontent.com/ebdc52025397850a6821628969194c9a7189bccd824e2573a901cb775963f2ad/68747470733a2f2f75732d656173742d312e74697874652e6e65742f75706c6f6164732f6469736869742e74697874652e636f2f323032322d30382d31355f31362d33312d35302e676966",
    technologies: ["Rust", "Scraping", "Torrents","Tailwind CSS"],
  },
    {
    name: "DisLyrics",
    description: "An open-source lyrics aggregating API providing fast responses for your favorite songs.",
    icon: "S",
    iconColor: "bg-gray-800",
    githubUrl: "https://github.com/Nawfay/DisLyrics",
    mediaUrl: "https://imgur.com/Qi3XaYK.png",
    technologies: ["Deno", "Scraping", "Opine","TypeScript"],
  },
  {
    name: "Dimmcie",
    description: "A 'Minecraft Server on Demand' system that dynamically starts your Minecraft server when players join and shuts it down when idle to conserve resources.",
    icon: "D",
    iconColor: "bg-pink-500",
    githubUrl: "https://github.com/Nawfay/dimmcie",
    mediaUrl: "https://imgur.com/W9RcNOZ.png",
    technologies: ["Proxy", "Docker", "Deno"],
  }

  
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
