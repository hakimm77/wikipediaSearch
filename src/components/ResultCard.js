import React, { useEffect, useState } from "react";
import styled from "styled-components";
import loadingGif from "../assets/loading.gif";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7eca9c;
  width: 400px;
  border-radius: 4px;
  padding: 25px;
  margin-top: 30px;
`;

const ArticalTitle = styled.h1`
  color: #1c1427;
  font-size: 22px;
`;

const DefinitionText = styled.p`
  color: #40394a;
  font-size: 18px;
`;

const LinkText = styled.a`
  color: #40394a;
  font-size: 16px;
  font-weight: bold;
`;

const ResultCard = ({ title, definition, link, onError }) => {
  useEffect(() => {
    if (definition && link) {
      document.getElementById("definition").innerHTML = definition + " ....";
    }
  }, [definition, link]);
  return (
    <div>
      {definition && link ? (
        <CardContainer>
          <ArticalTitle>{title}</ArticalTitle>
          <DefinitionText id="definition" />
          <LinkText href={link} target="blank">
            Read more
          </LinkText>
        </CardContainer>
      ) : onError ? (
        <h1>no results !!</h1>
      ) : (
        <img src={loadingGif} style={{ width: 50, padding: 80 }} />
      )}
    </div>
  );
};

export default ResultCard;
