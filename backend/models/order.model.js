const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    ciy: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  items: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Products'
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    }
  ],
  tax: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  totalAmountWithTax:{
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: 'processing'
  },
  mop: {
    type: String,
    required: true,
    default: 'COD'
  },
  deliveryDate: {
    type: Date,
    required: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Users'
  }
}, { timestamps: true });

module.exports = mongoose.model('Orders', orderSchema);
