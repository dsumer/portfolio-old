import { Box, Button, DarkMode, Divider, Flex, Link, useClipboard, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import Tweet from 'react-tweet-embed';
import { CodeWindowHeader } from './code-window-header';
import Paragraph from './paragraph';

const DEFAULT_FONT_FAMILY =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

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

  const trackExternalLink = () => {
    (window as any).splitbee.track('externalLink', { url: href });
  };

  return <Link isExternal onClick={trackExternalLink} {...linkProps} />;
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
  code: function Code(props: PropsWithChildren<any>) {
    const fileName = props['data-filename'];
    const value = decodeURI(props['data-value']);
    const { hasCopied, onCopy } = useClipboard(value);

    return (
      <Box pos="relative">
        <Box fontFamily={DEFAULT_FONT_FAMILY}>
          <CodeWindowHeader fileName={fileName} bgColor="rgb(34, 34, 34)">
            <DarkMode>
              <Button onClick={onCopy} color="white" mr="6px" mb="1px" py={0} px={3} size="sm" colorScheme="gray">
                {hasCopied ? 'Copied!' : 'Copy'}
              </Button>
            </DarkMode>
          </CodeWindowHeader>
        </Box>
        <Flex
          overflowX="auto"
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
          }}
        >
          <Box as="code" p={6} pb={8}>
            {props.children}
          </Box>
        </Flex>
        <Box
          pos="absolute"
          target="_black"
          tabIndex={-1}
          color="white"
          fontFamily={DEFAULT_FONT_FAMILY}
          right="6px"
          bottom="4px"
          fontWeight="bold"
          fontSize="15px"
        >
          snappify.com
        </Box>
      </Box>
    );
  },
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
  h3: function H3({ children, id }: PropsWithChildren<any>) {
    return (
      <Link href={`#${id}`}>
        <Box id={id} as="h4" fontSize={['1.52rem', '1.72rem']} mt={12} mb={4}>
          {children}
        </Box>
      </Link>
    );
  },
  ul: function UL({ children }: PropsWithChildren<unknown>) {
    return (
      <Paragraph as="ul" sx={{ li: { my: 2 } }} mt={6} mb={10} pl={6}>
        {children}
      </Paragraph>
    );
  },
  ol: function OL({ children }: PropsWithChildren<unknown>) {
    return (
      <Paragraph as="ol" sx={{ li: { my: 2 } }} mt={6} mb={10} pl={6}>
        {children}
      </Paragraph>
    );
  },
};

export default MDXComponents;
