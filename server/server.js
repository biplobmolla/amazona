import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/amazona")
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("Error: ", err.message));

app.use("/api/seed", seedRouter);
app.use("/api/products/", productRouter);

const port = 5000;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
