import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const produc = [
  {
    img: "https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/iPhone-14-Pro-Max-512GB.png?fit=770%2C770&ssl=1",
    title: "Iphone 14 Pro",
    price: "$1750",
    id: 1,
  },
  {
    img: "https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/iPhone-14-Pro-Max-512GB.png?fit=770%2C770&ssl=1",
    title: "Iphone 13 Pro",
    price: "$1600",
    id: 2,
  },
  {
    img: "https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/iPhone-14-Pro-Max-512GB.png?fit=770%2C770&ssl=1",
    title: "Iphone 12 Pro",
    price: "$1250",
    id: 3,
  },
];

export const Products = () => {
  const Producs = useNavigate();

  function ProducNAvigate() {
    Producs("/producs");
  }

  return (
    <Contain>
      {produc.map((el) => {
        return (
          <Componet>
            <Link to={`${el.id}`} key={el.id}>
              <img src={el.img} alt="#" />
              <>
                <h1>{el.title}</h1>
                <p>{el.price}</p>
              </>
            </Link>
          </Componet>
        );
      })}
      <Outlet />
      <button onClick={ProducNAvigate}>Go Back</button>
    </Contain>
  );
};

const Contain = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: end;
  margin-top: 30px;
  margin-left: 100px;
 
  img {
    display: flex;
    gap: 20px;
    width: 350px;
    height: 300px;
    border-radius: 30px;
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

const Componet = styled.div`
  border: none;
  border-radius: 30px;
  width: 350px;
  height: 450px;
  background-color: #fff;
  box-shadow: 8px 3px 14px 5px rgba(34, 60, 80, 0.26);
`;
