


let indexController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
      },

    searchResults: function(req, res, next) {
        res.render('search-results', { title: 'Express' });
      },

}



module.exports = indexController;