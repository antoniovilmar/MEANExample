module.exports = function(app) {
    app.get('/v1/fotos', function(req, res) {
        var fotos = [{
            _id: 1,
            titulo: 'Leão',
            url: 'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg?fit=2560%2C1600'
        }, {
            _id: 2,
            titulo: 'Leão2',
            url: 'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg?fit=2560%2C1600'
        }];
        res.json(fotos);
    });
}
