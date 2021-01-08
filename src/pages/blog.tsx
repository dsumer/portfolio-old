import { Text, Flex, Box, Divider, useColorModeValue } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import { Fragment } from 'react';
import BlogCard from '../components/blog-card';
import NewsletterForm from '../components/newsletter-form';
import { getAllFilesFrontMatter } from '../utils/mdx';

const ORANGE = '#ff940070';
const PURPLE = '#ff007a70';
const TURQUOISE = '#00e0ff70';
const GREEN = '#38ff0070';
const BLUE = '#0060ff70';

const colors = [BLUE, GREEN, PURPLE, ORANGE, TURQUOISE];

const BlogOverview = ({ groups }: { groups: GroupedBlogPosts[] }) => {
  return (
    <Flex direction="column" w="100%">
      <Text as="h1" fontSize="3xl" textAlign="center" mb={16}>
        Hey, glad you&apos;re stopping by! 🙇‍♂️
      </Text>
      <Box>
        {groups.map((g, groupIndex) => (
          <Box key={g.month} m="auto" w={['100%', '100%', '85%']} mb={12}>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              display="inline-block"
              mb={4}
              ml={[0, 2, 4]}
              borderBottom="6px solid"
              borderColor={colors[groupIndex % colors.length]}
            >
              {g.month}
            </Text>
            {g.blogPosts.map((p, index) => (
              <Fragment key={p.slug}>
                {index > 0 && <Divider mx={[0, 2, 4]} my={8} borderColor={useColorModeValue('gray.300', 'gray.600')} />}
                <BlogCard {...p} />
              </Fragment>
            ))}
          </Box>
        ))}
      </Box>
      <NewsletterForm mt={16} />
    </Flex>
  );
};
export default BlogOverview;

interface GroupedBlogPosts {
  month: string;
  blogPosts: any[];
}

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getAllFilesFrontMatter('blog');
  blogPosts.sort((a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime());

  const groupedBlogPosts = blogPosts.reduce((groups, blogPost) => {
    const month = format(parseISO(blogPost.publishedAt), 'MMMM yyyy');

    const group = groups.find((g) => g.month === month);
    if (group) {
      group.blogPosts.push(blogPost);
      return groups;
    } else {
      return [...groups, { month, blogPosts: [blogPost] }];
    }
  }, [] as GroupedBlogPosts[]);

  return { props: { groups: groupedBlogPosts } };
};
