import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Layout } from "../../components/Layout";

import { getPost, getPosts, Post } from "../../services/content";

interface IPostProps {
  post: Post;
}

type Params = {
  id: string;
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt="Content image"
        height={node.data.target.fields.file.details.height}
        width={node.data.target.fields.file.details.width}
      />
    ),
  },
};

export default function PostPage({ post }: IPostProps) {
  return (
    <Layout title={post.fields.title}>
      <div>
        <Head>
          <title>{post.fields.title} | Coders Blog</title>
          <meta name="description" content="Coders Blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-4/5 m-auto min-h-[21.5rem] p-14">
          <div className="w-full max-w-4xl m-auto">
            <img
              src={post.fields.thumbnail.fields.file.url}
              alt={post.fields.title}
              className="w-full object-cover rounded-[1.875rem]"
            />
          </div>

          <div className="mt-5 whitespace-pre-wrap">
            {documentToReactComponents(post.fields.content, renderOptions)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post) => ({ params: { id: post.sys.id } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<IPostProps> = async ({
  params,
}) => {
  const { id } = params as Params;

  const post = await getPost(id);

  return {
    props: { post },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
