const ProductModel = require('../../models/product.model');

async function createNewProduct(req,res) {
  try {
    const {
      name,
      price,
      description,
      stock,
      category,
      image
    } = req.body;
    const { _id: userId } = req.user;
    const product = new ProductModel({
      name,
      price,
      description,
      stock,
      category,
      createdBy: userId,
      image
    });
    await product.save();
    return res.status(201).json({
      product,
      message: 'Product made successfully'
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function getAllProducts(req,res) {
  try {
    const {
      pageNo = 1,
      limit = 10,
      category,
      rating,
      priceAbove,
      priceBelow
    } = req.query;
    const skip = (pageNo-1)*limit;
    const where = {};
    if(category){
      where.category = category
    }
    if(rating){
      where.rating = { $gte: rating }
    }
    if(priceAbove) {
      where.price = {$gte: priceAbove }
    }
    if(priceBelow) {
      where.price = {$lte: priceBelow }
    }
    const productCount = await ProductModel.count(where);
    const products = await ProductModel.find(where).limit(limit).skip(skip);
    return res.status(201).json({
      productCount,
      products,
      message: 'Product fetched successfully'
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function getProductDetail(req,res) {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id });
    if(!product) {
      throw new Error('product does not exists');
    }
    return res.status(201).json({
      product,
      message: 'Product fetched successfully'
    });
   } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function updateProduct(req,res) {
  try {
    const { id } = req.params;
  const {
    name,
    price,
    description,
    stock,
  } = req.body;
  const product = await ProductModel.findOne({_id: id });
  if(!product) {
    throw new Error('product does not exists');
  }
  if(name){
    product.name = name;
  }
  if(price){
    product.price = price;
  }
  if(description){
    product.description = description;
  }
  if(stock){
    product.stock = stock;
  }
  await product.save();
  return res.status(201).json({
    product,
    message: 'Product updated successfully'
  });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function deleteProduct(req,res) {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id });
    if(!product) {
      throw new Error('product does not exists');
    }
    const data = await ProductModel.deleteOne({ _id: id });
    return res.status(201).json({
      data,
      message: 'Product deleted successfully'
    });
   } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

module.exports = {
  createNewProduct,
  getAllProducts,
  getProductDetail,
  updateProduct,
  deleteProduct
}
