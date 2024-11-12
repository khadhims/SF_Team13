import { createTheme, ThemeProvider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Login } from "./pages/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: grey[400],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;