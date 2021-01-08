import { Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
const ConfirmSubscription = () => (
  <>
    <NextSeo nofollow noindex />
    <Text as="h1" textAlign="center" w="100%" fontSize="2xl">
      Your email address was confirmed successfully 🙌
    </Text>
  </>
);
export default ConfirmSubscription;
