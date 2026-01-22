import { Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  name: string
  description: string
  icon: string
  iconColor: string
  githubUrl: string
  mediaUrl?: string
  technologies: string[]
}

export function ProjectCard({ name, description, icon, iconColor, githubUrl, mediaUrl, technologies }: ProjectCardProps) {
  // Check if the media URL is a video (Imgur video or other video formats)
  const isVideo = mediaUrl && (
    mediaUrl.includes('imgur.com') && !mediaUrl.includes('.png') && !mediaUrl.includes('.jpg') && !mediaUrl.includes('.jpeg') ||
    mediaUrl.includes('.mp4') || 
    mediaUrl.includes('.webm') || 
    mediaUrl.includes('.mov')
  );

  // Convert Imgur link to direct video URL if needed
  const getMediaUrl = (url: string) => {
    if (url.includes('imgur.com/') && !url.includes('.mp4')) {
      const id = url.split('/').pop();
      return `https://i.imgur.com/${id}.mp4`;
    }
    return url;
  };

  return (
    <Card className="group hover:shadow-md transition-shadow overflow-hidden">
      {mediaUrl && (
        <div className="aspect-[4/3] w-full overflow-hidden max-h-40">
          {isVideo ? (
            <video 
              src={getMediaUrl(mediaUrl)}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ outline: 'none' }}
            />
          ) : (
            <img 
              src={mediaUrl} 
              alt={`${name} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
      )}
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
