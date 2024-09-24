import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function Product({ item }) {
  //  we have 2 main hooks in react redux
  // 1. --> useSelector: used to read the state
  // 2. --> useDispatch: used to dispatch the action

  const dispatch = useDispatch();

  const handleAddCartClick = () => {
    dispatch(add(item));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div className="cardContainer">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: "200px", width: "200px", marginBottom: "10px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text style={{ marginTop: "15px" }}>INR: {item.price}</Card.Text>
          <Button
            variant="primary"
            style={{ width: "250px", height: "35px", marginTop: "10px" }}
            onClick={handleAddCartClick}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
