import { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/core';
import GlobalStyle from './global-style';

const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <GlobalStyle />
      <Flex w={['95%', '85%', '80%']} maxW={1200} mx="auto" mt={2}>
        {props.children}
      </Flex>
    </>
  );
};
export default Layout;
