import axios from "axios";
import { useEffect, useReducer } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Product from "../components/Product";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    error: "",
    loading: true,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error: any) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
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
          <Row>
            {products?.map((product: any) => (
              <Col key={product?.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
