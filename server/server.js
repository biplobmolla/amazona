import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productRoutes.js";
import seedRouter from "./routes/seedRoutes.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/amazona")
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("Error: ", err.message));

const app = express();
app.use(express.json());

app.use("/api/seed", seedRouter);
app.use("/api/products/", productRouter);

const port = 5000;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
