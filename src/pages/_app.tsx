import { AppProps } from 'next/app';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import Layout from '../components/layout';
import customTheme from '../style/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme} colorModeManager={localStorageManager}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default App;
