import { Box } from '@chakra-ui/react';
import UnderlinedText from '../components/underlined-text';

function NotFoundPage() {
  return (
    <Box as="h2" fontSize="xl">
      <UnderlinedText color="#00e0ff">Oops!</UnderlinedText> The page you&apos;re searching for couldn&apos;t be found.
      😢
    </Box>
  );
}
export default NotFoundPage;
