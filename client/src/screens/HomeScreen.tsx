import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products?.map((product: any) => (
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
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
