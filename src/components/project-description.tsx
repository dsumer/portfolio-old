import { ReactElement } from 'react';
import { Badge, Box, Center, Divider, Link, Flex } from '@chakra-ui/react';
import Paragraph from './paragraph';
import HorizontalScrollFlex from './horizontal-scroll-flex';

interface Props {
  linkColor: string;
  url: string;
  logo: ReactElement;
  status: 'ongoing' | 'on hold' | 'finished 🎉';
  badges: ReactElement;
  summary: string | ReactElement;
  content: ReactElement;
}
const ProjectDescription = (props: Props) => (
  <Box py={[2, 6]}>
    <Flex direction={['column', 'column', 'row']} align="center">
      <Link href={props.url} isExternal>
        {props.logo}
      </Link>
      <Paragraph as="div" ml={[0, 0, 12]} mt={[6, 6, 0]} maxW={['100%', '100%', '55%', '60%']}>
        <HorizontalScrollFlex align="center" mb={[4, 2]}>
          <Badge colorScheme={props.status === 'on hold' ? 'orange' : 'green'}>{props.status}</Badge>
          <Center mx={2} height="20px">
            <Divider orientation="vertical" />
          </Center>
          {props.badges}
        </HorizontalScrollFlex>
        <Box fontSize="lg" mb={4}>
          <Link color={props.linkColor} href={props.url} isExternal>
            {props.url}
          </Link>
        </Box>
        {props.summary}
      </Paragraph>
    </Flex>
    {props.content}
  </Box>
);
export default ProjectDescription;
