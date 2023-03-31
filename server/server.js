import express, { urlencoded } from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productRoutes.js";
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/amazona")
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("Error: ", err.message));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
app.use("/api/products/", productRouter);
app.use("/api/users/", userRouter);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = 5000;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
