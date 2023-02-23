import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function CardFullPage(props) {
  const { idx } = useParams();
  console.log(idx);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${idx}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  });

  return (
    <>
      <MainDiv>
        <CardDiv>
          <Img src={data.thumbnailUrl} />
          <Para>{data.title}</Para>
        </CardDiv>
      </MainDiv>
    </>
  );
}

const MainDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border : 1px solid black;
  border-radius : 10px;
`;
const Img = styled.img`
padding : 10px;
`;
const Para = styled.p`
padding : 10px;
`;
