import Head from 'next/head';
import { PropsWithChildren, useEffect } from 'react';
import { CSSReset, Flex } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Hey! My name is Dominik and I'm a Web Developer from Austria." />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙌</text></svg>"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dominik.sumer.dev/" />
        <meta property="og:site_name" content="Dominik Sumer - Web Developer" />
        <meta
          property="og:image"
          itemProp="image primaryImageOfPage"
          content="https://dominik.sumer.dev/images/profile-placeholder.png"
        />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          html,
          body {
            overflow-x: hidden;
          }
        `}
      />
      <Flex w={['90%', '85%', '80%']} maxW={1000} mx="auto" pt={8}>
        {props.children}
      </Flex>
      <ColorModeSwitcher />
    </>
  );
};
export default Layout;
