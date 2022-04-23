import React from "react";
import { Home } from "../Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../themeConfig";
import './styles.sass'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
