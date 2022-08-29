const route = require('express').Router();
const controllerFilms = require('./characters.controller');
const authMiddleware = require('../Auth/auth.middleware.js')

route.get('/', authMiddleware, controllerFilms.findAllFilmsController);
route.get('/find/:id',authMiddleware, controllerFilms.findByIdFilmsController);
route.post('/create', authMiddleware, controllerFilms.findCreateFilmsController,
);
route.put('/update/:id',authMiddleware, controllerFilms.findEditFilmsController,
);
route.delete('/delete/:id',authMiddleware, controllerFilms.findDeletFilmsController);
route.get('/search', controllerFilms.searchfilmssController)

module.exports = route;
