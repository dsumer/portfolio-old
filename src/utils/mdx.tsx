import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import { ChakraProvider } from '@chakra-ui/react';

import MDXComponents from '../components/mdx';
import customTheme from '../style/theme';

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type: string, slug?: string | string[]) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    provider: { component: ChakraProvider, props: { theme: customTheme } },
    mdxOptions: {
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

interface FileFrontMatter {
  slug: string;
  [key: string]: any;
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
    const { data, content } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, [] as FileFrontMatter[]);
}
