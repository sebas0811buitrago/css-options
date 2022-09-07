import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  Theme,
  ThemeOptions
} from '@mui/material/styles';
import MuiButtonTheme from './MuiButtonTheme';

declare module '@mui/material/styles' {
  interface Palette {
    buttonTextPrimary: Palette['primary'];
  }
  interface PaletteOptions {
    buttonTextPrimary: PaletteOptions['primary'];
  }
}

const commonComponents: ThemeOptions = {
  typography: {
    fontFamily: ['sans-serif'].join(','),
    button: {
      textTransform: 'none'
    }
  },

  components: {
    ...MuiButtonTheme
  }
};

const themeReseller = createTheme({
  palette: {
    primary: { main: '#20abbd', contrastText: '#ffff' },
    secondary: { main: '#c15d9b', contrastText: '#ffff' },
    buttonTextPrimary: { main: '#ffffff' }
  },

  ...commonComponents
});

const themeMUI = createTheme({
  palette: {
    primary: { main: '#735679', contrastText: '#ffff' },
    secondary: { main: '#8089a2', contrastText: '#ffff' },
    buttonTextPrimary: { main: '#ffffff' }
  },
  ...commonComponents
});

const themesOptions: { [name: string]: Theme } = {
  themeReseller,
  themeMUI
};

interface Icontext {
  currenTheme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomThemeContext = React.createContext<Icontext>({});

interface ThemeSelectorProviderProps {
  children: React.ReactNode;
}

const ThemeSelectorProvider = (props: ThemeSelectorProviderProps) => {
  const [selectedTheme, setTheme] = useState('themeMUI');

  console.log('selectedTheme', selectedTheme);

  return (
    <CustomThemeContext.Provider
      value={{ currenTheme: selectedTheme, setTheme }}
    >
      <ThemeProvider theme={themesOptions[selectedTheme]}>
        {props.children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default ThemeSelectorProvider;
