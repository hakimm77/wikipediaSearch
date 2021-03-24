import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ResultCard from "../components/ResultCard";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const WikipediaSearch = ({ searchInput }) => {
  const [articalLink, setArticalLink] = useState();
  const [articalDefinition, setArticalDefinition] = useState();
  const [articalTitle, setArticalTitle] = useState();
  const [noResult, setNoResult] = useState(false);
  useEffect(() => {
    if (searchInput) {
      axios
        .get(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchInput}`
        )
        .then((response) => {
          try {
            console.log(response);
            if (response.data.query.search) {
              setArticalTitle(response.data.query.search[0].title);
              setArticalDefinition(response.data.query.search[0].snippet);
            }
          } catch {
            setNoResult(true);
          }

          //get artical link
          axios
            .get(
              `https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids=${response.data.query.search[0].pageid}`
            )
            .then((response) => {
              let pageid = Object.keys(response.data.query.pages);
              setArticalLink(response.data.query.pages[pageid].fullurl);
            });
        });
    }
  }, [searchInput]);

  return (
    <MainContainer>
      <ResultCard
        title={articalTitle}
        definition={articalDefinition}
        link={articalLink}
        onError={noResult}
      />
    </MainContainer>
  );
};

export default WikipediaSearch;
