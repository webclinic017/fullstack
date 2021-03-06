// Generated on 2016-02-19 using generator-angular-fullstack 3.3.0
'use strict';

module.exports = function (grunt) {
    var localConfig;
    var CDN_URL = '';
    var path = require("path");
    try {
        localConfig = require('./server/config/local.env');
    } catch (e) {
        localConfig = {};
    }

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        useminPrepare: 'grunt-usemin',
        // cdnify: 'grunt-google-cdn'
    });
    // require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        pkg: grunt.file.readJSON('package.json'),

        yeoman: {
            // configurable paths
            client: 'client',
            server: 'server',
            dist: 'dist'
        },

        env: {
            test: {
                NODE_ENV: 'test'
            },
            prod: {
                NODE_ENV: 'production'
            },
            all: localConfig
        },

        express: {
            options: {
                port: process.env.PORT || 9000
            },
            app: {
                options: {
                    script: '<%= yeoman.server %>'
                }
            }
        },

        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
            }
        },

        watch: {
            sass: {
                files: ['<%= yeoman.client %>/styles/**/*.{scss,sass}'],
                tasks: ['sass']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                files: [
                    '<%= yeoman.client %>/{views,scripts}/**/*.{html,js}',
                    '.tmp/**/*.css',
                    '<%= yeoman.client %>/{images,ngsrc}/**/*.{png,jpg,jpeg,gif,svg}'
                ],
                options: {
                    livereload: true
                }
            },
            express: {
                files: ['<%= yeoman.server %>/**/*.{js,json}'],
                tasks: ['express', 'wait'],
                options: {
                    livereload: true,
                    spawn: false //Without this option specified express won't be reloaded
                }
            },
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/!(.git*|.openshift|Procfile)**'
                    ]
                }]
            },
            app: '.tmp'
        },

        // Automatically inject Bower components into the app
        // you can inject wherever you want
        // but you must put <!-- bower:js --> and <!-- endbower --> tags in which page you want inject into;
        wiredep: {
            options: {
                exclude: []
            },
            app: {
                src: ['<%= yeoman.client %>/views/**/*.html'],
                fileTypes: {
                    html: {
                        replace: {
                            js: function (filePath) {
                                var filePathArr = filePath.split('..');
                                var jsPath = filePathArr[filePathArr.length - 1];
                                console.log('-------bower injector jsPath-------',jsPath)
                                return '<script src="' + jsPath + '"></script>';
                            },
                            css: function (filePath) {
                                var filePathArr = filePath.split('..');
                                var cssPath = filePathArr[filePathArr.length - 1];
                                console.log('-------bower injector cssPath-------', cssPath)
                                return '<link rel="stylesheet" href="' + cssPath + '">';
                            }
                        }
                    }
                }
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            dist: [
                'sass',
                // 'imagemin'
            ]
        },

        // The following *-min tasks produce minified files in the dist folder
        /**
         * This task has been removed in build task!!!!!!
         */
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.client %>',
                    src: '{images,ngsrc}/{,*/}*.{png,jpg,jpeg,gif,svg}',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // Compiles Sass to CSS
        sass: {
            app: {
                options: {
                    compass: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.client %>/styles',
                    src: ['*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: ['<%= yeoman.client %>/views/**/*.html'],
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/!(bower_components){,*/}*.{js,css}',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,svg}'
                ]
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/views/**/*.html'],
            css: ['<%= yeoman.dist %>/styles/**/*.css'],
            // js: ['<%= yeoman.dist %>/scripts/**/*.js'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>',
                    '<%= yeoman.dist %>/images',
                    '<%= yeoman.dist %>/scripts',
                    '<%= yeoman.dist %>/styles'
                ],
                // This is so we update image references in our ng-templates
                // patterns: {
                //     js: [
                //         [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
                //     ]
                // }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.dist %>',
                        src: ['views/**/*.html'],
                        dest: '<%= yeoman.dist %>'
                    }
                ]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat',
                    src: '**/*.js',
                    dest: '.tmp/concat'
                }]
            }
        },

        // The task looks through your specified files for URLs to rewrite
        cdnify: {
            dist: {
                options: {
                    // base: '//cdn.example.com/static/'
                    rewriter: function (url) {
                        if (url.indexOf('http') != -1 || url.indexOf('/fonts/') != -1) {
                            console.log(url);
                            return url;
                        }
                        // console.log('----- grunt-cdnify maped url -----', url)
                        return CDN_URL + url;
                        // return url;
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '**/*.{css,html}',
                    dest: 'dist'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.client %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            'views/**/*.html',
                            'images/**/*.*',
                            '*.ico',
                            '*.html',
                            '*.xml',
                            'fonts/**/*.*',
                            'ngsrc/*.*',
                            'plugins/**'
                        ]
                    }, {
                        expand: true,
                        cwd: '<%= yeoman.client %>/bower_components/mediaelement/build/',
                        src: 'flashmediaelement.swf',
                        dest: '<%= yeoman.dist %>/scripts/'
                    }
                ]
            }
        },

        // Compiles ES6 to JavaScript using Babel
        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015'],
                optional: [
                    'es7.classProperties'
                ]
            },
            client: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.client %>',
                    src: ['{app,components}/**/!(*.spec).js'],
                    dest: '.tmp'
                }]
            },
            server: {
                options: {
                    optional: ['runtime']
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.server %>',
                    src: ['**/*.js'],
                    dest: '<%= yeoman.dist %>/<%= yeoman.server %>'
                }]
            }
        },

        injector: {
            options: {},
            // Inject application script files into index.html (doesn't include bower)
            scripts: {
                options: {
                    transform: function (filePath) {
                        var yoClient = grunt.config.get('yeoman.client');
                        filePath = filePath.replace('/' + yoClient + '/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<script src="' + filePath + '"></script>';
                    },
                    sort: function (a, b) {
                        var module = /\.module\.js$/;
                        var aMod = module.test(a);
                        var bMod = module.test(b);
                        // inject *.module.js first
                        return (aMod === bMod) ? 0 : (aMod ? -1 : 1);
                    },
                    starttag: '<!-- injector:js -->',
                    endtag: '<!-- endinjector -->'
                },
                files: {
                    '<%= yeoman.client %>/index.html': [
                        [
                            '<%= yeoman.client %>/{app,components}/**/!(*.spec|*.mock).js',
                            '!{.tmp,<%= yeoman.client %>}/app.{js,ts}'
                        ]
                    ]
                }
            },

            // Inject component scss into app.scss
            sass: {
                options: {
                    transform: function (filePath) {
                        var yoClient = grunt.config.get('yeoman.client');
                        filePath = filePath.replace('/' + yoClient + '/app/', '');
                        filePath = filePath.replace('/' + yoClient + '/components/', '../components/');
                        return '@import \'' + filePath + '\';';
                    },
                    starttag: '// injector',
                    endtag: '// endinjector'
                },
                files: {
                    '<%= yeoman.client %>/app/app.scss': [
                        '<%= yeoman.client %>/{app,components}/**/*.{scss,sass}',
                        '!<%= yeoman.client %>/app/app.{scss,sass}'
                    ]
                }
            },

            // Inject component css into index.html
            css: {
                options: {
                    transform: function (filePath) {
                        var yoClient = grunt.config.get('yeoman.client');
                        filePath = filePath.replace('/' + yoClient + '/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<link rel="stylesheet" href="' + filePath + '">';
                    },
                    starttag: '<!-- injector:css -->',
                    endtag: '<!-- endinjector -->'
                },
                files: {
                    '<%= yeoman.client %>/index.html': [
                        '<%= yeoman.client %>/{app,components}/**/*.css'
                    ]
                }
            }
        }
    });

    // Used for delaying livereload until after server has restarted
    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });

    grunt.registerTask('express-keepalive', 'Keep grunt running', function () {
        this.async();
    });

    grunt.registerTask('serve-ing', function (target) {
        if (target === 'dist') {
            return grunt.task.run([
                // 'build',
                'env:all',
                'env:prod',
                'express',
                'wait',
                'open',
                'express-keepalive'
            ]);
        }

        grunt.task.run([
            'clean:app',
            'sass',
            'wiredep',
            'env:all',
            'express',
            'wait',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('build-ing', [
        'clean:dist',
        'concurrent',
        'wiredep',
        'useminPrepare',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cssmin',
        // 'babel',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'cdnify'
    ]);

    // grunt serve or build need to update variables.scss
    var fs = require("fs");
    var companyInfo = require("./server/config/white_label/company_info.json");
    var stylePath = './client/styles/common/';
    var scriptPath = './client/scripts/common/';
    var whiteLabelPath = './server/config/white_label/';
    var envConfigPath = './server/config/environment/';

    // grunt serve or build need to get companyName to run whiteLabel task;

    function readAndwriteFile(company, node_env, url) {
        // change process env config
        if (node_env == "dev") node_env = "development";
        if (node_env == "pro") node_env = "production";
        // set CDN URL
        // ????????????????????????CDN 2018.05.29 
        // CDN ?????????????????????????????? /fonts/ ???????????????????????????????????????????????????????????????????????????????????????????????????CDN????????????????????????CDN
        // CDN_URL = url === 'www' ? 'https://static.lkjhgfdsuytr.com' : 'https://staticdemo.tigerwitfx.com';
        var url_path, login_public_key;

        url_path = companyInfo[company][url]["url_path"];
        login_public_key = companyInfo[company][url]["login_public_key"];

        var envConfig = fs.readFileSync(envConfigPath + 'processENV.origin.config.js', 'utf8');
        envConfig = envConfig.replace('tigerwit', company).replace('development', node_env).replace('path', url_path).replace('tiger_cdn', CDN_URL);
        fs.writeFileSync(envConfigPath + 'processENV.config.js', envConfig, 'utf8');
        var companyName = require(envConfigPath + 'processENV.config').COMPANY_NAME;

        //change angular - whiteLabel.service.js
        var AS = fs.readFileSync(whiteLabelPath + 'whiteLabel.service.origin.js', 'utf8');
        AS = AS.replace('tigerwit', companyName).replace('publicKey', login_public_key);
        fs.writeFileSync(scriptPath + 'whiteLabel.service.js', AS, 'utf8');

        console.log('whiteLabel task finished...');
    }

    grunt.registerTask('serve', function (company, node_env, url) {
        readAndwriteFile(company, node_env, url);
        grunt.task.run(['serve-ing']);
    });

    grunt.registerTask('build', function (company, node_env, url) {
        readAndwriteFile(company, node_env, url);
        grunt.task.run(['build-ing']);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

};
