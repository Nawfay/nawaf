import { Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Post {
  title: string
  description: string
  pubDate: string
  link: string
}

const API_URL = "https://blog.nawaf.homes"

async function fetchPosts(): Promise<Post[]> {
  try {
    // Replace this URL with your actual API endpoint
    const response = await fetch(`${API_URL}/api/recent`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch posts")
    }

    const posts = await response.json()
    return posts.slice(0, 5) // Ensure max 5 posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return [] // Return empty array if fetch fails
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function PostsSection() {
  const posts = await fetchPosts()

  return (
    <section>
      <h2 className="text-xl font-semibold mb-8 text-foreground">Posts</h2>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Posts Coming Soon</h3>
            <p className="text-muted-foreground text-sm">
              Check back later to see the latest posts.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card border-border"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-base text-card-foreground group-hover:text-primary transition-colors">
                      <a href={API_URL + post.link} className="flex items-center gap-2">
                        {post.title}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.pubDate)}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
