import Image from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

export interface BannerComponent {
  props: BoxProps;
  children: [
    {
      content: string;
      props: BoxProps;
    },
  ];
}

interface Props extends BoxProps {
  alt: string;
  banner: string;
  bannerBg: string;
  bannerComponent: BannerComponent;
}

const BlogBanner = ({ alt, banner, bannerBg, bannerComponent, ...props }: Props) => (
  <Box
    sx={{
      img: {
        borderRadius: '10px',
      },
    }}
    m="auto"
    mb={16}
    borderRadius="10px"
    bg={bannerBg}
    maxW="800px"
    maxH="300px"
    {...props}
  >
    {bannerComponent && (
      <Box w="100%" sx={{ '&': { w: '100%', pt: '37.5%' } }} pos="relative" {...bannerComponent.props}>
        <Box pos="absolute" left="0" top="0" bottom="0" right="0">
          {bannerComponent.children.map((child: any, index: number) => (
            <Box key={index} {...child.props}>
              {child.content}
            </Box>
          ))}
        </Box>
      </Box>
    )}
    {banner && <Image src={banner} width="800" height="300" alt={alt} />}
  </Box>
);
export default BlogBanner;
