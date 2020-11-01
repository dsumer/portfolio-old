import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/core';
import { FiMoon, FiSun } from 'react-icons/fi';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <IconButton
      position="absolute"
      top={2}
      right={2}
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
export default ColorModeSwitcher;
