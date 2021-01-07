import { Text, Flex, Link } from '@chakra-ui/react';
import NewsletterForm from '../components/newsletter-form';

const BlogOverview = () => {
  return (
    <Flex direction="column" w="100%">
      <Text as="h1" fontSize="3xl" textAlign="center" mb={6}>
        Hey, glad you&apos;re stopping by! 🙇‍♂️
      </Text>
      <Text as="h2" fontSize="xl" textAlign="center">
        My blog is going to flourish soon™️. 😅
        <br />
        Until then you can check out my latest blog posts at{' '}
        <Link href="https://trueq.io/blog" isExternal color="blue.500">
          trueq.io/blog
        </Link>
      </Text>
      <NewsletterForm mt={20} />
    </Flex>
  );
};
export default BlogOverview;
