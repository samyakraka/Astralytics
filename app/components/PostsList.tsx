import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'

const posts = [
  {
    id: 1,
    likes: 988,
    comments: 33,
    shares: 22,
    saves: 4,
    timeAgo: '1 day ago'
  },
  {
    id: 2,
    likes: 950,
    comments: 48,
    shares: 37,
    saves: 24,
    timeAgo: '1 day ago'
  }
]

export default function PostsList() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
              <div className="font-medium">Your Post</div>
            </div>
            <div className="text-gray-400">{post.timeAgo}</div>
          </div>
          <div className="flex items-center justify-between text-gray-400">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>{post.likes} likes</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments} comments</span>
            </div>
            <div className="flex items-center space-x-2">
              <Share2 className="h-5 w-5" />
              <span>{post.shares} shares</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bookmark className="h-5 w-5" />
              <span>{post.saves} saves</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

