import { link } from "fs"
import { ExperienceItem } from "./experience-item"

const experiences = [
  {
    period: "2025 - Present",
    title: "Sponsorship Coordinator",
    company: "uOttaHack",
    link: "https://www.uottahack.ca/",
    description:
      "Connecting leading brands with Canada’s second largest hackathon to help deliver Ottawa’s largest technology event through strategic sponsorships. Connecting leading brands with Canada’s second largest hackathon to help deliver Ottawa’s largest technology event through strategic sponsorships.",
  },
  {
    period: "2025 - Present",
    title: "Development Lead",
    company: "Connecting Young Minds (CYM)",
    link: "https://www.cymottawa.com/",
    description:
    "Designed and developed CYM's official website along with a robust registration and submission system, built to scale for 600+ users. Focused on creating a seamless user experience while ensuring performance and maintainability across the platform."

  },
  {
    period: "2023 - 2023",
    title: "Software Developer",
    company: "Platinum Medical Clinic",
    description:
      "Developed and implemented digital solutions to improve healthcare accessibility for seniors, including the conversion of over 230 paper forms into efficient e-forms, which reduced doctors' time per patient by 35%. Created custom plugins to accelerate the form creation process by 50% and automated appointment notifications using Python and SQL. Actively contributed to IT infrastructure maintenance and demonstrated strong problem-solving skills in resolving technical challenges.",
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
