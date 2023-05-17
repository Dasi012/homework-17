import React from "react";
import Frame from "./assets/Frame (1).jpg";
import Vector from "./assets/Vector.jpg";
import Vector1 from "./assets/Vector (1).jpg";
import Vector2 from "./assets/Vector (2).jpg";
import Vector3 from "./assets/Vector (3).jpg";
import Rectangle from "./assets/Rectangle.png";
import { styled } from "styled-components";
import IMAGE from "./assets/IMAGE (2).png";
import { useNavigate } from "react-router-dom";
const Phones = () => {



  const goBackNavigate = useNavigate();

  const fv = () => {
    goBackNavigate(-1);
  };
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <img src={Rectangle} alt="logo" width={"100%"} />
      </div>
      <br />
      <Comont>
        <img src={Frame} alt="логотип" width={"30px"} height={"30px"} />

        <h4>Phones</h4>
        <h4>Earbuds</h4>
        <h4>Watches</h4>
        <h4>Smart Home</h4>
        <h4>Laptops</h4>
        <h4>Accessories</h4>
        <h4>Subscriptions</h4>
        <h4>Offers</h4>

        <img src={Vector} alt="logo" width={" 20px"} height={"20px"} />
        <img src={Vector1} alt="logo" width={"20px"} height={"20px"} />
        <img src={Vector2} alt="logo" width={"20px"} height={"20px"} />
        <img src={Vector3} alt="logo" width={"20px"} height={"20px"} />
      </Comont>
      <div>
        <img src={IMAGE} alt="logo" width={"100%"} />
        <p
          style={{
            fontSize: "80px",
            marginTop: "-600px",
            marginLeft: "200px",
            textAlign: "start",
          }}
        >
          Inhale. Gift.⁠ <br />
          Exhale.
        </p>
        <p style={{ marginRight: "750px" }}>
          The gifts you need, stress-free. Shop the best of
          <br /> Google with ease.
        </p>
        <div style={{ marginRight: "750px", display: "flex", gap: "20px" }}>
          <button onClick={fv} style={{ width: "170px" , marginLeft:'200px',marginTop:"50px"}}>Browse deals</button>
          <p style={{ marginBottom: "250px", marginTop: "-0.1px",marginLeft:'50px', margin:"50px",}}>
            Browse the gift guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phones;

const Comont = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  img {
    margin-top: 20px;
  }
`;
