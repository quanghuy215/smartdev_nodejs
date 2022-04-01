let getHomePage = (req, res) => {
    return res.render("homepage.ejs");
  };
  let getLoginPage = (req, res) => {
    return res.render("login.ejs");
  };
  let getRegisterPage = (req, res) => {
    return res.render("register.ejs");
  };
  
  
  
  
  
  
  
  
  module.exports = {
    getHomePage: getHomePage,
    getLoginPage: getLoginPage,
    getRegisterPage: getRegisterPage,
  
  };
  