import express from "express";
import pageControllers from "../controllers/pageControllers";

let router = express.Router();

let initRoutes = (app) => {
  router.get("/", pageControllers.getHomePage);
  router.get("/home", pageControllers.getHomePage);
  router.get("/login", pageControllers.getLoginPage);
  router.get("/register", pageControllers.getRegisterPage);

  

  return app.use("/", router);
};

module.exports = initRoutes;
