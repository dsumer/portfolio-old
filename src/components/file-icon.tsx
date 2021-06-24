import { FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { Box } from '@chakra-ui/react';

export const FileIcon = ({ fileName }: { fileName: string }) => {
  const splitted = fileName.split('.');
  if (splitted.length < 2) {
    return null;
  }

  switch (splitted[splitted.length - 1]) {
    case 'jsx':
    case 'tsx':
      return <Box as={FaReact} color="#61dafb" />;
    case 'css':
      return <Box as={SiCss3} color="#3365f1" />;
    case 'html':
      return <Box as={SiHtml5} color="#f16528" />;
    case 'js':
      return <Box as={IoLogoJavascript} color="#edc624" />;
    case 'ts':
      return <Box as={SiTypescript} color="#2f76c4" bg="white" />;
    default:
      return null;
  }
};
