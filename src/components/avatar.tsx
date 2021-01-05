import Image from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  size: number;
}

const Avatar = ({ size, border, ...boxProps }: Props) => (
  <Box sx={{ img: { borderRadius: '42% 58% 70% 30% / 70% 60% 40% 30%', border } }} {...boxProps}>
    <Image loading="eager" src="/images/avatar.jpg" width={size} height={size} alt="Dominik Sumer" />
  </Box>
);
export default Avatar;
