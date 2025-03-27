import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#90a4ae', // Grey-Blue
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b', // Slate/charcoal
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 600,
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#e3f2fd', // light blue on hover
          },
        },
      },
    },
  },
})

export default theme