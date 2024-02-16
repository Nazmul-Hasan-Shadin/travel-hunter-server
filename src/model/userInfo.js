const { Schema, default: mongoose } = require("mongoose");

const userInfoSchema = new Schema(
  {
    name: {
      type: String,
      required: [
        function () {
          this.name !== null;
        },
        "user name is required",
      ],
    },
    email: {
      type: String,
      required: [
        function () {
          this.email !== null;
        },
        "email is required",
      ],
    },
    password: {
      type: String,
      required: [
        function () {
          this.password !== null;
        },
        "password is required",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const UserInfo = mongoose.model("UserInfo", userInfoSchema);
module.exports = UserInfo;
