import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.js";

const PORT = 5000;
const URL = "mongodb+srv://user:user@cluster0.h4wrjb4.mongodb.net/";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/form", router);

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

connectDB().then(startApp());
