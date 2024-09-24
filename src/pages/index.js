import React from "react";
import MyWishlistComp from "../components/wishlist";
import NavbarComp from "../components/navbar";
import { useSelector } from "react-redux";

function MyWishListPage() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <>
      <NavbarComp />

      <div className="mainContainer">
        <div className="headingContainer">
          <h1 className="heading">My Wishlist</h1>
        </div>
        <div className="productContainer">
          {cartProducts.length >= 1 &&
            cartProducts.map((item) => (
              <MyWishlistComp key={item.id} item={item} />
            ))}
          {cartProducts.length < 1 && <h2>No items in cart</h2>}
        </div>
      </div>
    </>
  );
}

export default MyWishListPage;
