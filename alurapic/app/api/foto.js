var api = {};
var fotos = [{
    _id: 1,
    titulo: 'Leão',
    url: 'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg?fit=2560%2C1600'
}, {
    _id: 2,
    titulo: 'Leão2',
    url: 'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg?fit=2560%2C1600'
}];

api.lista = function(req, res) {

    res.json(fotos);
}

api.buscaPorId = function(req, res) {
    var foto = fotos.find(function(foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
}

module.exports = api;
