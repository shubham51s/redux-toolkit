import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function MyWishlistComp({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(remove(item.id));
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
            variant="danger"
            style={{ width: "250px", height: "35px", marginTop: "10px" }}
            onClick={handleRemoveFromCart}
          >
            Remove from cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyWishlistComp;
