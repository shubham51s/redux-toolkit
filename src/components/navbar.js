import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav>
            <Nav.Link onClick={() => navigate("/")}>Products</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              My Bag {cartProducts.length}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
