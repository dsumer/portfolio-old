import { observer } from 'mobx-react-lite';
import { Stack, FormControl, Input, Button, useColorModeValue, Flex, FlexProps, Text } from '@chakra-ui/react';
import newsletterStore from '../stores/newsletter-form-store';
import { ChangeEvent, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';

const NewsletterForm = observer((props: FlexProps) => (
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
      <Stack
        direction={['column', 'column', 'row']}
        as="form"
        spacing="12px"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          newsletterStore.submit();
        }}
      >
        <FormControl>
          <Input
            variant="solid"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            color="gray.800"
            _placeholder={{
              color: 'gray.400',
            }}
            id="email"
            type="email"
            required
            placeholder="Your Email"
            aria-label="Your Email"
            value={newsletterStore.email}
            disabled={newsletterStore.state !== 'initial'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => newsletterStore.changeEmail(e.target.value)}
          />
        </FormControl>
        <FormControl w={['100%', '100%', '40%']}>
          <Button
            colorScheme={newsletterStore.state === 'success' ? 'green' : 'blue'}
            isLoading={newsletterStore.state === 'submitting'}
            w="100%"
            type={newsletterStore.state === 'success' ? 'button' : 'submit'}
          >
            {newsletterStore.state === 'success' ? <FaCheck /> : 'Submit'}
          </Button>
        </FormControl>
      </Stack>
      <Text mt={2} textAlign="center" color={newsletterStore.error ? 'red.500' : 'gray.500'}>
        {newsletterStore.error
          ? newsletterStore.errorMessage || 'Oh no an error occured! 😢 Please try again later.'
          : "You won't receive any spam. Only up to 2 emails per month."}
      </Text>
    </Flex>
  </Flex>
));
export default NewsletterForm;
