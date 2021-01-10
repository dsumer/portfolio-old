import NextLink from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';
import { Box, Link } from '@chakra-ui/react';
import Paragraph from './paragraph';
import { PropsWithChildren } from 'react';

const CustomLink = (props: { href: string }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  const linkProps = { ...props, borderBottom: '3px solid #0060ff70', _hover: { bg: '#0060ff30' } };

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <Link {...linkProps} />
      </NextLink>
    );
  }

  return <Link isExternal {...linkProps} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
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
