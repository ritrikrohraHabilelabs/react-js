import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CardUI(props) {
  const { idx, title, url } = props;

  return (
    <>
      <CardDiv id={idx}>
        <Link to={`/${idx}`}>
          <Img src={url} alt={idx} />
          <ParaDiv>
            <Para>{idx}</Para>
            <Para>{title}</Para>
          </ParaDiv>
        </Link>
      </CardDiv>
    </>
  );
}

const CardDiv = styled.div`
  width: 30%;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 10px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img``;

const ParaDiv = styled.div`
  text-align: center;
`;

const Para = styled.p`
  padding: 10px;
`;
