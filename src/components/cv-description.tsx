import { ReactElement } from 'react';
import { Badge, Box, Center, Divider, Link, Flex, Text } from '@chakra-ui/core';
import Paragraph from './paragraph';
import HorizontalScrollFlex from './horizontal-scroll-flex';

interface Props {
  linkColor: string;
  url: string;
  logo: ReactElement;
  name: string;
  knownAs?: string;
  status: 'ongoing' | 'past';
  fromTo?: string;
  summary: string | ReactElement;
}
const CVDescription = (props: Props) => (
  <Box py={[2, 6]}>
    <Flex direction={['column', 'column', 'row']} align="center">
      <Link href={props.url} isExternal>
        {props.logo}
      </Link>
      <Paragraph as="div" ml={[0, 0, 12]} mt={[6, 6, 0]} mb={0} maxW={['100%', '100%', '55%', '60%']}>
        <Flex align={['start', 'center']} direction={['column', 'row']}>
          {props.name}
          {props.knownAs && (
            <>
              <Center mx={2} height="20px" display={['none', 'block']}>
                <Divider orientation="vertical" />
              </Center>
              <Text fontSize="sm" mb={[4, 0]}>
                now known as <strong>{props.knownAs}</strong>
              </Text>
            </>
          )}
        </Flex>
        <Box fontSize="lg" mb={4}>
          <Link color={props.linkColor} href={props.url} isExternal>
            {props.url}
          </Link>
        </Box>
        <HorizontalScrollFlex align="center" mb={[4, 2]}>
          <Badge colorScheme={props.status === 'past' ? 'purple' : 'green'}>{props.status}</Badge>
          <Center mx={2} height="20px">
            <Divider orientation="vertical" />
          </Center>
          <Box fontSize="md">{props.fromTo}</Box>
        </HorizontalScrollFlex>
        {props.summary}
      </Paragraph>
    </Flex>
  </Box>
);
export default CVDescription;
