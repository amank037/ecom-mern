const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is necessary to create product'],
    min: 1,
    max: [10000, 'Price can not be greater than 10000'],
  },
  description: {
    type: String,
    required: false,
  },
  reviews: [
    {
       name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: false,
      },
      rating: {
        type: Number,
        required: true,
      },
      givenOn: {
        type: Date,
        required: true,
        default: Date.now(),
      }
    }
  ],
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  avgRating: {
    type: Number,
    required: true,
    default: 0
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'Users',
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Products', productSchema);
