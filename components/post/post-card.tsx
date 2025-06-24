import { Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PostCardProps {
  title: string
  description: string
  pubDate: string
  link: string
}

export function PostCard({ title, description, pubDate, link }: PostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-base text-card-foreground group-hover:text-primary transition-colors">
              <a href={link} className="flex items-center gap-2">
                {title}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(pubDate)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
