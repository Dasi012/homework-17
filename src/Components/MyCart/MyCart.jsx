import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Phones from "./Phones";

const MyCart = () => {
  const goBackNavigate = useNavigate();

  const fv = () => {
    goBackNavigate(-1);
  };

  return (
    <Containers>
      <Phones />
      <h1> My Cart</h1>
      <button onClick={fv}>Go Back</button>
    </Containers>
  );
};

export default MyCart;

const Containers = styled.div`
  h1 {
    border: 1px solid;
    width: 100%;
    height: 150px;
    background: cadetblue;
    
margin-top: 150px;
  }
  button {
    width: 125px;
    height: 30px;
    padding: 4px 26px;
    background: #22bd07;
    border-radius: 20px;
    color: aliceblue;
    font-size: 17px;
    font-weight: 600;

  }
`;
