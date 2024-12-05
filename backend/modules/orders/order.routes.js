const express = require('express');
const router = express.Router();
const { } = require('./order.controller');
const { authenticateUser, authorise } = require('../../authentication/auth');

router.route('/create').post(authenticateUser, createNewOrder);
router.route('/').get(authenticateUser, getMyOrders);
router.route('/id').get(authenticateUser, getOrderDetail).put(authenticateUser, authorise, updateOrder);
router.route('/admin').get(authenticateUser, authorise, getAllOrder)

module.exports = router;
