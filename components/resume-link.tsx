'use client'

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeLink() {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    
    console.log('Resume button clicked!')
    
    // Track the click
    try {
      await fetch('/api/resume', {
        method: 'POST',
      })
      console.log('Notification sent to Discord')
    } catch (error) {
      console.error('Failed to track resume click:', error)
    }
    
    // Redirect to Google Drive link
    window.open('https://drive.google.com/file/d/1QWbLpRu7US4EYxQQ3LEToD73k-7v4STy/view?usp=drive_link', '_blank')
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleClick} aria-label="Resume">
      <FileText className="h-4 w-4" />
    </Button>
  )
}
