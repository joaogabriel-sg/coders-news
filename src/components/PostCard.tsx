import { useCallback } from "react";
import { useRouter } from "next/router";

import { Post } from "../services/content";

interface IPostCardProps {
  post: Post;
}

export function PostCard({ post }: IPostCardProps) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${post.sys.id}`);
  }, []);

  return (
    <div className="w-[27.75rem]" onClick={handlePostClick}>
      <img
        src={post.fields.thumbnail.fields.file.url}
        alt={post.fields.title}
        className="w-full h-60 object-cover rounded-[1rem] cursor-pointer mb-5 hover:opacity-90"
      />
      <h3 className="font-bold text-2xl mb-[0.625rem]">{post.fields.title}</h3>
      <span className="text-lg">{post.fields.description}</span>
    </div>
  );
}
