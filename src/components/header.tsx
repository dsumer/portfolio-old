import { Box, BoxProps } from '@chakra-ui/core';
import { PropsWithChildren } from 'react';
import UnderlinedText from './underlined-text';

interface Props extends BoxProps {
  underlineColor: string;
  emoji?: string;
}

const Header = ({ children, underlineColor, emoji, ...props }: PropsWithChildren<Props>) => (
  <Box as="h1" mt={10} mb={6} fontSize="3xl" lineHeight="shorter" fontWeight="bold" {...props}>
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    {emoji ? ' ' + emoji : ''}
  </Box>
);
export default Header;
