import NextLink from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';
import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import Paragraph from './paragraph';
import { PropsWithChildren } from 'react';

const CustomLink = (props: { href: string }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  const linkBorderColor = useColorModeValue('#0060ff70', '#38ff0070');
  const linkBgColor = useColorModeValue('#0060ff30', '#38ff0030');

  const linkProps = { ...props, borderBottom: '3px solid ' + linkBorderColor, _hover: { bg: linkBgColor } };

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
