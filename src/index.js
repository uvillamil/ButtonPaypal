import "dotenv/config"; // loads variables from .env file
import express from "express";
import morgan from "morgan";
import {PORT} from './config.js';
import path from 'path';
import * as paypal from "./controllers/payment.controller.js";
//import cors from 'cors';





const app = express();

//app.use(cors());

app.use(morgan('dev'));

app.use(express.static(path.resolve('src/public')))

//app.use(express.static(path.join('src/public')));

// parse post params sent in body in json format
app.use(express.json());

app.post("/create-order", async (req, res) => {
  try {
    const order = await paypal.createOrder();
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/capture-order", async (req, res) => {
  const { orderID } = req.body;
  try {
    const captureData = await paypal.captureOrder(orderID);
    res.json(captureData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
console.log(`Server listening at http://localhost:${PORT}`);
});