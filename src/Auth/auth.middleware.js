require('dotenv').config();
const jwt = require('jsonwebtoken');
const auth = require('./auth.service');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'the token needs to be informed' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({ message: 'Token invalid!' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Token badly formatted!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await auth.findUserById(decoded.id);

    if (err || !user || !user.id) {
      return res.status(401).send({ message: 'Token invalid!' });
    }

    req.userId = user.id;

    return next();
  });
};
