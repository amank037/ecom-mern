const jwt = require('jsonwebtoken');
const { model } = require('mongoose');
const secretKey = 'regex';
const authorisedRoles = [
  'admin'
]

function genrateToken(params) {
  const token = jwt.sign(params, secretKey);
  return token;
}

function authenticateUser(req,res,next) {
  try {
    const { token } = req.cookies;
    if(!token) {
      throw new Error('please login')
    }
    const decoded = jwt.verify(token, secretKey);
    if(!decoded){
      throw new Error('Please login again');
    }
    req.user = decoded;
    next();
    return;
  } catch (error) {
    return res.status(401).json({
      message: "Please login"
    })
  }
}

function authorise(req,res,next) {
  try {
    const { role } = req.user;
    console.log(req.user);
    for(let authRole of authorisedRoles) {
      if(authRole == role){
        console.log("check1");
        return next();
      }
    };
    throw new Error('Fail to authorise the user');
  } catch(error) {
    return res.status(401).json({
      message: "Fail to authorize please login again"
    })
  }
}

module.exports = {
  genrateToken,
  authenticateUser,
  authorise
}
