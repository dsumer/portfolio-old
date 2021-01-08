import NextLink from 'next/link';
import { format, parseISO } from 'date-fns';
import { Link, Box, Text } from '@chakra-ui/react';

interface Props {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: any;
}
const BlogCard = ({ slug, title, summary, publishedAt, readingTime }: Props) => (
  <Box as="article" w="100%" pos="relative" _hover={{ bg: 'blackAlpha.100', borderRadius: '10px' }}>
    <Box pointerEvents="none" p={[0, 2, 4]} borderRadius="5px">
      <Text as="h2" fontSize="1.8rem">
        {title}
      </Text>
      <Box fontSize="md" color="gray.500" mb={3}>
        <Text as="span">{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</Text>
        <Box as="span" mx={2}>
          •
        </Box>
        <Text as="span">{readingTime.text}</Text>
      </Box>
      <Text fontSize="lg">{summary}</Text>
    </Box>
    <NextLink href={`/blog/${slug}`} passHref>
      <Link _hover={undefined} pos="absolute" left={0} top={0} w="100%" h="100%" />
    </NextLink>
  </Box>
);

export default BlogCard;
