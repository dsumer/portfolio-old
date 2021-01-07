import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';
import { Box } from '@chakra-ui/react';
import Paragraph from './paragraph';
import { PropsWithChildren } from 'react';

const CustomLink = (props: { href: string }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
  MainImage: function MainImage({
    width,
    height,
    src,
    alt,
  }: {
    width: string;
    height: string;
    src: string;
    alt: string;
  }) {
    return (
      <Box
        textAlign="center"
        sx={{
          '> div': { display: 'inline-block' },
          img: {
            borderRadius: '10px',
          },
        }}
        mb={16}
      >
        <Image src={src} width={width} height={height} alt={alt} />
      </Box>
    );
  },
  p: Paragraph,
  h1: function H1({ children, id }: PropsWithChildren<any>) {
    return (
      <Box id={id} as="h2" fontSize={['1.9rem', '2.1rem']} mt={14} mb={4}>
        {children}
      </Box>
    );
  },
};

export default MDXComponents;
