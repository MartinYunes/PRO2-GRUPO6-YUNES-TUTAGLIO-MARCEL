var express = require('express');
var router = express.Router();

let profileController = require('../controllers/profileController')


///profile
router.get('/:id', profileController.profile);

///profile/profile-edit
router.get('/profile-edit',profileController.profileEdit);

///profile/register
  router.get('/register', profileController.register);

///profile/login
  router.get('/login',profileController.login );








module.exports = router;