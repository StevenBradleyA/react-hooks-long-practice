import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";
import { useState } from "react";

function ProductView({ products }) {
  // TODO: Replace with state variable

  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => {
            console.log(item);
            // console.log(ProductListItem)
            return (
              <ProductListItem
                key={item.id}
                product={item}
                isSelected={item.id === selectedProduct.id ? true : false}
                onClick={() => setSelectedProduct((prev) => item)}
              />
            );
          })}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}
          >
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
