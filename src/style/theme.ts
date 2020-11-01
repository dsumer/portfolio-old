import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fontSizes: {
    ...theme.fontSizes,
    '3xl': '2em',
  },
  lineHeights: {
    ...theme.lineHeights,
    shorter: '1.2em',
  },
};
export default customTheme;
