import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { chakra, Box, CSSReset, Flex, useColorModeValue } from '@chakra-ui/react';
import Navigation from './navigation';

const Wrapper = chakra(Flex, {
  baseStyle: {
    w: ['90%', '85%', '80%'],
    maxW: 1000,
    mx: 'auto',
  },
});

const Layout = (props: PropsWithChildren<unknown>) => {
  const headerBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <>
      <Head>
        <title>Dominik Sumer - Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Hey! My name is Dominik and I'm a Web Developer from Austria." />
        <link rel="icon" type="image/png" sizes="196x196" href="images/favicon-196.png" />
        <link rel="apple-touch-icon" href="images/apple-icon-180.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dominik.sumer.dev/" />
        <meta property="og:title" content="Dominik Sumer - Web Developer" />
        <meta
          property="og:image"
          itemProp="image primaryImageOfPage"
          content="https://dominik.sumer.dev/images/avatar.jpg"
        />
        <script async src="https://cdn.splitbee.io/sb.js" />
      </Head>
      <CSSReset />
      <Box bg={headerBg}>
        <Wrapper py={3} alignItems="center">
          <Navigation />
        </Wrapper>
      </Box>
      <Wrapper pt={8}>{props.children}</Wrapper>
      <Box mt={16} mb={[8, 8, 6]} textAlign="center">
        Website built with{' '}
        <Box
          as="span"
          _before={{
            cursor: 'default',
            content: '"❤️"',
          }}
          _hover={{
            _before: {
              content: '"☕️"',
            },
          }}
        />{' '}
        and nextjs
      </Box>
    </>
  );
};
export default Layout;
