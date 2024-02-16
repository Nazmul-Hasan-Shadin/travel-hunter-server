const bcrypt = require("bcrypt");
const UserInfo = require("../../model/userInfo");

const LoginAuthentication = async (req, res) => {
  const loginCredential = req.body;
  console.log(loginCredential);
  const plainPassword = loginCredential.password;
  if (!loginCredential.email || !loginCredential.password) {
    return res.status(401).json({ message: "Incorrect Login Credential" });
  }

  try {
    const authenticateUser = await UserInfo.findOne({
      email: loginCredential.email,
    }).exec();
    if (authenticateUser) {
      const authenticatePassword = authenticateUser.password;

      const comparePass = await bcrypt.compare(
        plainPassword,
        authenticatePassword
      );
      if (comparePass) {
        return res.status(201).json({
          message: "user logged in successful",
          email: loginCredential.email,
          success: true,
        });
      } else {
        return res
          .status(401)
          .json({ message: "The password or email incorrect" });
      }
    }
    return res.status(404).json({ message: "user not found" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = LoginAuthentication;
