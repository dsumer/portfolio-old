import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/core';
import GlobalStyle from './global-style';

const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <GlobalStyle />
      <Flex w={['90%', '85%', '80%']} maxW={1200} mx="auto" mt={4}>
        {props.children}
      </Flex>
    </>
  );
};
export default Layout;
