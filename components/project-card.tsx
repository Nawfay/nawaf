import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  name: string
  description: string
  icon: string
  iconColor: string
  githubUrl: string
  technologies: string[]
}

export function ProjectCard({ name, description, icon, iconColor, githubUrl, technologies }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 ${iconColor} rounded flex items-center justify-center text-white text-xs font-bold`}
            >
              {icon}
            </div>
            <CardTitle className="text-base">{name}</CardTitle>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} GitHub repository`}>
              <Github className="h-3 w-3" />
            </a>
          </Button>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
