import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const PostsGrid = () => {
  const { toast } = useToast();
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400?${i}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
      toast({
        title: "Post Unliked",
        description: "You've unliked this post",
      });
    } else {
      setLikedPosts([...likedPosts, postId]);
      toast({
        title: "Post Liked",
        description: "You've liked this post",
      });
    }
  };

  const handleComment = (postId: number) => {
    toast({
      title: "Comments",
      description: "Comments feature coming soon!",
    });
  };

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-6 mt-1">
      {posts.map((post) => (
        <div key={post.id} className="aspect-square relative group">
          <img
            src={post.image}
            alt={`Post ${post.id}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div 
              className="flex items-center gap-1 text-white cursor-pointer"
              onClick={() => handleLike(post.id)}
            >
              <Heart className={`w-6 h-6 ${likedPosts.includes(post.id) ? 'fill-white' : ''}`} />
              <span className="font-semibold">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
            </div>
            <div 
              className="flex items-center gap-1 text-white cursor-pointer"
              onClick={() => handleComment(post.id)}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">{post.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};