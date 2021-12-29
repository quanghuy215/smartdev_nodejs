import userServices from "../services/userServices";

let registerUser = async (req, res) => {
  try {
    let data = await userServices.registerUser(req.body);
    if (data && data.errCode === 0) {
      console.log(data.msg);
      return res.redirect("/login");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: -1,
      msg: e.message,
    });
  }
};
let handleLoginUser = async (req, res) => {
  try {
    let data = await userServices.handleLoginUser(req.body);
    console.log("check data : ", data.user.name);
    let name = data.user.name;
    if (data && data.errCode === 0) {
      // console.log("errCode : ", data.errCode);
      // console.log("msg : ", data.msg);
      console.log("Login success!!!");
      return res.redirect("/home");
    }
    if (data && data.errCode === 1) {
      console.log("User does not exist!!!");
      return res.redirect("/login");
    }
    if (data && data.errCode === 2) {
      console.log("Incorrect password!!!");
      return res.redirect("/login");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      errCode: -1,
      msg: e.message,
    });
  }
};

module.exports = {
  registerUser: registerUser,
  handleLoginUser: handleLoginUser,
};
