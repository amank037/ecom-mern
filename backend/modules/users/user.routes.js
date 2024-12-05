const express = require('express');
const router = express.Router();
const { registerNewUser, login, logout, getAllUsers, getProfile, changePassword, getUserDetails, deleteUser, forgetPassword, updatePassword, uploadImage } = require('./user.controller');
const { authenticateUser, authorise} = require('../../authentication/auth');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.route('/').post(registerNewUser);
router.route('/login').post(login);
router.route('/logout').put(logout);
router.route('/profile').get(authenticateUser, getProfile)//.put(updateProfile);
router.route('/resetPassword'). put(authenticateUser, changePassword);
router.route('/forgotPassword').put(forgetPassword)
router.route('/admin/:id').get(getUserDetails).delete(deleteUser);
router.route('/admin/users').get(authenticateUser, authorise, getAllUsers);
router.route('/updatePassword').put(authenticateUser, updatePassword);
router.route('/upload').put(upload.single('file'), uploadImage);

module.exports = router;
