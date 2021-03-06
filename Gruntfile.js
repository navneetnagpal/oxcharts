// Generated on 2014-07-02 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            appscripts: {
                files: [
                    'app/scripts/global/i18/*.js',
                    'app/scripts/*.js',
                    'app/scripts/global/*.js',
                    'app/scripts/filters/*.js',
                    'app/scripts/services/*.js',
                    'app/scripts/controllers/*.js',
                    'app/scripts/directives/*.js'
                ],
                tasks: ['concat:js']
            },
            libscripts: {
                files: [
                    'app/scripts/libraries/*.js',
                    'app/scripts/libraries/**/*.js'
                ],
                tasks: ['concat:ven']
            },
            // modulescripts: {
            //     files: [
            //         'app/scripts/modules/homepge/angular/**/*.js'
            //     ],
            //     tasks: ['concat']
            // },
            styles: {
                files: [
                    'app/styles/**/*.css'
                ],
                tasks: ['concat_css:all']
            },
            lessfiles: {
                files: [
                    'app/styles/**/*.less',
                    'app/styles/modules/**/*.less'
                ],
                tasks: ['concat_css:less', 'less:dev', 'concat_css:all']
            },
            // js: {
            //     files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
            //     tasks: ['newer:jshint:all'],
            //     options: {
            //         livereload: true
            //     }
            // },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            }, 
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
      cssmin: {
            appstyles: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                     'app/.include/styles/style.min.css': [
                     'app/.include/styles/style.css'
                    ]
                }
            }
        },
        less: {
            dev: {
                options: {

                },
                files: {
                    "app/.include/styles/app.css": "app/.include/styles/app.less"
                }
            },
            prod: {
                options: {
                    cleancss: true,
                    modifyVars: {
                        imgPath: '"http://localhost:9000/images"'
                    }
                },
                files: {
                    "app/.include/styles/app.min.css": "app/.include/styles/app.less"
                }
            }
        },
        concat_css: {
            less: {
                src: [
                  "app/styles/**/*.less",
                    'app/styles/modules/**/*.less'

              ],
                dest: "app/.include/styles/app.less"
            },
            all: {
                src: [
                  "app/styles/**/*.css",
                  "app/.include/styles/app.css"
                ],
                dest: "app/.include/styles/appstyle.css"
            }
        },
        concat: {

            options: {
                separator: '\n'
            },
            ven: { 
                src: [
                    'app/scripts/libraries/*.js'
                ],
                dest: 'app/.include/scripts/libraries.js'
            },
            js: {
                src: [
                    'test/client/mock/*.js',
                    'app/scripts/global/i18/*.js',
                    'app/scripts/*.js',
                    'app/scripts/global/*.js',
                    'app/scripts/filters/*.js',
                    'app/scripts/services/*.js',
                    'app/scripts/controllers/*.js',
                    'app/scripts/directives/*.js'
                ],
                dest: 'app/.include/scripts/appscripts.js'
            },

            dist: {
                src: [
                    'app/scripts/global/i18/*.js',
                    'app/scripts/*.js',
                    'app/scripts/global/*.js',
                    'app/scripts/filters/*.js',
                    'app/scripts/services/*.js',
                    'app/scripts/controllers/*.js',
                    'app/scripts/directives/*.js'
                ],
                dest: 'app/.include/scripts/appscripts.js'
            }

        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },





        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/public/styles/{,*/}*.css',
                        //'<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/public/styles/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/.include/concat/scripts',
                    src: '*.js',
                    dest: 'app/.include/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'views/{,*/}*.html',
                        'bower_components/**/*',
                        'images/{,*/}*.{webp}',
                        'fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= yeoman.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });


    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'bower-install',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server', 
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'bower-install',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'cssjsdev',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
    grunt.registerTask('cssjsdev', [
        'concat:ven',
        'concat:js',
        'concat_css:less',
        'less:dev',
        'concat_css:all'
    ]);
    grunt.registerTask('cssjsalldist', [
        'concat:ven',
        'concat:dist',
        'concat_css:less',
        'less:dev',
        'concat_css:all'
    ]);
};