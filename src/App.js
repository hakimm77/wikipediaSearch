import React, { useEffect, useState } from "react";
import SearchScreen from "./screens/SearchScreen";
import styled from "styled-components";

import "./appStyle.css";

const MainContainer = styled.div``;

const App = () => {
  return (
    <MainContainer>
      <SearchScreen />
    </MainContainer>
  );
};

export default App;
