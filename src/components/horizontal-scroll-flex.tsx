import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HorizontalScrollFlex = styled(Flex)`
  & {
    overflow-x: auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
export default HorizontalScrollFlex;
