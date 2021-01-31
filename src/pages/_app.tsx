import { AppProps } from 'next/app';
import Router from 'next/router';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import Layout from '../components/layout';
import '../style/global.css';
import customTheme from '../style/theme';

Router.events.on('routeChangeComplete', () => {
  document.body.scrollTop = 0;
});

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
