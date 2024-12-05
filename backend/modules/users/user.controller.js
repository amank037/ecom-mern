const UserModel = require('../../models/user.model');
const { genrateToken } = require('../../authentication/auth');
const bcryptjs = require('bcryptjs');
const  cloudinary = require('cloudinary');
const fs = require('fs');

async function registerNewUser(req, res) {
  try {
    const { name, email, phone, password, securityQuestion, securityAnswer, profilePic } =
      req.body;
    const user = new UserModel({
      name,
      email,
      phone,
      password,
      securityQuestion,
      securityAnswer,
      profilePic
    });
    await user.save();
    const userObj = JSON.parse(JSON.stringify(user));
    const token = genrateToken(userObj);
    const option = {
      Expire: new Date(Date.now + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(201).cookie('token', token, option).json({
      user,
      message: 'User created successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function login(req, res) {
  try {
    const { userName, password } = req.body;
    const user = await UserModel.findOne({
      $or: [
        {
          email: userName,
        },
        {
          phone: userName,
        },
      ],
    });
    if (!user) {
      throw new Error('UserName does not exists');
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      throw new Error('Either username or password invalid');
    }
    const token = genrateToken(JSON.parse(JSON.stringify(user)));
    const option = {
      Expire: new Date(Date.now + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(201).cookie('token', token, option).json({
      message: 'User login successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function logout(req, res) {
  try {
    return res.status(200).cookie('token', null).json({
      message: 'Log out successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    const { pageNo = 1, limit = 10 } = req.query;
    const skip = (pageNo - 1) * limit;
    const userCount = await UserModel.count({});
    const users = await UserModel.find().limit(limit).skip(skip);
    return res.status(201).json({
      userCount,
      users,
      message: 'User fetched successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function getProfile(req, res) {
  try {
    return res.status(201).json({
      profile: req.user,
      message: 'User fetched successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function changePassword(req, res) {
  try {
    const { oldPassword, newPassword } = req.body;
    const { password } = req.user;
    if (!bcryptjs.compareSync(oldPassword, password)) {
      throw new Error("Password dos't matched");
    }
    const user = await UserModel.findOneAndUpdate(
      {
        _id: req.user._id,
      },
      { $set: { password: newPassword } }
    );
    const token = genrateToken(JSON.parse(JSON.stringify(user)));
    const option = {
      Expire: new Date(Date.now + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(201).cookie('token', token, option).json({
      profile: user,
      message: 'User updated successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function getUserDetails(req, res) {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      throw new Error('user does not exists');
    }
    return res.status(201).json({
      user,
      message: 'user fetched successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      throw new Error('user does not exists');
    }
    const data = await UserModel.deleteOne({ _id: id });
    return res.status(201).json({
      data,
      message: 'user deleted successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function forgetPassword(req, res) {
  try {
    const { securityAnswer, securityQuestion, email } = req.body;

    const user = await UserModel.findOne({
      email,
    });
    if (!user) {
      throw new Error('Email does not exists, please register');
    }
    if (user.question === securityQuestion) {
      throw new Error('try some other question');
    }
    if (user.securityAnswer !== securityAnswer) {
      throw new Error('Wrong answer');
    }
    const token = genrateToken(JSON.parse(JSON.stringify(user)));
    const option = {
      Expire: new Date(Date.now + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(201).cookie('token', token, option).json({
      message: 'User verified enter password to reset',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function updatePassword(req,res) {
  try {
    const { password } = req.body;
    await UserModel.updateMany({
      _id: req.user._id,
    }, { $set: { password }});
    return res.status(201).cookie('token', null, {}).json({
      message: 'Password updated successfully please login',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

async function uploadImage(req,res) {
  try {
    const { path } = req.file
    const data = await cloudinary.v2.uploader.upload(path);
    await fs.unlinkSync(path);
    return res.status(201).cookie('token', null, {}).json({
      data,
      message: 'image uploaded successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    });
  }
}

module.exports = {
  registerNewUser,
  login,
  logout,
  getAllUsers,
  getProfile,
  changePassword,
  getUserDetails,
  deleteUser,
  forgetPassword,
  updatePassword,
  uploadImage
};
