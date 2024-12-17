import Home from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Custom Blue & White Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#12354f', // Blue color
    },
    secondary: {
      main: '#FFFFFF', // White for secondary elements
    },
    background: {
      default: '#FFFFFF', // White background
    },
    text: {
      primary: '#12354f', // Blue text
      secondary: '#424242', // Optional darker shade for contrast
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h5: {
      color: '#12354f', // Blue color for headings
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
