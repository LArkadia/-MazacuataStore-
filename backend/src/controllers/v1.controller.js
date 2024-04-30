const service = require("../services/user.service");

const hello = async (req, res) => {
  service.helloUser();
  return res.send("Hola mundo");
};

module.exports = { hello };
