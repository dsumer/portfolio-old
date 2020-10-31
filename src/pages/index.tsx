import { Box, Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import Layout from '../components/layout';

const ORANGE = '#ffa300';

const StyledImageBox = styled(Box)`
  img {
    border-radius: 42% 58% 70% 30% / 70% 60% 40% 30%;
    box-shadow: 0 10px 15px -3px rgb(172 100 0 / 14%), 0 4px 6px -2px rgb(160 86 0 / 10%);
  }
`;

export default function Home() {
  return (
    <Layout>
      <Flex w="100%" direction="column" align="center">
        <Flex direction={['column', 'row']}>
          <StyledImageBox m="auto" mr={['auto', 4]} mb={[4, 0]}>
            <Image src="/images/profile-placeholder.png" width={220} height={220} />
          </StyledImageBox>
          <Flex maxW={400} justify="center" direction="column">
            <Box mb={1} as="h1">
              <Box display="inline-block" position="relative">
                Hey!
                <Box position="absolute" bg={ORANGE} w="100%" h={4} bottom={0} zIndex={-1} />
              </Box>{' '}
              🙌
            </Box>
            <Box mt={0} as="h2" lineHeight={1.5} fontWeight="400">
              My name is{' '}
              <Box as="strong" fontWeight="600">
                Dominik
              </Box>{' '}
              and I&apos;m a{' '}
              <Box as="span" whiteSpace="nowrap">
                Web Developer
              </Box>{' '}
              from{' '}
              <Box as="span" whiteSpace="nowrap">
                Austria 🇦🇹
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
