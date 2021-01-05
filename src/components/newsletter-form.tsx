import { observer } from 'mobx-react-lite';
import { Stack, FormControl, Input, Button, useColorModeValue, Flex, FlexProps, Text, chakra } from '@chakra-ui/react';
import todoStore from '../stores/newsletter-form-store';
import { ChangeEvent, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';

const CustomInput = chakra(Input, {
  baseStyle: {
    borderWidth: '1px',
    color: 'gray.800',
    _placeholder: {
      color: 'gray.400',
    },
  },
});

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
          todoStore.submit();
        }}
      >
        <FormControl>
          <CustomInput
            variant="solid"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            id="email"
            type="email"
            required
            placeholder="Your Email"
            aria-label="Your Email"
            value={todoStore.email}
            disabled={todoStore.state !== 'initial'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => todoStore.changeEmail(e.target.value)}
          />
        </FormControl>
        <FormControl w={['100%', '100%', '40%']}>
          <Button
            colorScheme={todoStore.state === 'success' ? 'green' : 'blue'}
            isLoading={todoStore.state === 'submitting'}
            w="100%"
            type={todoStore.state === 'success' ? 'button' : 'submit'}
          >
            {todoStore.state === 'success' ? <FaCheck /> : 'Submit'}
          </Button>
        </FormControl>
      </Stack>
      <Text mt={2} textAlign="center" color={todoStore.error ? 'red.500' : 'gray.500'}>
        {todoStore.error
          ? todoStore.errorMessage || 'Oh no an error occured! 😢 Please try again later.'
          : "You won't receive any spam. Only up to 2 emails per month."}
      </Text>
    </Flex>
  </Flex>
));
export default NewsletterForm;
