import { Document } from "@contentful/rich-text-types";
import Contentful, { createClient, Entry } from "contentful";

export type Post = Entry<{
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  thumbnail: Contentful.Asset;
  content: Document;
}>;

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getPosts(): Promise<Entry<Post>[]> {
  const { items } = await client.getEntries<Post>({
    content_type: "post",
  });

  return items;
}

export async function getPost(postId: string): Promise<Entry<Post>> {
  const post = await client.getEntry<Post>(postId);

  return post;
}
