import { Stack, FormControl, Input, Button, useColorModeValue, Flex, FlexProps, Text, chakra } from '@chakra-ui/react';

const CustomInput = chakra(Input, {
  baseStyle: {
    color: 'gray.800',
    _placeholder: {
      color: 'gray.400',
    },
  },
});

const NewsletterForm = (props: FlexProps) => (
  <Flex w="100%" {...props}>
    <Flex
      w={['100%', '95%', '80%', '70%']}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      m="auto"
      borderRadius="lg"
      p={6}
      direction="column"
    >
      <Text as="h2" fontSize={['xl', '2xl']} textAlign="center" mb={5}>
        Wanna stay up to date? Subscribe to my newsletter.&nbsp;👋
      </Text>
      <Stack direction={['column', 'column', 'row']} as="form" spacing="12px">
        <FormControl>
          <CustomInput variant="solid" id="email" type="email" placeholder="Your Email" aria-label="Your Email" />
        </FormControl>
        <FormControl w={['100%', '100%', '40%']}>
          <Button colorScheme="blue" isLoading={false} type="submit" w="100%">
            Subscribe
          </Button>
        </FormControl>
      </Stack>
      <Text mt={2} textAlign="center" color="gray.500">
        You won&apos;t receive any spam. Only up to 2 emails per month.
      </Text>
    </Flex>
  </Flex>
);
export default NewsletterForm;
