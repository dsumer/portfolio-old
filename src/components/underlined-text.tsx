import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/core';

interface Props {
  color: string;
}
const UnderlinedText = (props: PropsWithChildren<Props>) => (
  <Box display="inline-block" position="relative">
    {props.children}
    <Box position="absolute" bg={props.color} w="100%" h="4px" bottom={0} zIndex={-1} />
  </Box>
);
export default UnderlinedText;
