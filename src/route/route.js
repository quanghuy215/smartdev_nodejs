import express from "express";
import pageControllers from "../controllers/pageControllers";
import userControllers from '../controllers/userControllers'

let router = express.Router();

let initRoutes = (app) => {
  //render ejs
  router.get("/", pageControllers.getHomePage);
  router.get("/home", pageControllers.getHomePage);
  router.get("/login", pageControllers.getLoginPage);
  router.get("/register", pageControllers.getRegisterPage);

  //api
  //user
  router.post("/api/register", userControllers.registerUser);
  router.post("/api/login", userControllers.handleLoginUser);

  

  return app.use("/", router);
};

module.exports = initRoutes;
