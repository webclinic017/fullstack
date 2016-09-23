/**
 * Express configuration
 */

'use strict';

var express = require('express');
// var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var lusca = require('lusca');
var config = require('./environment');
var session = require('express-session');
var expressSequelizeSession = require('express-sequelize-session');

var Store = expressSequelizeSession(session.Store);

module.exports = function (app) {
    var env = app.get('env');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    // app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));

    // Persist sessions with mongoStore / sequelizeStore
    // We need to enable sessions for passport-twitter because it's an
    // oauth 1.0 strategy, and Lusca depends on sessions
    //app.use(session({
    //    secret: config.secrets.session,
    //    saveUninitialized: true,
    //    resave: false
        // store: new Store(sqldb.sequelize)
   // }));

    /**
     * Lusca - express server security
     * https://github.com/krakenjs/lusca
     */
   // app.use(lusca({
    //    csrf: {
     //       angular: true
      //  },
       // xframe: 'SAMEORIGIN',
       // hsts: {
       //     maxAge: 31536000, //1 year, in seconds
       //     includeSubDomains: true,
       //     preload: true
       // },
      //  xssProtection: true
    //}));

    if ('development' === env) {
        app.use(require('connect-livereload')());

        app.set('views', config.root + '/client/views');

        app.set('clientPath', path.join(config.root, 'client'));
        app.use('/activity', express.static(config.root + '/activity', {
            maxage: "30d"
        }));
        app.use('/white_label', express.static(config.root + '/server/config/white_label/images', {
            maxage: "30d"
        }));
        app.use(express.static(app.get('clientPath')));
        app.use(express.static(path.join(config.root, '.tmp')));

        app.use(morgan('dev'));

        app.use(errorHandler()); // Error handler - has to be last
    }

    if ('production' === env) {
        app.set('views', config.root + '/dist/views');

        app.set('clientPath', path.join(config.root, 'dist'));
        app.use('/activity', express.static(config.root + '/activity', {
            maxage: "30d"
        }));
        app.use(express.static(app.get('clientPath'),{
            maxage : "30d",
            setHeaders : function(res, path){
                //对dist/views/里的文件不做缓存处理。因为目前没有做md5
                var pathIgnore = app.get('clientPath') + '/views/';
                if(path.indexOf(pathIgnore) != -1){
                    res.setHeader('Cache-Control', 'public, max-age=10');
                }
            }
        }));

        app.use(morgan('dev'));
    }
};