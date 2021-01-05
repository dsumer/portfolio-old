import { ButtonProps, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const ButtonNavVariant = (props: ButtonProps) => ({
  _hover: {
    bg: mode('blackAlpha.200', 'whiteAlpha.200')(props),
    textDecor: 'none',
  },
});

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      'html, body': {
        overflowX: 'hidden',
        w: '100%',
        h: '100%',
      },
    },
  },
  fontSizes: {
    '3xl': '2em',
  },
  lineHeights: {
    shorter: '1.2em',
  },
  components: {
    Button: {
      variants: {
        nav: ButtonNavVariant,
      },
    },
    IconButton: {
      variants: {
        nav: ButtonNavVariant,
      },
    },
  },
});
export default customTheme;
