import express from "express";
import data from "./data.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/amazona")
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("Error: ", err.message));

app.get("/api/products/", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/product/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
  res.send(data.products);
});

const port = 5000;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
