import { Box, BoxProps } from '@chakra-ui/core';
import { PropsWithChildren } from 'react';
import UnderlinedText from './underlined-text';

interface Props extends BoxProps {
  underlineColor: string;
  emoji?: string;
}

const Header = ({ children, underlineColor, emoji, ...props }: PropsWithChildren<Props>) => (
  <Box as="h1" {...props}>
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    {emoji ? ' ' + emoji : ''}
  </Box>
);
export default Header;
