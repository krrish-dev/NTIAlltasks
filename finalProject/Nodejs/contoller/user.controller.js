const userModel = require("../models/user.model");
const errorHandler = require("../helpers/errorHandler");
const errorAuthHandler = require("../helpers/errorAuthHandler");
const successHandler = require("../helpers/successHandler");
const sendEmailMe = require("../helper/sendEmail.helper");

const bcrypt = require("bcryptjs");
class User {
  static register = async (req, res) => {
    try {
      const user = await new userModel(req.body);
      await user.generateToken();
      await user.save();
      sendEmailMe(user.email)
      successHandler(user, res, "User registered successfully");
    } catch (err) {
      errorAuthHandler(err, res);
    }
  };

  static login = async (req, res) => {
    try {
      const user = await userModel.loginUser(req.body.email, req.body.password);
      await user.generateToken();
      await user.save();
      successHandler(user, res, "User logged in successfully ♥");
    } catch (err) {
      errorAuthHandler(err, res);
    }
  };
  static profileShow = async (req, res) => {
    res.send(req.user);
  };
  static changeImage = async (req, res) => {
    try {
      let user = await userModel.findByIdAndUpdate(req.user._id, {
        $set: {
          profilePic: "uploads/" + req.user._id + "/" + req.file.filename,
        },
      });
      if (!user) throw new Error("upload failed");
      successHandler(
        "uploads/" + req.user._id + "/" + req.file.filename,
        res,
        "image uploaded successfully"
      );
    } catch (err) {
      errorHandler(err, res);
    }
  };
  static profileEdit = async (req, res) => {
    try {
      let user = await userModel.findByIdAndUpdate(req.user._id, {
        $set: req.body,
      });
      if (!user) throw new Error("user not found");
      successHandler(user, res, " profile is edited successfully");
    } catch (err) {
      errorHandler(err, res);
    }
  };
  static passwordEdit = async (req, res) => {
    try {
      const validPassword = await bcrypt.compare(
        req.body.oldPassword,
        req.user.password
      );

      if (validPassword) {
        req.user.password = req.body.newPassword;
        await req.user.save();
        successHandler(req.user, res, " password is edited successfully");
      } else throw Error("Incorrect Password");
    } catch (err) {
      errorAuthHandler(err, res);
    }
  };
  static profileDelete = async (req, res) => {
    try {
      let user = await userModel.findByIdAndDelete(req.user._id);
      if (!user) throw new Error("user not found");
      successHandler(null, res, " profile is deleted successfully");
    } catch (err) {
      errorHandler(err, res);
    }
  };
  static editUser = async (req, res) => {
    try {
      let user = await userModel.updateOne(
        { _id: req.params.id, role: "User" },
        { $set: req.body }
      );
      if (!user) throw new Error("user not found");
      successHandler(user, res, " User is edited successfully");
    } catch (err) {
      errorHandler(err, res);
    }
  };
  static delUser = async (req, res) => {
    try {
      let user = await userModel.deleteOne({
        _id: req.params.id,
        role: "User",
      });
      if (!user) throw new Error("user not found");
      successHandler(null, res, " User is deleted successfully");
    } catch (err) {
      errorHandler(err, res);
    }
  };
  static logout = async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((t) => t.token != req.token);
      await req.user.save();
      successHandler(null, res, "User logged out successfully");
    } catch (err) {
      errorHandler(err, res);
    }
  };
  static logoutAll = async (req, res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      successHandler(
        null,
        res,
        "User logged out from all devices successfully"
      );
    } catch (err) {
      errorHandler(err, res);
    }
  };
  
}
module.exports = User;
