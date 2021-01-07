import { GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '../../utils/mdx';
import BlogLayout from '../../components/blog-layout';
import MDXComponents from '../../components/mdx';

export default function Blog({ mdxSource, frontMatter }: any) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', params?.slug);

  return { props: post };
};
