'use strict';

module.exports = function(app) {
    var json1 = require('./controller');

    app.routes('/')
        .gets(json1.index);
}