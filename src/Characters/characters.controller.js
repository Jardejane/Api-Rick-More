const mongoose = require('mongoose');
const filmsService = require('./characters.service');

const findAllFilmsController = async (req, res) => {
  //adicionados limit e offset
  const { limit, offset } = req.query;
  const films = await filmsService.findAllFilmsFilmsService(limit, offset);
  if (films.length == 0) {
    return res.status(404).send({ Message: 'No to registered movies ' });
  }
  res.send(films);
};
const findByIdFilmsController = async (req, res) => {
  const idParameter = req.params.id;
  const seachMovies = await filmsService.FindByIdFilmsService(idParameter);
  res.send(seachMovies);
  console.log(seachMovies);
};
const findCreateFilmsController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    if (!name && !imageUrl) {
      res.status(404).send({ message: 'envie todo os dados' });
    }

    const { id } = await filmsService.findCreateFilmsFilmsService(
      name,
      imageUrl,
      req.userId,
    );

    return res.send({
      message: 'film criado com sucesso',
      film: { id, name, imageUrl },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const findEditFilmsController = async (req, res) => {
  const idParameter = await req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParameter)) {
    return res.status(400).send({ message: 'Id invalid!' });
  }
  const newEdit = req.body;
  const upgrad = await filmsService.findEditFilmsFilmsService(
    idParameter,
    newEdit,
  );
  return res.send(upgrad);
};

const findDeletFilmsController = async (req, res) => {
  const idParameter = await req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParameter)) {
    return res.status(400).send({ message: 'Id invalid!' });
  }

  await filmsService.findDeleteFilmsFilmsService(idParameter);
  res.send({ aviso: 'sucess film delete' });
};
const searchfilmssController = async (req, res) => {
  try {
    //nome está em req.query.name, não no body
    const name = req.query.name;

    const searchedChar = await filmsService.searchfilmssService(name);
    if (!searchedChar) {
      res.status(404).send({ message: 'Name not Found' });
    } else {
      res.status(200).send(searchedChar);
    }
  } catch (err) {
    res.status(404).send({ message: 'Error finding character' });
  }
};
module.exports = {
  findAllFilmsController,
  findByIdFilmsController,
  findCreateFilmsController,
  findEditFilmsController,
  findDeletFilmsController,
  searchfilmssController,
};
