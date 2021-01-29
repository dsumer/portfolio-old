import NextLink from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';
import { Box, Divider, Link, useColorModeValue } from '@chakra-ui/react';
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
  Box,
  a: CustomLink,
  blockquote: function BlockQuote({ children }: PropsWithChildren<unknown>) {
    const blockQuoteColor = useColorModeValue('gray.500', 'gray.400');
    return (
      <Box as="blockquote" borderLeft="5px solid" pl={4} py={0} borderColor={blockQuoteColor} color={blockQuoteColor}>
        {children}
      </Box>
    );
  },
  Tweet,
  p: Paragraph,
  hr: function HR({ children }: PropsWithChildren<unknown>) {
    return <Divider my={8}>{children}</Divider>;
  },
  h1: function H1({ children, id }: PropsWithChildren<any>) {
    return (
      <Link href={`#${id}`}>
        <Box id={id} as="h2" fontSize={['1.9rem', '2.1rem']} mt={14} mb={4}>
          {children}
        </Box>
      </Link>
    );
  },
  h2: function H2({ children, id }: PropsWithChildren<any>) {
    return (
      <Link href={`#${id}`}>
        <Box id={id} as="h3" fontSize={['1.7rem', '1.9rem']} mt={14} mb={4}>
          {children}
        </Box>
      </Link>
    );
  },
  ul: function UL({ children }: PropsWithChildren<unknown>) {
    return (
      <Paragraph as="ul" sx={{ li: { my: 2 } }} mt={-3} pl={6}>
        {children}
      </Paragraph>
    );
  },
};

export default MDXComponents;
