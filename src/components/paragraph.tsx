import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const Paragraph = ({ children, ...props }: PropsWithChildren<BoxProps>) => (
  <Box
    as="p"
    mt={0}
    mb={6}
    fontSize="1.35em"
    lineHeight={1.5}
    fontWeight="400"
    textAlign={['left', 'left', 'justify']}
    {...props}
  >
    {children}
  </Box>
);
export default Paragraph;
