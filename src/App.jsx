import { createTheme, ThemeProvider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Login } from "./pages/Login";
import Register from "./pages/Register";

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
      <Register />
      <Login />
    </ThemeProvider>
  );
}

export default App;