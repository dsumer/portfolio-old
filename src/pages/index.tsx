import { Box, Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import Header from '../components/header';
import Layout from '../components/layout';

const ORANGE = '#ff9400';
const PURPLE = '#ff007a';
const TURQUOISE = '#00e0ff';
const BLUE = '#0083ff';
const GREEN = '#38ff00';

const StyledImageBox = styled(Box)`
  img {
    border-radius: 42% 58% 70% 30% / 70% 60% 40% 30%;
    box-shadow: 0 10px 15px -3px rgb(172 100 0 / 14%), 0 4px 6px -2px rgb(160 86 0 / 10%);
  }
`;

const HeartCoffee = styled(Box)`
  & {
    cursor: default;

    &:before {
      content: '❤️';
    }
  }
  &:hover {
    &:before {
      content: '☕️';
    }
  }
`;

const CV = styled(Box)`
  & {
    cursor: default;

    &:before {
      content: 'CV';
    }
  }
  &:hover {
    &:before {
      content: 'Curriculum Vitae';
    }
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
            <Header underlineColor={ORANGE} emoji="🙌">
              Hey!
            </Header>
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
        <Flex mt={[4, 5]} w="100%" align="left" direction="column">
          <Header underlineColor={PURPLE} emoji="🥐">
            Projects
          </Header>
          <Box mt={0} fontSize="1.3em" lineHeight={1.5} fontWeight="400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Box>
        </Flex>
        <Flex mt={4} w="100%" align="left" direction="column">
          <Header underlineColor={TURQUOISE} emoji="✌️">
            <CV />
          </Header>
          <Box mt={0} fontSize="1.3em" lineHeight={1.5} fontWeight="400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Box>
        </Flex>
        <Flex mt={4} w="100%" align="left" direction="column">
          <Header underlineColor={BLUE} emoji="✏️">
            Blog
          </Header>
          <Box mt={0} fontSize="1.3em" lineHeight={1.5} fontWeight="400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Box>
        </Flex>
        <Flex mt={4} w="100%" align="left" direction="column">
          <Header underlineColor={GREEN} emoji="📨">
            Contact
          </Header>
          <Box mt={0} fontSize="1.3em" lineHeight={1.5} fontWeight="400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Box>
        </Flex>
        <Box mt={5} textAlign="center">
          Website built with <HeartCoffee as="span" /> and nextjs
        </Box>
      </Flex>
    </Layout>
  );
}
