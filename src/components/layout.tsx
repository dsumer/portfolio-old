import Head from 'next/head';
import { PropsWithChildren, useEffect } from 'react';
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
  useEffect(() => {
    // we need this in order to reset the background from the color-mode-script to avoid flickering
    (document.body.style.background as any) = null;
  }, []);
  const headerBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <>
      <Head>
        <title>Dominik Sumer - Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Hey! My name is Dominik and I'm a Web Developer from Austria." />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙌</text></svg>"
        />
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
