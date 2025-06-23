import { Header } from "@/components/header"
import { IntroSection } from "@/components/intro-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { PostsSection } from "@/components/posts-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
        <PostsSection />
      </main>

      <Footer />
    </div>
  )
}
