import BlogSeo from './blog-seo';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { websiteUrl } from '../utils/consts';
import NewsletterForm from './newsletter-form';
import Avatar from './avatar';
import { FaTwitter } from 'react-icons/fa';

export default function BlogLayout({ frontMatter, children }: PropsWithChildren<any>) {
  const date = format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy');

  return (
    <>
      <BlogSeo url={`${websiteUrl}blog/${frontMatter.slug}`} date={date} {...frontMatter} />
      <Box as="article" maxW="100%">
        <Box as="header" mb={10}>
          <Text as="h1" fontSize={['2rem', '2.3rem', '2.8rem']}>
            {frontMatter.title}
          </Text>
          <Box fontSize="1.2rem" mt={3} color="gray.500">
            <Text as="span">{date}</Text>
            <Box as="span" mx={3}>
              •
            </Box>
            <Text as="span">{frontMatter.readingTime.text}</Text>
          </Box>
        </Box>
        <section>
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
            <Image src={frontMatter.banner} width="800" height="300" alt={frontMatter.title} />
          </Box>
          {children}
        </section>
        <NewsletterForm my={[20, 28]} />
        <Flex direction={['column', 'column', 'row']} mb={12}>
          <Avatar size={220} m="auto" mr={['auto', 'auto', 16]} mb={[16, 16, 'auto']} border="3px solid #ededed" />
          <Flex maxW={500} m="auto" ml={['auto', 'auto', 0]} justify="center" direction="column">
            <Box as="h2" fontSize="2xl" fontWeight="400">
              My name is{' '}
              <Box as="strong" fontWeight="600">
                Dominik
              </Box>{' '}
              and I&apos;m a{' '}
              <Box as="span" whiteSpace="nowrap">
                Web Developer
              </Box>{' '}
              from{' '}
              <Box as="span" whiteSpace="nowrap">
                Austria 🇦🇹
              </Box>
            </Box>
            <Box as="h2" fontSize="2xl" fontWeight="400" mt={10}>
              I regularly post stuff about Web Development on
              <Link
                href="https://twitter.com/dominiksumer"
                ml={2}
                mr={1}
                isExternal
                whiteSpace="nowrap"
                _hover={{ textDecor: 'none', color: '#1fa1f1' }}
              >
                <Box display="inline-block" as={FaTwitter} mb="4px" color="#1fa1f1" />{' '}
                <Box as="span" borderBottom="2px solid currentColor">
                  Twitter
                </Box>
              </Link>{' '}
              so make sure to follow me if you&apos;re interested. 😊
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
