import { link } from "fs"
import { ExperienceItem } from "./experience-item"

const experiences = [
  {
    period: "2025 - Present",
    title: "Sponsorship Coordinator",
    company: "uOttaHack",
    link: "https://www.uottahack.ca/",
    description:
      "Connecting leading brands with Canada’s second largest hackathon to help deliver Ottawa’s largest technology event through strategic sponsorships.Connecting leading brands with Canada’s second largest hackathon to help deliver Ottawa’s largest technology event through strategic sponsorships.",
  },
  {
    period: "2023 - 2023",
    title: "Software Developer",
    company: "Platinum Medical Clinic",
    description:
      "Development solutions for public administration using advanced technologies. In my role, I have improved development agility by implementing modern techniques, creating TypeScript libraries for sharing utilities across projects, writing documentation and upgrading outdated projects to new technologies.",
    },
]

export function ExperienceSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </section>
  )
}
