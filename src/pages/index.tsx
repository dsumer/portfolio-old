import { Badge, Box, Divider, Flex, Link, useColorMode, useColorModeValue } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Header from '../components/header';
import Paragraph from '../components/paragraph';
import TrueQLogo from '../components/trueq-logo';
import ProjectDescription from '../components/project-descrption';

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

const RoundedImageBox = styled(Box)`
  img {
    border-radius: 5px;
  }
`;

export default function Home() {
  const { colorMode } = useColorMode();
  const [showCV, setShowCV] = useState(false);
  const linkColor = useColorModeValue('blue.500', 'blue.400');

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
          <Divider my={10} />
          <ProjectDescription
            linkColor={linkColor}
            url="https://trueq.io"
            logo={<TrueQLogo />}
            status="ongoing"
            badges={
              <>
                <Badge colorScheme="blue">TypeScript</Badge>
                <Badge colorScheme="teal" mx={2}>
                  React
                </Badge>
                <Badge colorScheme="green">node</Badge>
                <Badge ml={2}>nextjs</Badge>
              </>
            }
            summary="TrueQ is a platform for developers, where they can help each other with their daily problems and build up their personal knowledge base."
            content={
              <Paragraph>
                Together with{' '}
                <Link color={linkColor} href="https://twitter.com/AnkiBatsukh" isExternal>
                  Anki
                </Link>{' '}
                I&apos;ve developed it completely from scratch. I&apos;ve also done the DevOps part, managing the
                deployment with Ansible and built up a release process via Gitlab CI. Check out the{' '}
                <Link color={linkColor} href="https://trueq.io/our-journey" isExternal>
                  blog post about our journey
                </Link>{' '}
                for more informations. 😊
              </Paragraph>
            }
          />
          <Divider my={10} />
          <ProjectDescription
            linkColor={linkColor}
            url="http://risingfarms-online.com"
            logo={
              <Box maxW={[300, 300, 250]}>
                <Image src="/images/rfo.png" width={353} height={95} />
              </Box>
            }
            status="on hold"
            badges={
              <>
                <Badge colorScheme="blue">TypeScript</Badge>
                <Badge colorScheme="teal" mx={2}>
                  React
                </Badge>
                <Badge colorScheme="orange">Kotlin</Badge>
                <Badge colorScheme="green" ml={2}>
                  Spring
                </Badge>
              </>
            }
            summary="Rising Farms Online is a multiplayer 2D online game. It is a mix of RPG and farmsimulation and completely playable in the browser."
            content={
              <Paragraph>
                With Rising Farms Online I started my programming journey. It was a dream to develop my own game and
                build up a community for it. I learned so many things with RFO and I am insanely thankful for the
                experience. Sadly I had to put it on hold in 2019 because of a priority shift.
              </Paragraph>
            }
          />
          <Divider my={10} />
          <ProjectDescription
            linkColor={linkColor}
            url="https://lenzcutsquad.com/"
            logo={
              <RoundedImageBox maxW={[300, 300, 250]}>
                <Image src="/images/lenzcutsquad.png" width={500} height={96} />
              </RoundedImageBox>
            }
            status="finished 🎉"
            badges={
              <>
                <Badge colorScheme="purple">PHP</Badge>
                <Badge colorScheme="red" mx={2}>
                  Laravel
                </Badge>
                <Badge colorScheme="yellow">jQuery</Badge>
              </>
            }
            summary="A portfolio website for my barber with possibilities for managing a simple online shop."
            content={
              <Paragraph>
                In the summer of 2019 my barber approached me if I have time for a simple portfolio website of himself.
                I took the chance and made my first footsteps with Laravel. It&apos;s deployed on a private vServer and
                directly fetched via a GitHub repo.
              </Paragraph>
            }
          />
          <Divider my={10} />
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
          professionally. I knew that this was my passion and as I was already programming in my freetime, I really
          wanted to do this on a daily basis and make a living from it.
        </Paragraph>
        <Box>
          <Divider my={10} />
          Untis GmbH
          <Divider my={10} />
          Catalysts GmbH (now known as Cloudflight)
          <Divider my={10} />
          LieberLieber GmbH
          <Divider my={10} />
          HTL Ottakring
          <Divider my={10} />
        </Box>
      </Flex>
      <Flex mt={4} w="100%" align="left" direction="column">
        <Header id="blog" underlineColor={BLUE} emoji="✏️">
          Blog
        </Header>
        <Paragraph>
          In the future I will republish my old blog posts here and probably also create some new ones. At the moment I
          am mostly blogging for TrueQ so I&apos;d recommend you to also have a look{' '}
          <Link color={linkColor} href="https://trueq.io/blog" isExternal>
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
          <Link
            color={linkColor}
            href="https://twitter.com/messages/compose?recipient_id=798465058061881344"
            isExternal
          >
            DM on Twitter
          </Link>{' '}
          or{' '}
          <Link color={linkColor} href="mailto:domi.sumer@gmail.com" isExternal>
            send me a mail
          </Link>
          .
        </Paragraph>
        <Paragraph>
          You can also check out my profiles on{' '}
          <Link href="https://twitter.com/dominiksumer" mx={1} isExternal>
            <Box display="inline-block" as={FaTwitter} mb="4px" color="#1fa1f1" /> Twitter
          </Link>{' '}
          or{' '}
          <Link href="https://github.com/dsumer" ml={1} isExternal>
            <Box display="inline-block" as={FaGithub} mb="4px" color={colorMode === 'dark' ? 'white' : 'black'} />{' '}
            GitHub
          </Link>
        </Paragraph>
      </Flex>
      <Box mt={16} mb={2} textAlign="center">
        Website built with <HeartCoffee as="span" /> and nextjs
      </Box>
    </Flex>
  );
}
