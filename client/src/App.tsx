import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";

function App() {
  const { state } = useContext<any>(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link to="/">amazona</Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce(
                        (a: any, c: any) => a + c.quantity,
                        0
                      )}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
