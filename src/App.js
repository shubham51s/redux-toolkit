import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/product";
import NavbarComp from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [productData, setProductData] = useState([]);

  const fetchApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    setProductData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <NavbarComp />
      <div className="mainContainer">
        <div className="headingContainer">
          <h1 className="heading">All Products</h1>
        </div>
        <div className="productContainer">
          {productData.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
