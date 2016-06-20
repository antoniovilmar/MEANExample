var api = {};
var CONTADOR = 2;
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

api.removePorId = function(req, res) {
    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    res.sendStatus(204);
}

api.adiciona = function(req, res) {
    var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);

    res.json(foto);

}

api.atualiza = function(req, res){

    var foto = req.body;
    var fotoId = req.params.id;

    var indice = fotos.findIndex(function(foto){
        return foto._id == fotoId;
    })

    fotos[indice] = foto;
    res.sendStatus(200);

};

module.exports = api;
