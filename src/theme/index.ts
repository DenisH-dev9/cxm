import { createContext, useState, useMemo } from 'react';
import { createTheme } from "@mui/material";

export const tokens = (mode: string) => ({
  ...(mode === 'dark' 
  ? {
    primary: {
      DEFAULT: '#ffc0cb',
      100: '#000000',
      200: '#000000',
      300: '#000000',
      400: '#000000',
      500: '#0F0E0E',
      600: '#232323',
      700: '#3D3D3D',
      800: '#525252',
      900: '#5C5C5C',
  },
  secondary: {
      DEFAULT: '#7C7C7C',
  },
    black: {
      DEFAULT: '#000000',
      100: '#141414',
      200: '#292929',
      300: '#3D3D3D',
      400: '#525252',
      500: '#666666',
      600: '#707070',
    },

    white: {
      DEFAULT: '#FFFFFF',
      50: '#F1F1F1',
      100: '#FFFFFF',
    },

    green: {
      DEFAULT: '#008000',
      50:  '#004800',
      100: '#008000',
      200: '#00A900',
      300: '#00D200',
      400: '#00FA00',
      500: '#24FF24',
      600: '#4DFF4D',
      700: '#76FF76',
      800: '#9FFF9F',
      900: '#B3FFB3',
    },

    red: {
      DEFAULT: '#FF0000',
      50:  '#1F0000',
      100: '#570000',
      200: '#8F0000',
      300: '#C70000',
      400: '#FF0000',
      500: '#FF2929',
      600: '#FF5252',
      700: '#FF7A7A',
      800: '#FFA3A3',
      900: '#FFB8B8',
    },
    accentMain: '#0F0E0E',
    borderColor: '#3C3C3C',
    blue: '#1900D5',
  } 
  : 
  {
    primary: {
      DEFAULT: '#3aef65',
      500: '#F7F7F7',
  },
  secondary: {
      DEFAULT: '#7C7C7C',
  },
    black: {
      DEFAULT: '#000000',
      50: '#707070',
      100: '#666666',
      200: '#525252',
      300: '#3D3D3D',
      400: '#292929',
      500: '#141414',
      600: '#000000',
    },

    white: {
      DEFAULT: '#FFFFFF',
      50: '#FFFFFF',
      100: '#F1F1F1',
    },

    green: {
      DEFAULT: '#008000',
      50: '#B3FFB3',
      100: '#9FFF9F',
      200: '#76FF76',
      300: '#4DFF4D',
      400: '#24FF24',
      500: '#00FA00',
      600: '#00D200',
      700: '#00A900',
      800: '#008000',
      900: '#004800',
    },

    red: {
      DEFAULT: '#FF0000',
      50: '#FFB8B8',
      100: '#FFA3A3',
      200: '#FF7A7A',
      300: '#FF5252',
      400: '#FF2929',
      500: '#FF0000',
      600: '#C70000',
      700: '#8F0000',
      800: '#570000',
      900: '#1F0000',
    },

  })
})

export const themeSettings: any = (mode: string) => {
  const colors = tokens(mode)
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
       ? 
       {
        primary: {
          main: colors.primary.DEFAULT,
        },
        secondary: {
          main: colors.secondary.DEFAULT,
        },
        neutral: {
          dark: colors.black[100],
          light: colors.white.DEFAULT,
        },
      } 
      : 
      {
        primary: {
          main: colors.primary.DEFAULT,
        },
        secondary: {
          main: colors.secondary.DEFAULT,
        },
        neutral: {
          dark: colors.black[100],
          light: colors.white.DEFAULT,
        },
      })
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    
  }
}


export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
})

export const useMode = () => {
  const [mode, setMode] = useState('dark')

  const colorMode = useMemo(
      () => ({
          toggleColorMode: () =>
              setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      }),
      [],
  )

  const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return [theme, colorMode]
}