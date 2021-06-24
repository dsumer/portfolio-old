import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import Color from 'color';
import { PropsWithChildren } from 'react';
import { FileIcon } from './file-icon';

const WindowControl = (props: BoxProps) => <Box boxSize="13px" rounded="50%" mr={2} {...props} />;
interface TabProps extends FlexProps {
  bgAlphaColor: string;
}

const Tab = ({ children, bg, bgAlphaColor, ...flexProps }: TabProps) => (
  <Flex
    pos="relative"
    align="center"
    color="gray.300"
    roundedTop="6px"
    borderBottom="none"
    px={2}
    mt="5px"
    h="40px"
    bg={bg}
    {...flexProps}
  >
    <Box pos="absolute" bottom="0" left="-12px" boxSize="12px" bg={bg} />
    <Box pos="absolute" bottom="0" left="-12px" boxSize="12px" roundedBottomEnd="6px" bg={`${bgAlphaColor}.100`} />
    <Box pos="absolute" bottom="0" right="-12px" boxSize="12px" bg={bg} />
    <Box pos="absolute" bottom="0" right="-12px" boxSize="12px" roundedBottomStart="6px" bg={`${bgAlphaColor}.100`} />
    {children}
  </Flex>
);

interface Props {
  bgColor: string;
  fileName: string;
}

export const CodeWindowHeader = ({ bgColor, fileName, children }: PropsWithChildren<Props>) => {
  const bgAlphaColor = Color(bgColor).isLight() ? 'blackAlpha' : 'whiteAlpha';

  const showTab = !!fileName;
  return (
    <Flex pos="relative" h="45px" align="center" bg={`${bgAlphaColor}.100`} borderTopRadius="10px">
      <Flex px={4}>
        <WindowControl bg="#ff5f57" mr={2} />
        <WindowControl bg="#febc2e" mr={2} />
        <WindowControl bg="#28c840" />
      </Flex>
      {showTab && (
        <Tab
          zIndex={1}
          bgAlphaColor={bgAlphaColor}
          bg={bgColor}
          mr={3}
          cursor="default"
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        >
          <FileIcon fileName={fileName} />
          <Box ml={2} color={`${bgAlphaColor}.800`}>
            {fileName}
          </Box>
        </Tab>
      )}
      <Box flexGrow={1} />
      {children}
    </Flex>
  );
};
