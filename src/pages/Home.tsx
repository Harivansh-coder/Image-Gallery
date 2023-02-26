import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Body from "../components/Body";
import Header from "../components/Header";

import { darkTheme, GlobalStyles, lightTheme } from "../theme";

const StyledApp = styled.div``;

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <ThemeProvider theme={isDarkMode === false ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App bg-black">
          <Header />
          <Body />
        </div>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Home;
