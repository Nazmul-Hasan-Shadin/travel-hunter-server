const UserInfo = require("../../model/userInfo");

const bcrypt = require("bcrypt");

const SignIn = async (req, res) => {
  const signInfo = req.body;
  console.log(signInfo);
  //   check exist data
  if (!signInfo.email || !signInfo.password || !signInfo.name) {
    return res.status(404).json({ message: "All field is required" });
  }
  //    check for duplicate email
  const duplicate = await UserInfo.findOne({ email: signInfo.email }).exec();
  console.log(duplicate);
  if (duplicate) {
    return res.status(409).json({ message: "user already exist" });
  }
  //   hash password

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(signInfo.password, salt);
  signInfo.password = hash;

  const userInformation = new UserInfo(signInfo);
  const result = await userInformation.save(signInfo);
  res.json({ message: result });
};

module.exports = SignIn;
