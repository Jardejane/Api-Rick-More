const films = require('./characters.model.js');

const findCreateFilmsFilmsService = async (name, imageUrl, userId) => {
  return films.create({ name, imageUrl, user: userId });
};
const findAllFilmsFilmsService = async (limit, offset) => {
  //adicionados limite e offset, conforme pedido no projeto
  const allFilms = await films.find().skip(offset).limit(limit);
  return allFilms;
};
const FindByIdFilmsService = async (idParameter) => {
  const IdFilms = await films.findById(idParameter);
  return IdFilms;
};

//adicionado parãmetro para mostrar o character novo
const findEditFilmsFilmsService = async (idParameter, newEdit) => {
  const editMovie = await films.findByIdAndUpdate(idParameter, newEdit, {
    new: true,
  });
  return editMovie;
};

const findDeleteFilmsFilmsService = async (idParameter) => {
  return await films.findByIdAndDelete(idParameter);
};
const searchfilmssService = async (name) => {
  return await films.findOne({ name: name });
};

module.exports = {
  findAllFilmsFilmsService,
  FindByIdFilmsService,
  findCreateFilmsFilmsService,
  findEditFilmsFilmsService,
  findDeleteFilmsFilmsService,
  searchfilmssService,
};
