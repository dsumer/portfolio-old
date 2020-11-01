import { ColorMode } from '@chakra-ui/core';

type Mode = ColorMode | 'system' | undefined;

function setScript(initialValue: Mode) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const systemPreference = mql.matches ? 'dark' : 'light';

  let persistedPreference: Mode;

  try {
    persistedPreference = localStorage.getItem('chakra-ui-color-mode') as Mode;
  } catch (error) {
    console.log('Chakra UI: localStorage is not available. Color mode persistence might not work as expected');
  }

  const isInStorage = typeof persistedPreference === 'string';

  let colorMode: Mode;

  if (isInStorage) {
    colorMode = persistedPreference;
  } else {
    colorMode = initialValue === 'system' ? systemPreference : initialValue;
  }

  if (colorMode) {
    const root = document.documentElement;
    root.style.setProperty('--chakra-ui-color-mode', colorMode);
    document.body.style.background = colorMode === 'dark' ? '#1A202C' : 'white';
  }
}

interface ColorModeScriptProps {
  initialColorMode?: Mode;
}

/**
 * Script to add to the root of your application when using localStorage,
 * to help prevent flash of color mode that can happen during page load.
 */
export const ColorModeScript = (props: ColorModeScriptProps) => {
  const { initialColorMode = 'light' } = props;
  const html = `(${String(setScript)})('${initialColorMode}')`;
  return <script dangerouslySetInnerHTML={{ __html: html }} />;
};
