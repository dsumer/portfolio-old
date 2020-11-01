import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { ColorModeProvider, CSSReset, Flex } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import customTheme from '../style/theme';

const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Dominik Sumer - Web Developer</title>
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙌</text></svg>"
        />
      </Head>
      <ColorModeProvider value="light">
        <CSSReset />
        <Flex w={['90%', '85%', '80%']} maxW={1000} mx="auto" mt={8}>
          {props.children}
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
export default Layout;
