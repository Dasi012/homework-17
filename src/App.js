import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import MyCart from "./Components/MyCart/MyCart";
import MyOrders from "./Components/MyOrder/MyOrders";
import { Products } from "./Components/Products/Products";
import Istore from "./Components/Istore";
import { styled } from "styled-components";

function App() {
  return (
    <div className="App">
      <HeaderMain>
        <h1>Istore</h1>
        <div>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/cart">My cart</StyledLink>
          <StyledLink to="/orders">My Orders</StyledLink>
        </div>
      </HeaderMain>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Istore />} />

        <Route path="/cart" element={<MyCart />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default App;

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: aliceblue;
  background-color: rgb(20, 99, 169);
  font-size: 16px;
  text-decoration: none;
  padding: 20px 0;
`;

const StyledLink = styled(Link)`
  color: aliceblue;
  font-size: 16px;
  text-decoration: none;
  margin-right: 40px;
  padding-bottom: 2px;
  border-bottom: 1px solid aliceblue;
`;
