import { Box, Flex } from '@chakra-ui/core';
import Image from 'next/image';
import Layout from '../components/layout';

const ORANGE = '#ffa300';

export default function Home() {
  return (
    <Layout>
      <Flex w="100%" direction="column" align="center">
        <Flex direction={['column', 'row']}>
          <Box m="auto" mr={['auto', 4]} mb={[4, 0]}>
            <Image src="/images/profile-placeholder.png" width={200} height={211} />
          </Box>
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
