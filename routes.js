'use strict';

module.exports = function(app) {
    var json1 = require('./controller');

    app.route('./')
        app.gets(json1.index);
}