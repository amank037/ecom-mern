const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { connectDatabase } = require('./database/mongo');
const productRoutes = require('./modules/products/product.routes');
const userRoutes = require('./modules/users/user.routes');
const  { v2: cloudinary } = require('cloudinary');
          
cloudinary.config({ 
  cloud_name: 'djkv2bowt', 
  api_key: '972575652956435', 
  api_secret: 'l1i7r3hfU32ezmL0v388zYndDkI' 
});

connectDatabase();
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);




app.listen(3000, ()=> {
  console.log('server started on port ', 3000);
})
