import NextLink from 'next/link';
import {
  Box,
  Link,
  IconButton,
  Button,
  Divider,
  Center,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import ColorModeSwitcher from './color-mode-switcher';
import { FaTwitter } from 'react-icons/fa';
import UnderlinedText from './underlined-text';
import Avatar from './avatar';

const Navigation = () => {
  const buttonSize = useBreakpointValue({ base: 'sm', sm: 'md' });
  return (
    <>
      <NextLink href="/">
        <Link display="flex" alignItems="center">
          <Avatar size={44} />
          <Box ml={4} display={['none', 'block']}>
            <UnderlinedText color="#ff9400" h="3px">
              <strong>Dominik</strong>
            </UnderlinedText>
          </Box>
        </Link>
      </NextLink>
      <Box flexGrow={1} />
      <Box>
        <Link href="https://seriouscode.io" _hover={undefined}>
          <Button
            colorScheme="green"
            data-splitbee-event="ContactButton"
            data-splitbee-event-type="navigation"
            mr={[1, 2]}
            size={buttonSize}
          >
            Hire me
          </Button>
        </Link>
        <NextLink href="/blog">
          <Link _hover={undefined}>
            <Button variant="nav" size={buttonSize}>
              Blog
            </Button>
          </Link>
        </NextLink>
      </Box>
      <Center height="25px" px={[1, 3]}>
        <Divider orientation="vertical" borderColor={useColorModeValue('gray.400', 'gray.500')} />
      </Center>
      <Box>
        <Link href="https://twitter.com/dominiksumer" isExternal>
          <IconButton
            size="md"
            fontSize="lg"
            variant="nav"
            color="#1fa1f1"
            icon={<FaTwitter />}
            aria-label="Welcome to my Twitter profile!"
          />
        </Link>
        <ColorModeSwitcher />
      </Box>
    </>
  );
};
export default Navigation;
