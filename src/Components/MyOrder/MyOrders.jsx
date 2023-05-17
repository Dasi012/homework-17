import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const MyOrders = () => {
  const goBackNavigate = useNavigate();

  const fv = () => {
    goBackNavigate(-1);
  };

  return (
    <Contain>
      <h1> My order</h1>
      <button onClick={fv}>Go Back</button>
    </Contain>
  );
};

export default MyOrders;

const Contain = styled.div`
  h1 {
    border: 1px solid;
    width: 100%;
    height: 150px;
    background: cadetblue;
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
