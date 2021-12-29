import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initRouters from "./route/route";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();
//config app

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

viewEngine(app);
initRouters(app);

connectDB();

let port = process.env.PORT || 6969;
//port === undefined => port = 6969
app.listen(port, () => {
  //callback
  console.log("Backend nodejs is running on the port: " + port);
});
