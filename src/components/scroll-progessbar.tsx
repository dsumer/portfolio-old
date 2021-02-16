import { useEffect, useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const NAVBAR_HEIGHT = 68;

const ScrollProgressbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (document.body.scrollTop > NAVBAR_HEIGHT) {
        const winScroll = document.body.scrollTop - NAVBAR_HEIGHT;
        const height = document.body.scrollHeight - document.body.clientHeight - NAVBAR_HEIGHT;
        setProgress((winScroll / height) * 100);
      } else {
        setProgress(0);
      }
    }
    document.body.addEventListener('scroll', onScroll);
    return () => document.body.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box pos="fixed" top="0" left="0" width="100%" height="7px" zIndex="10" opacity=".8">
      <Box
        pos="absolute"
        left="0"
        top="0"
        height="100%"
        width={`${progress}%`}
        bg={useColorModeValue('blue.400', 'green.600')}
      />
    </Box>
  );
};
export default ScrollProgressbar;
