import { Box, Flex, Text, ChakraProvider } from '@chakra-ui/react';
import { readFileSync } from 'fs';
import { FaTwitter } from 'react-icons/fa';

interface Props {
  title: string;
  slug: string;
}

const OgImage = ({ title, slug }: Props) => {
  return (
    <ChakraProvider>
      <Box
        w="1200px"
        h="630px"
        pos="relative"
        p="15px"
        bg="gray.200"
        fontFamily={
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
        }
      >
        <Box pos="relative" w="100%" h="100%" border="10px solid white" borderRadius="20px">
          <Box pos="absolute" left={20} top="60px" fontSize="6xl">
            {title}
          </Box>
          <Flex alignItems="center" pos="absolute" left={10} bottom={10}>
            <Box
              as="img"
              src={`data:image/jpeg;base64,${readFileSync('../../public/images/avatar.jpg').toString('base64')}`}
              w="200px"
              h="200px"
              borderRadius="42% 58% 70% 30% / 70% 60% 40% 30%"
              border="3px solid #ededed"
              mr={'50px'}
            />
            <Box pr="20px">
              <Text fontSize="4xl">
                <strong>dominik.sumer.dev</strong>
                <Box as="span" display="inline-block">
                  {slug}
                </Box>
              </Text>
            </Box>
          </Flex>
          <Box pos="absolute" right={5} bottom={5} fontSize="2xl">
            <Box display="inline-block" as={FaTwitter} mb="4px" color="#1fa1f1" />{' '}
            <Box as="span" color="#1fa1f1">
              @dominiksumer
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
export default OgImage;
