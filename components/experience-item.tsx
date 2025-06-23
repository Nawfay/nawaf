import { Calendar, ExternalLink } from "lucide-react"

interface ExperienceItemProps {
  period: string
  title: string
  link?: string
  company: string
  description: string
  isLast?: boolean
}

export function ExperienceItem({ period, title, company, link, description, isLast = false }: ExperienceItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
        {!isLast && <div className="w-px bg-border flex-1 mt-2"></div>}
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-3 w-3" />
          <span>{period}</span>
        </div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        {link  ? (
          <span className="hover:underline mb-1">
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline">
              {company}
            </a>
            <ExternalLink className="inline ml-1 h-3 w-3" />
          </span>
        ) : (
          <p className="mb-1">{company}</p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
