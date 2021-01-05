import { Stack, FormControl, Input, Button, useColorModeValue, Flex, FlexProps, Text } from '@chakra-ui/react';

const NewsletterForm = (props: FlexProps) => (
  <Flex w="100%" {...props}>
    <Flex
      w={['100%', '95%', '80%']}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      m="auto"
      borderRadius="lg"
      p={6}
      direction="column"
    >
      <Text as="h2" fontSize="2xl" textAlign="center" mb={5}>
        Wanna stay up to date? Subscribe to my newsletter.&nbsp;👋
      </Text>
      <Stack direction={['column', 'column', 'row']} as="form" spacing="12px">
        <FormControl>
          <Input
            variant="solid"
            color="gray.800"
            _placeholder={{ color: 'gray.800' }}
            id="name"
            placeholder="First name"
            aria-label="First name"
          />
        </FormControl>
        <FormControl>
          <Input
            variant="solid"
            color="gray.800"
            _placeholder={{ color: 'gray.800' }}
            id="email"
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
          />
        </FormControl>
        <FormControl w={['100%', '100%', '40%']}>
          <Button colorScheme="blue" isLoading={false} type="submit" w="100%">
            Submit
          </Button>
        </FormControl>
      </Stack>
      <Text mt={2} textAlign="center" color="gray.500">
        You won&apos;t receive any spam. Maximum 2 emails per month.
      </Text>
    </Flex>
  </Flex>
);
export default NewsletterForm;
