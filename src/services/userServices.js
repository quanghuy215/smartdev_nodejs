import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

let registerUser = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { name, email, password } = inputData;
      let user = await Users.findOne({ email });

      //check input
      if (!name || !email || !password) {
        resolve({
          errCode: 1,
          msg: "Missing parameters!",
        });
      }
      // if user exists in db
      if (user) {
        resolve({
          errCode: 1,
          msg: "The email already exists!",
        });
      }

      //if password length <5
      if (password.length < 5) {
        resolve({
          errCode: 1,
          msg: "Password is at least 6 characters long!",
        });
      }

      //password encryption
      let passwordHash = await bcrypt.hash(password, 10);
      let newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      //Save MongoDB
      await newUser.save();

      resolve({
        errCode: 0,
        msg: "Register success!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let handleLoginUser = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { email, password } = inputData;
      let user = await Users.findOne({ email });

      //check user exist
      if (!user) {
        resolve({
          errCode: 1,
          msg: "User does not exist!",
        });
      }

      //compare password from db and from input
      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        resolve({
          errCode: 2,
          msg: "Incorrect password!",
        });
      }

      resolve({
        errCode: 0,
        msg: "Login success!",
        user: user,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  registerUser: registerUser,
  handleLoginUser: handleLoginUser,
};
