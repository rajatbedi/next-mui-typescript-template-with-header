import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
          main: '#0093E1',
          light: '#dedede',
        },
        secondary: {
          main: '#f5f5f5'
        },
        success: {
          main: "rgb(39, 168, 21)"
        }
      },
      typography: {
        fontFamily: 'Source Sans Pro',
        button: {
          fontSize: '1em',
          fontWeight: 500,
          lineHeight: 1.5,
        },
       
      },
});

export default theme;