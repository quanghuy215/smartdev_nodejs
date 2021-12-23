import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initRouters from "./route/route";

require("dotenv").config();

let app = express();
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initRouters(app);

// example users
// var users = [
//   { id: 0, name: "Harry", email: "user01@gmail.com", role: "member" },
//   { id: 1, name: "Eric", email: "user02@gmail.com", role: "member" },
//   { id: 2, name: "Tom", email: "user03@gmail.com", role: "admin" },
// ];

// function loadUser(req, res, next) {
//   // You would fetch your user from the db
//   var user = users[req.params.id];
//   if (user) {
//     req.user = user;
//     next();
//   } else {
//     next(new Error("Failed to load user " + req.params.id));
//   }
// }

// function andRestrictToSelf(req, res, next) {
//   // If our authenticated user is the user we are viewing
//   // then everything is fine :)
//   if (req.authenticatedUser.id === req.user.id) {
//     next();
//   } else {
//     next(new Error("Unauthorized"));
//   }
// }

// function andRestrictTo(role) {
//   return function (req, res, next) {
//     if (req.authenticatedUser.role === role) {
//       next();
//     } else {
//       next(new Error("Unauthorized"));
//     }
//   };
// }

// app.use(function (req, res, next) {
//   req.authenticatedUser = users[0];
//   next();
// });

// app.get("/", function (req, res) {
//   res.redirect("/user/0");
// });

// app.get("/user/:id", loadUser, function (req, res) {
//   res.send(
//     "Viewing user : " +
//       req.user.name +
//       " , email : " +
//       req.user.email +
//       " , role : " +
//       req.user.role
//   );
// });

// app.get("/user/:id/edit", loadUser, andRestrictToSelf, function (req, res) {
//   res.send("Editing user " + req.user.name);
// });

// app.delete("/user/:id", loadUser, andRestrictTo("admin"), function (req, res) {
//   res.send("Deleted user " + req.user.name);
// });

let port = process.env.PORT || 6969;
//port === undefined => port = 6969
app.listen(port, () => {
  //callback
  console.log("Backend nodejs is running on the port: " + port);
});
