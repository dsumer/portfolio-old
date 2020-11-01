import Head from 'next/head';
import { PropsWithChildren, useEffect } from 'react';
import { CSSReset, Flex } from '@chakra-ui/core';
import ColorModeSwitcher from './color-mode-switcher';

const Layout = (props: PropsWithChildren<unknown>) => {
  useEffect(() => {
    // we need this in order to reset the background from the color-mode-script to avoid flickering
    (document.body.style.background as any) = null;
  }, []);

  return (
    <>
      <Head>
        <title>Dominik Sumer - Web Developer</title>
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙌</text></svg>"
        />
      </Head>
      <CSSReset />
      <Flex w={['90%', '85%', '80%']} maxW={1000} mx="auto" pt={8}>
        {props.children}
      </Flex>
      <ColorModeSwitcher />
    </>
  );
};
export default Layout;
