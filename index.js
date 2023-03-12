import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:123@cluster0.4dcgyex.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
