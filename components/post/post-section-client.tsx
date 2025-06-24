"use client"

import { useState, useEffect } from "react"
import { PostCard } from "@/components/post/post-card"
import { Loader2 } from "lucide-react"

interface Post {
  title: string
  description: string
  pubDate: string
  link: string
}

export function PostsSectionClient() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        // Replace this URL with your actual API endpoint
        const response = await fetch("/api/posts")

        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }

        const data = await response.json()
        setPosts(data.slice(0, 5)) // Ensure max 5 posts
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-8 text-foreground">Posts</h2>
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Loading posts...</span>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-8 text-foreground">Posts</h2>
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Unable to Load Posts</h3>
            <p className="text-muted-foreground text-sm">
              There was an error loading the posts. Please try again later.
            </p>
          </div>
        </div>
      </section>
    )
  }

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
              I'm working on some exciting content. Check back soon for new posts about web development, technology, and
              my latest projects.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      )}
    </section>
  )
}
