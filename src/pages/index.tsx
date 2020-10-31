import { Box, Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';
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

const Paragraph = (props: PropsWithChildren<unknown>) => (
  <Box as="p" mt={0} fontSize="1.3em" lineHeight={1.5} fontWeight="400">
    {props.children}
  </Box>
);

export default function Home() {
  const [showCV, setShowCV] = useState(false);

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
          <Paragraph>
            Since I&apos;ve started diving into software development I worked on private projects to hone my skills. It
            didn&apos;t matter if it was a tool which helped me, like a driving licence trainer, or a fully fletched
            browsergame. I just developed stuff I had fun with. If someone asks me what I can recommend in order to get
            started with software development I would suggest to start with a private project, something which sparks
            your inner passion. Those projects made me the software developer I am today.
          </Paragraph>
          <Paragraph>Here you can see a list of the bigger projects I&apos;ve done in my free time.</Paragraph>
        </Flex>
        <Flex mt={4} w="100%" align="left" direction="column">
          <Header underlineColor={TURQUOISE} emoji="✌️">
            <Box as="span" onMouseEnter={() => setShowCV(true)} onMouseLeave={() => setShowCV(false)}>
              {showCV ? 'Curriculum Vitae' : 'CV'}
            </Box>
          </Header>
          <Paragraph>
            After finishing the technical high school I&apos;ve decided to directly start working in software
            development professionaly. I knew that this was my passion and as I was already programming in my freetime I
            really wanted to do this on a daily basis and make a living from it.
          </Paragraph>
        </Flex>
        <Flex mt={4} w="100%" align="left" direction="column">
          <Header underlineColor={BLUE} emoji="✏️">
            Blog
          </Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Paragraph>
        </Flex>
        <Flex mt={4} w="100%" align="left" direction="column">
          <Header underlineColor={GREEN} emoji="📨">
            Contact
          </Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Paragraph>
        </Flex>
        <Box mt={5} mb={2} textAlign="center">
          Website built with <HeartCoffee as="span" /> and nextjs
        </Box>
      </Flex>
    </Layout>
  );
}
