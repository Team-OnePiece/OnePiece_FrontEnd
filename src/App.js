import MainRouter from "./router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./style/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
