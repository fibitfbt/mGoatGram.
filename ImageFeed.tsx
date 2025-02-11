
import { useState } from "react";
import { Button } from "./ui/button";
import { Heart, MessageCircle } from "lucide-react";

interface Post {
  id: number;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

const mockPosts: Post[] = [
  {
    id: 1,
    imageUrl: "/placeholder.svg",
    caption: "Beautiful sunset at the beach",
    likes: 124,
    comments: 8,
  },
  {
    id: 2,
    imageUrl: "/placeholder.svg",
    caption: "City lights",
    likes: 89,
    comments: 5,
  },
];

export const ImageFeed = () => {
  const [posts] = useState<Post[]>(mockPosts);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg border shadow-sm overflow-hidden animate-fade-in"
        >
          <img
            src={post.imageUrl}
            alt={post.caption}
            className="w-full h-96 object-cover"
          />
          <div className="p-4 space-y-4">
            <p className="text-sm text-gray-600">{post.caption}</p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="space-x-2">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
