import React from "react";
import styled from "styled-components";

import "./App.css";
import Search from "./components/Search";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`;

const StyledNav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background-color: #f2f2f2;
  color: black;
`;

function App() {
  return (
    <StyledApp>
      <StyledNav>
        <Search />
      </StyledNav>
    </StyledApp>
  );
}

export default App;
