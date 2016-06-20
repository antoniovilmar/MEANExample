module.exports = function(uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://'+uri);

    mongoose.connection.on('connected', function() {
        console.log('Connected DB');
    });

    mongoose.connection.on('error', function(error) {
        console.log('Connection error ' + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Disconnected DB ');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('closed application');
            process.exit(0);
        });
    });

};
