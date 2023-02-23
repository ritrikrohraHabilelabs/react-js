import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CardUI from "../Components/CardUI";

export default function Home(props) {
  const [data, setData] = useState([]);

  console.log(data)

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HomeDiv>
        {data.map(
          (value, index) =>
            index < 10 && (
              <CardUI
                key={index}
                idx={value.id}
                title={value.title}
                url={value.thumbnailUrl}
              />
            )
        )}
      </HomeDiv>
    </>
  );
}
const HomeDiv = styled.div`
display : flex;
flex-wrap : wrap;
justify-content : space-evenly;
align-items : center
`