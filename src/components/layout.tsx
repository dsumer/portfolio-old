import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/core';
import GlobalStyle from './global-style';

const Layout = (props: PropsWithChildren<unknown>) => {
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
      <GlobalStyle />
      <Flex w={['90%', '85%', '80%']} maxW={1000} mx="auto" mt={4}>
        {props.children}
      </Flex>
    </>
  );
};
export default Layout;
