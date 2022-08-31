const user = require('../Users/users.model');
const jwt = require('jsonwebtoken');

const authLoginService = (email) =>
  user.findOne({ email: email }).select('+password');

const findUserById = async (userId) => {
  return await user.findOne({ _id: userId }).select('+password');
};

const generateToke = (idUser) =>
  jwt.sign({ id: idUser }, process.env.SECRET, { expiresIn: 86240 });

module.exports = {
  authLoginService,
  generateToke,
  findUserById,
};
