const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail, isMobilePhone } = require('validator');

const salt = bcrypt.genSaltSync(10);

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    //validate: [isEmail, 'Given email is not valid one'],
    //unique: [true, 'Email already exists please login']
  },
  phone: {
    type: String,
    required: [true, 'Mobile is required'],
    //validate: [isMobilePhone, 'Given mobile number is not valid one'],
    //unique: [true, 'Mobile already exists please login']
  },
  profilePic: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true,
  },
  securityQuestion: {
    type: String,
    required: false,
  },
  securityAnswer: {
    type: Date,
    required: false,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: [
      'user',
      'admin',
    ]
  }
}, { timestamps: true});

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    console.log("check1");
    next();
  }
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('Users', userSchema);
