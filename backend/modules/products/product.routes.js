const express = require('express');
const router = express.Router();
const { createNewProduct, getAllProducts, getProductDetail, updateProduct, deleteProduct } = require('./product.controller');
const { authenticateUser, authorise } = require('../../authentication/auth');

router.route('/').get(getAllProducts);
router
  .route('/:id')
  .get(getProductDetail)
router.route('/admin/create').post(authenticateUser, authorise, createNewProduct);
router.route('/admin/:id').put(authenticateUser, authorise,updateProduct).delete(authenticateUser, authorise, deleteProduct);

module.exports = router;
