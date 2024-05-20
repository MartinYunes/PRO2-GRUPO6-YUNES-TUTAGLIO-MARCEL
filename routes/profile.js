var express = require('express');
var router = express.Router();

let profileController = require('../controllers/profileController')



///profile/profile-edit
router.get('/profile-edit',profileController.profileEdit);

///profile/register
  router.get('/register', profileController.register);

  router.post('/register', profileController.store);

///profile/login
  router.get('/login',profileController.login );

  router.post('/partials/headerLogueado', profileController.logout);

///profile/"un id del usuario"
router.get('/:id', profileController.profile);






module.exports = router;