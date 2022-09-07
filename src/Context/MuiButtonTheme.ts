import { Components, Theme } from '@mui/material/styles';

const MuiButtonTheme: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const { variant, color } = ownerState;

        const themeColor =
          color === 'primary'
            ? theme.palette.primary.main
            : theme.palette.secondary.main;
        return {
          boxShadow: 'none',
          ...(variant === 'contained' && {
            background: themeColor
          }),
          '&:hover': {
            ...(variant === 'contained' && {
              opacity: 0.7
            }),
            ...(variant === 'outlined' && {
              background: themeColor,
              color: 'white'
            })
          }
        };
      }
    }
  }
};

export default MuiButtonTheme;
