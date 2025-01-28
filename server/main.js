import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import menuRoute from "./routes/menuRoute.js";
import { MenuItem } from "./restaurant/menuItem.js";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "*", 
  methods: "GET",
}));

app.get("/", (req, res) => {
  console.log("Welcome to the page");
  return res.status(200).send("Hi There");
});

app.use("/menu", menuRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connect successfully");
    app.listen(PORT, '0.0.0.0' ,() => {
      console.log(`Welcome to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


