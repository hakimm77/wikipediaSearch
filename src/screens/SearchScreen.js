import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WikiSearch from "../helpers/WikipediaSearch";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: #e4ffdc;
  outline: none;
  font-size: 19px;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: #40394a;
  margin-bottom: 50px;
`;
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beginSearching, setBeginSearching] = useState(false);

  useEffect(() => {
    var input = document.getElementById("searchInput");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        setBeginSearching(true);
        setSearchTerm("");
      }
    });
  }, []);
  return (
    <MainContainer>
      <PageTitle>Search Wiki</PageTitle>
      <SearchInput
        id="searchInput"
        placeholder="Search for the best web articals..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {beginSearching ? <WikiSearch searchInput={searchTerm} /> : undefined}
    </MainContainer>
  );
};

export default SearchScreen;
