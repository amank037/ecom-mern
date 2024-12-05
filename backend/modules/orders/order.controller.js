const OrderModel = require('../../models/order.model');

async function createNewOrder(req,res) {
  try {
    const {
      address,
      items,
      tax,
      totalAmount,
      totalAmountWithTax,
    } = req.body;
    const { _id: userId } = req.user;
    const order = new OrderModel({
      address,
      items,
      tax,
      totalAmount,
      totalAmountWithTax,
      user: userId
    });
    await order.save();
    return res.status(201).json({
      order,
      message: 'order made successfully'
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function getOrders(req,res) {
  try {
    const { _id: userId } = req.user;
    const orders = await OrderModel.findOne({ user: userId });
    return res.status(201).json({
      orders,
      message: 'orders fetched successfully'
    });
   } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function getAllOrders(req,res) {
  try {
    const orders = await OrderModel.findOne({ });
    return res.status(201).json({
      orders,
      message: 'orders fetched successfully'
    });
   } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}

async function getOrderDetail(req,res) {
  try {
    const { id } = req.params;
    const order = await OrderModel.findOne({ _id: id });
    if(!order) {
      throw new Error('order does not exists');
    }
    return res.status(201).json({
      order,
      message: 'Order fetched successfully'
    });
   } catch (error) {
    return res.status(400).json({
      message: error.message || 'Something went wrong',
      error,
    })
  }
}
