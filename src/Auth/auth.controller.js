const authService = require('./auth.service');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const authLoginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.authLoginService(email);

  if (!user) {
    return res.status(400).send({
      message: 'User not found',
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).send({ message: 'Invalid password' });
  }

  const token = authService.generateToke(user.id);

  res.send({ token });
};

module.exports = {
  authLoginController,
};
