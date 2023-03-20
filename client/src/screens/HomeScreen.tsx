import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, products, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error: any) {
        dispatch({ type: "FETCH_FAIL", error: error.message });
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products?.map((product: any) => (
            <div key={product?.slug} className="product">
              <Link to={`/product/${product?.slug}`}>
                <img src={product?.image} alt={product?.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
