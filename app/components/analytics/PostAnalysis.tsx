'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'
import { format } from 'date-fns'

export default function PostAnalysis({ data }) {
  const sortedPosts = [...data].sort((a, b) => b.totalengagement - a.totalengagement)

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Recent Posts Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedPosts.slice(0, 5).map((post) => (
            <div
              key={post.postid}
              className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">{post.posttype[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium">Post {post.postid}</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(post.postedat), 'MMM d, yyyy')}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {format(new Date(post.postedat), 'h:mm a')}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-pink-500" />
                  <span>{post.likes.toLocaleString()} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-purple-500" />
                  <span>{post.comments.toLocaleString()} comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4 text-blue-500" />
                  <span>{post.shares.toLocaleString()} shares</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bookmark className="h-4 w-4 text-emerald-500" />
                  <span>{post.saves.toLocaleString()} saves</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

