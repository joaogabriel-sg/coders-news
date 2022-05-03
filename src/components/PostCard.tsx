import { useCallback } from "react";
import { useRouter } from "next/router";

interface IPostCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}

export function PostCard({ post }: IPostCardProps) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${post.id}`);
  }, []);

  return (
    <div className="w-[27.75rem]" onClick={handlePostClick}>
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-60 object-cover rounded-[1rem] cursor-pointer mb-5"
      />
      <h3 className="font-bold text-2xl mb-[0.625rem]">{post.title}</h3>
      <span className="text-lg">{post.description}</span>
    </div>
  );
}
