import BlogSeo from './blog-seo';
import { PropsWithChildren } from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Text } from '@chakra-ui/react';
import { websiteUrl } from '../utils/consts';

export default function BlogLayout({ frontMatter, children }: PropsWithChildren<any>) {
  return (
    <>
      <BlogSeo url={`${websiteUrl}blog/${frontMatter.slug}`} {...frontMatter} />
      <Box as="article" maxW="100%">
        <Box as="header" mb={10}>
          <Text as="h1" fontSize={['2rem', '2.3rem', '2.8rem']}>
            {frontMatter.title}
          </Text>
          <Box fontSize="1.2rem" mt={3}>
            <Text as="span">Published on {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}</Text>
            {' • '}
            <Text as="span">{frontMatter.readingTime.text}</Text>
          </Box>
        </Box>
        <section>{children}</section>
      </Box>
    </>
  );
}
