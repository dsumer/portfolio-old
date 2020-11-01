import { Box, Divider, Flex, Link, List, ListItem, ListIcon } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Header from '../components/header';

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
  <Box as="p" mt={0} mb={6} fontSize="1.35em" lineHeight={1.5} fontWeight="400">
    {props.children}
  </Box>
);

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  return (
    <Flex w="100%" direction="column" align="center">
      <Flex direction={['column', 'row']}>
        <StyledImageBox m="auto" mr={['auto', 8]} mb={[16, 0]}>
          <Image src="/images/profile-placeholder.png" width={220} height={220} />
        </StyledImageBox>
        <Flex maxW={400} justify="center" direction="column">
          <Header underlineColor={ORANGE} emoji="🙌" mt={0}>
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400">
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
      <Flex mt={[6, 12]} w="100%" align="left" direction="column">
        <Header id="projects" underlineColor={PURPLE} emoji="🥐">
          Projects
        </Header>
        <Paragraph>
          Since I&apos;ve started diving into software development I worked on private projects to hone my skills. Those
          projects made me the software developer I am today and I still love to work on private projects to keep on
          track with new technologies.
        </Paragraph>
        <Paragraph>Here you can see a list of my most impactful projects.</Paragraph>
        <Box>
          <Divider />
          Project1
          <Divider />
          Project2
          <Divider />
        </Box>
      </Flex>
      <Flex mt={4} w="100%" align="left" direction="column">
        <Header id="cv" underlineColor={TURQUOISE} emoji="✌️">
          <Box as="span" onMouseEnter={() => setShowCV(true)} onMouseLeave={() => setShowCV(false)}>
            {showCV ? 'Curriculum Vitae' : 'CV'}
          </Box>
        </Header>
        <Paragraph>
          After finishing the technical high school I&apos;ve decided to directly start working in software development
          professionaly. I knew that this was my passion and as I was already programming in my freetime, I really
          wanted to do this on a daily basis and make a living from it.
        </Paragraph>
      </Flex>
      <Flex mt={4} w="100%" align="left" direction="column">
        <Header id="blog" underlineColor={BLUE} emoji="✏️">
          Blog
        </Header>
        <Paragraph>
          Here you can see my latest blog posts. At the moment I am mostly blogging for TrueQ so I&apos;d recommend you
          to also have a look{' '}
          <Link color="blue.400" href="https://trueq.io/blog" isExternal>
            there
          </Link>
          .
        </Paragraph>
      </Flex>
      <Flex mt={4} w="100%" align="left" direction="column">
        <Header id="contact" underlineColor={GREEN} emoji="📨">
          Contact
        </Header>
        <Paragraph>
          Do you have any questions or would you like to work together with me on a project? Don&apos;t hesitate to
          write me a{' '}
          <Link color="blue.400" href="https://twitter.com/messages/compose?recipient_id=798465058061881344" isExternal>
            DM on Twitter
          </Link>{' '}
          or{' '}
          <Link color="blue.400" href="mailto:domi.sumer@gmail.com" isExternal>
            send me a mail
          </Link>
          .
        </Paragraph>
        <Paragraph>
          You can also check out my profiles on{' '}
          <Link href="https://twitter.com/dominiksumer" ml={1} isExternal>
            <Box display="inline-block" as={FaTwitter} color="#1fa1f1" /> Twitter
          </Link>{' '}
          or{' '}
          <Link href="https://github.com/dsumer" ml={1} isExternal>
            <Box display="inline-block" as={FaGithub} color="black" /> GitHub
          </Link>
        </Paragraph>
      </Flex>
      <Box mt={16} mb={2} textAlign="center">
        Website built with <HeartCoffee as="span" /> and nextjs
      </Box>
    </Flex>
  );
}
