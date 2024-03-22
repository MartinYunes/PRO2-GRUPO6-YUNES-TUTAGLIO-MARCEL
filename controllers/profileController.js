

let profileController = {

    profile:function(req, res, next) { 
        res.render('profile', { title: 'Express' });
      },



    profileEdit:  function(req, res, next) {
        res.render('profile-edit', { title: 'Express' });
      },



    register: function(req, res, next) {
        res.render('register', { title: 'Express' });
      },



    login:function(req, res, next) {
        res.render('login', { title: 'Express' });
      },
}


module.exports = profileController;