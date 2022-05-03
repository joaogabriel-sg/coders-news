import Head from "next/head";

import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";

const posts = [
  {
    id: "1",
    title: "Fortnite Challenges Have Grown Stale",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    thumbnail:
      "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png",
  },
  {
    id: "2",
    title: "Secret vs. OG: Katowice starts with a highlight",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    thumbnail:
      "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png",
  },
  {
    id: "3",
    title: "MDL Macau: VP, EG and Liquid fight for the throne",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    thumbnail:
      "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png",
  },
  {
    id: "4",
    title: "Fortnite Challenges Have Grown Stale",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    thumbnail:
      "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>News | Coders Blog</title>
        <meta name="description" content="Coders Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-4/5 m-auto bg-white mt-[-42px] rounded-tl-[1.875rem] min-h-[21.5rem] p-6 md:p-14 flex flex-wrap-reverse justify-around">
        <div className="w-[38.75rem] max-h-80">
          <h2 className="font-bold text-[#232323] text-2xl mb-[0.625rem]">
            New Apex Legends Weapon Revealed, Havoc Arrives Today
          </h2>
          <p className="text-lg">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-[35.625rem] max-h-80">
          <img
            src="https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png"
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-[1.25rem]"
          />
        </div>
      </div>

      <div className="max-w-[80%] m-auto flex gap-16 flex-wrap justify-center">
        {posts.map((post) => (
          <PostCard key={`post-${post.id}`} post={post} />
        ))}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title="News">{page}</Layout>;
};
