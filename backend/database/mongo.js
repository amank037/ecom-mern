const mongoose = require('mongoose');


function connectDatabase() {
  mongoose.connect('mongodb://127.0.0.1:27017/ecom')
  .then(() => console.log('Connected to mongodb!'))
  .catch((error)=> console.log(error));
}


module.exports = {
  connectDatabase
}
