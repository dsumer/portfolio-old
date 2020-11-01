import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

const Paragraph = ({ children, ...props }: PropsWithChildren<BoxProps>) => (
  <Box as="p" mt={0} mb={6} fontSize="1.35em" lineHeight={1.5} fontWeight="400" textAlign="justify" {...props}>
    {children}
  </Box>
);
export default Paragraph;
