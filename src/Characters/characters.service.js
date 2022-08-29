const films = require('./characters.model.js');

const findCreateFilmsFilmsService =  async ( name, imageUrl, userId) => {
 return films.create({name, imageUrl, user: userId});
};
const findAllFilmsFilmsService = async () => {
  const allFilms = await films.find();
  return allFilms;
};
const FindByIdFilmsService = async (idParameter) => {
  const IdFilms = await films.findById(idParameter);
  return IdFilms;
};

const findEditFilmsFilmsService = async (idParameter, newEdit) => {
  const editMovie = await films.findByIdAndUpdate(idParameter, newEdit);
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
