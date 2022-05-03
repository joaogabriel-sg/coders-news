import Head from "next/head";
import { Layout } from "../../components/Layout";

const post = {
  id: "1",
  title: "Fortnite Challenges Have Grown Stale",
  description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  thumbnail:
    "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png",
};

export default function Post() {
  return (
    <div>
      <Head>
        <title>{post.title} | Coders Blog</title>
        <meta name="description" content="Coders Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-4/5 m-auto min-h-[21.5rem] p-14">
        <div className="w-full">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-[26rem] object-cover rounded-[1.875rem]"
          />
        </div>
      </div>
    </div>
  );
}

Post.getLayout = function getLayout(page) {
  return <Layout title={post.title}>{page}</Layout>;
};
