import { Global, css } from '@emotion/core';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;

          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
          -webkit-font-smoothing: antialiased;
          text-size-adjust: 100%;
          text-rendering: optimizelegibility;
        }
      `}
    />
  );
};

export default GlobalStyle;
