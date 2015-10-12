module.exports = function(grunt) {
    require("path");
    grunt.loadNpmTasks("grunt-contrib-copy"),
    grunt.loadNpmTasks("grunt-contrib-cssmin"), 
    grunt.loadNpmTasks("grunt-contrib-jshint"),
    grunt.loadNpmTasks("grunt-contrib-uglify"), 
    grunt.loadNpmTasks("grunt-contrib-concat"),
    grunt.loadNpmTasks("grunt-contrib-jade"), 
    grunt.loadNpmTasks("grunt-contrib-watch"),
    grunt.loadNpmTasks("grunt-contrib-compass"), 
    grunt.loadNpmTasks("grunt-contrib-connect"),
    grunt.loadNpmTasks("grunt-contrib-clean"),
    grunt.loadNpmTasks('grunt-newer'),
    grunt.loadNpmTasks('grunt-cssc'),
    // grunt.loadNpmTasks('grunt-csscomb'),
    grunt.loadNpmTasks('grunt-autoprefixer'),
    grunt.loadNpmTasks("css-mqpacker"),
    grunt.loadNpmTasks('grunt-prettify'),
    grunt.loadNpmTasks('grunt-csscomb'),
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        /*
        ============ jade: HTML Template Lang
        */
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [ {
                    expand: true,
                    cwd: "<%= pkg.dir %>/dev/",
                    // cwd: "work/",
                    src: [ "*.jade" ],
                    dest: "<%= pkg.dir %>/dist/",
                    ext: ".html"
                } ]
            }
        },

        clean: {
            // assets: ["<%= pkg.dir %>/dist/assets/**/*"],
            // all: ["<%= pkg.dir %>/dist/assets/*"],
            // beautiful: ["<%= pkg.dir %>/dist/beautiful/*"],
            // html: ["<%= pkg.dir %>/dist/*.html"]
            js: ["<%= pkg.dir %>/js/*.min.js", "<%= pkg.dir %>/js/*.beautify.js"],
            css: ["<%= pkg.dir %>/css/*.min.css"]
        },

        /*
        ============ compass: CSS Preprocessor
        */
        compass: {
            dist: {
                options: {
                    config: "config.rb",
                    sassDir: '<%= pkg.dir %>/dev/css',
                    imagesDir: '<%= pkg.dir %>/dist/assets/img',
                    cssDir: '<%= pkg.dir %>/dist/assets/css',
                }
            }
        },

        /*
        ============ concat: Gabugin File Javascript
        */
        concat: {
            options: {
                stripBanners: true,
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %> */\n",
                separator: ';',
            },
            dist: {
                src: [ "<%= pkg.dir %>/js/libs/jquery-1.11.3.min.js", "<%= pkg.dir %>/js/helper.js", "<%= pkg.dir %>/js/plugins.js", "<%= pkg.dir %>/js/main.js" ],
                dest: "<%= pkg.dir %>/js/all.js"
            }
            // dist: {
            //     src: [ "dev/js/*.js" ],
            //     dest: "work/js/script.js"
            // }
        },

        /*
        ============ jshint: Check you error/beautiful/consistent Javasctipt coding 
        */
        jshint: {
            beforeconcat: [ "dev/js/*.js" ],
            afterconcat: [ "work/js/script.js" ]
        },

        /*
        ============ cssmin: Minify css
        */
        cssmin: {
            options: {
                banner: '/*\nDeveloper: <%= pkg.dev %> \nName: <%= pkg.name %>\nVersion: <%= pkg.version %>\nLast Compile: <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mediaMerging : true,
                semanticMerging  : true,
                shorthandCompacting  : true
            },
            minify: {
                expand: true,
                cwd: "<%= pkg.dir %>/css/",
                // src: [ "*.css", "*.*.css", "!*.min.css" ],
                src: [ "style.sort.css" ],
                dest: "<%= pkg.dir %>/css/",
                ext: ".min.css"
            }
        },

        csscomb: {
            dynamic_mappings: {
                expand: true,
                cwd: "<%= pkg.dir %>/css/",
                src: ['*.css', '!*.resorted.css', '!*.min.css'],
                dest: "<%= pkg.dir %>/css/",
                ext: '.resorted.css'
            }
        },

        autoprefixer: {
            // prefix all files
            multiple_files: {
                // options: {
                //     diff: true
                // },
                expand: true,
                flatten: true,
                cwd: "<%= pkg.dir %>/dist/assets/css/",
                src: ['*.css', '!*.prefix.css'],
                dest: "<%= pkg.dir %>/dist/assets/css/",
                ext: '.prefix.css'
            }
        },

        /*
        ============ copy: Copy files
        */
        copy: {
            image: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= pkg.dir %>/dev/img/",
                        src: [ "**" ],
                        dest: "<%= pkg.dir %>/dist/assets/img/"
                    },
                    {
                        expand: true,
                        cwd: "<%= pkg.dir %>/dev/js/",
                        src: [ "*.js", "*.txt" ],
                        dest: "<%= pkg.dir %>/dist/assets/js/"
                    },
                    {
                        expand: true,
                        cwd: "<%= pkg.dir %>/dev/js/vendor/",
                        src: [ "*.js", "*.txt" ],
                        dest: "<%= pkg.dir %>/dist/assets/js/vendor/"
                    },
                    {
                        expand: true,
                        cwd: "<%= pkg.dir %>/dev/",
                        src: [ "*.html", "*.txt" ],
                        dest: "<%= pkg.dir %>/dist/"
                    },
                    {
                        expand: true,
                        cwd: "<%= pkg.dir %>/dev/fonts",
                        src: [ "**" ],
                        dest: "<%= pkg.dir %>/dist/assets/fonts"
                    },
                 ]
            }
        }, 

        // Prettify a directory of files
        prettify:{
            options: {
                indent: 1,
                indent_char: '\t',
                indent_scripts: 'keep',
                indent_inner_html: true,
                wrap_line_length: 78,// 0 - 250
                preserve_newlines: false, // 0 - 250
                brace_style: 'expand', // collapse | expand | end-expand
                // max_preserve_newlines: , // collapse | expand | end-expand
                // unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'div']
                unformatted: ['sub']
            },
            all: {
                expand: true,
                cwd: 'work//<%= pkg.dir %>/dist/',
                ext: '.html',
                src: ['*.html'],
                dest: 'work//<%= pkg.dir %>/dist/'
            },
        },

        cssminx: {
          minify: {
                expand: true,
                cwd: "<%= pkg.dir %>/css/",
                src: ['*.css', '!*.resorted.css', '!*.min.css'],
                dest: "<%= pkg.dir %>/css/",
                ext: '.resorted.css'
          }
        },

        /*
        ============ uglify: Minify And beautifuly your codex
        */
        uglify: {
            // js_min: {
            //     options: {
            //         banner: '/*\nDeveloper: <%= pkg.dev %> \nName: <%= pkg.name %>\nVersion: <%= pkg.version %>\nLast Compile: <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            //         compress: {
            //             drop_console: true
            //         },
            //     },
            //     files: {
            //         // "<%= pkg.dir %>/dist/assets/js/script.min.js": [ "<%= pkg.dir %>/dev/js/script.js" ],
            //         "<%= pkg.dir %>/dist/assets/js/script.min.js": [ "<%= pkg.dir %>/dist/assets/js/script.js" ]
            //     }
            // },
            js_min: {
                options: {
                    banner: '/*\nDeveloper: <%= pkg.dev %> \nName: <%= pkg.name %>\nVersion: <%= pkg.version %>\nLast Compile: <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */\n',
                    compress: {
                        drop_console: true
                    },
                },
                files: [
                    {
                        expand: true,
                        cwd: "<%= pkg.dir %>/js/",
                        // src: [ "*.js", "!*.min.js" ],
                        src: [ "all.js", "!*.beautify.js", "!*.min.js" ],
                        // src: [ "*.js", "!*.beautify.js", "!*.min.js" ],
                        dest: "<%= pkg.dir %>/js/",
                        ext: ".min.js"
                    },
                ]
            },
            // js_beautify: {
            //     options: {
            //         compress: {
            //             sequences : false, // -- join consecutive simple statements using the comma operator
            //             properties : false, // -- rewrite property access using the dot notation, for example foo["bar"] → foo.bar
            //             // dead_code : // -- remove unreachable code
            //             // drop_debugger : // -- remove debugger; statements
            //             // unsafe : // --(default: false)  apply "unsafe" transformations (discussion below)
            //             conditionals : false, // -- apply optimizations for if-s and conditional expressions
            //             comparisons : false, // -- apply certain optimizations to binary nodes, for example: !(a <= b) → a > b (only when unsafe), attempts to negate binary nodes, e.g. a = !b && !c && !d && !e → a=!(b||c||d||e) etc.,
            //             evaluate : false, // -- attempt to evaluate constant expressions
            //             booleans : false, // -- various optimizations for boolean context, for example !!a ? b : c → a ? b : c
            //             loops : false, // -- optimizations for do, while and for loops when we can statically determine the condition
            //             // unused : // -- drop unreferenced functions and variables
            //             // hoist_funs : // -- hoist function declarations
            //             // hoist_vars : // --  (default: false) hoist var declarations (this is false by default because it seems to increase the size of the output in general)
            //             if_return : false, // -- optimizations for if/return and if/continue
            //             join_vars : false, // -- join consecutive var statements
            //             // cascade : // -- small optimization for sequences, transform x, x into x and x = something(), x into x = something()
            //             // warnings : // -- display warnings when dropping unreachable code or unused declarations etc.
            //             // negate_iife : // -- negate "Immediately-Called Function Expressions" where the return value is discarded, to avoid the parens that the code generator would insert.
            //             // pure_getters : // -- the default is false. If you pass true for this, UglifyJS will assume that object property access (e.g. foo.bar or foo["bar"]) doesn't have any side effects.
            //             // pure_funcs : // -- default null. You can pass an array of names and UglifyJS will assume that those functions do not produce side effects. DANGER: will not check if the name is redefined in scope. An example case here, for instance var q = Math.floor(a/b). If variable q is not used elsewhere, UglifyJS will drop it, but will still keep the Math.floor(a/b), not knowing what it does. You can pass pure_funcs: [ 'Math.floor' ] to let it know that this function won't produce any side effect, in which case the whole statement would get discarded. The current implementation adds some overhead (compression will be slower).
            //             // drop_console : true// -- default false. Pass true to discard calls to console.* functions.
            //         },
            //         except: ['jQuery'],
            //         mangle: false,
            //         banner: '/*\nDeveloper: <%= pkg.dev %> \nName: <%= pkg.name %>\nVersion: <%= pkg.version %>\nLast Compile: <%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
            //         beautify: {
            //             beautify : true, // ( default true) -- whether to actually beautify the output. Passing -b will set this to true, but you might need to pass -b even when you want to generate minified code, in order to specify additional arguments, so you can use -b beautify=false to override it.
            //             // indent-level : // ( default 4)
            //             // indent-start : // ( default 0) -- prefix all lines by that many spaces
            //             // quote-keys : // ( default false) -- pass true to quote all keys in literal objects
            //             // space-colon : // ( default true) -- insert a space after the colon signs
            //             // ascii-only : // ( default false) -- escape Unicode characters in strings and regexps
            //             // inline-script : // ( default false) -- escape the slash in occurrences of </script in strings
            //             width : 120, // ( default 80) -- only takes effect when beautification is on, this specifies an (orientative) line width that the beautifier will try to obey. It refers to the width of the line text (excluding indentation). It doesn't work very well currently, but it does make the code generated by UglifyJS more readable.
            //             // max-line-len : // ( default 32000) -- maximum line length (for uglified code)
            //             bracketize : true, // ( default false) -- always insert brackets in if, for, do, while or with statements, even if their body is a single statement.
            //             // semicolons : // ( default true) -- separate statements with semicolons. If you pass false then whenever possible we will use a newline instead of a semicolon, leading to more readable output of uglified code (size before gzip could be smaller; size after gzip insignificantly larger).
            //             // preamble : // ( default null) -- when passed it must be a string and it will be prepended to the output literally. The source map will adjust for this text. Can be used to insert a comment containing licensing information, for example.
            //         }
            //     },
            //     files: [
            //         {
            //             expand: true,
            //             cwd: "<%= pkg.dir %>/dist/assets/js/",
            //             // src: [ "*.js", "!*.min.js" ],
            //             src: [ "*.js", "!*.beautify.js", "!*.min.js" ],
            //             dest: "<%= pkg.dir %>/dist/assets/js/",
            //             ext: ".beautify.js"
            //         },
            //     ]
            // }
        },
        // csscomb: {
        //  dynamic_mappings: {
        //      expand: true,
        //      cwd: '<%= pkg.dir %>/css/*',
        //      src: ['*.css', '!*.resorted.css'],
        //      dest: '<%= pkg.dir %>/css/resorted/',
        //      ext: '.resorted.css'
        //  }
        // },

          cssc: {
            csscFirstSet: {
              files: {
                '<%= pkg.dir %>/css/style.css': '<%= pkg.dir %>/css/style2.css'
              }
            }
          },

          css_mqpacker: {
            options: {
              // map: {
              //   inline: false,
              //   sourcesContent: false
              // }
              map: false
            },

            main: {
                expand: true,
                cwd: "<%= pkg.dir %>/css/",
                src: [ "*.css", "!*.min.css", "!*.sort.css" ],
                dest: "<%= pkg.dir %>/css/",
                ext: ".sort.css"
            }
          },

        /*  
        ============ watch: Watch you file save
        */
        watch: {
            options: {
                livereload: true,
                nospawn: true
            },
            css: {
                files: [ "<%= pkg.dir %>/css/**/*" ],
                // files: [ "<%= pkg.dir %>/ori/sass/**/*" ],
                // tasks: [ "compass" ]
                // tasks: [ "newer:compass" ]
            },
            js: {
                files: [ "<%= pkg.dir %>/js/**/*", "<%= pkg.dir %>/ori/js/**/*" ],
                // tasks: [ "newer:uglify" ]
            },
            img: {
                files: [ "<%= pkg.dir %>/images/**/*" ]
            },
            blade: {
                files: [ "<%= pkg.blade %>/views/**/*" ]
            },
            // imgcopy: {
            //     files: [ "<%= pkg.dir %>/dev/img/**/*" ],
            //     tasks: [ "newer:copy" ]
            // },
            // htmlcopy: {
            //     files: [ "<%= pkg.dir %>/dev/*.html" ],
            //     tasks: [ "newer:copy" ]
            // },
            // jscopy: {
            //     files: [ "<%= pkg.dir %>/dev/js/**/*" ],
            //     tasks: [ "newer:copy" ]
            // },
            // jadehtml: {
            //     files: [ "<%= pkg.dir %>/dev/*.jade" ],
            //     tasks: [ "newer:jade" ]
            // },
            // prettify: {
            //     files: [ "<%= pkg.dir %>/dist/*.html" ],
            //     tasks: [ "newer:prettify" ]
            // }
        },
        connect: {
            server: {
                 options: {
                    port: 666
                }
            }
        }
    }),

    
    grunt.registerTask("csscombme",         [ "csscomb"]),
    grunt.registerTask("autoprefixerme",    [ "autoprefixer"]),
    grunt.registerTask("uglifyme",          [ "uglify"]),
    grunt.registerTask("cssminme",          [ "cssmin"]),
    grunt.registerTask("compassme",         [ "compass"]), 
    grunt.registerTask("prettifyme",        [ "prettify"]), 
    grunt.registerTask("concatme",          [ "concat"]), 
    grunt.registerTask("jshintme",          [ "jshint"]), 
    grunt.registerTask("cleanme",           [ "clean"]), 
    grunt.registerTask("jademe",            [ "jade", "prettify", "watch"]), 
    // grunt.registerTask("startmedev",        [ "jade", "prettify", "watch"]), 
    grunt.registerTask("connectme",         [ "connect:server", "watch" ]), 
    grunt.registerTask("copyme",            [ "copy"]),
    grunt.registerTask("startme",           [ "copy", "uglify", "prettify", "watch" ]),
    grunt.registerTask("buildme",           [ "clean", "copy", "uglify", "prettify", "compass", "cssmin" ]);
    grunt.registerTask("i",                 [ "watch" ]);
    // grunt.registerTask("fix",               [ "clean", "uglify", "cssmin" ]);
    grunt.registerTask("fix",               [ "uglify", "cssmin" ]);
    grunt.registerTask("c",               [ "cssmin"]);

    grunt.registerTask("cssmedia",               [ "css_mqpacker"]);
    grunt.registerTask("cssmini",               [ "cssmin"]);
    grunt.registerTask("ca",               [ "concat", "uglify"]);

    grunt.registerTask("end",               [ "concat", "uglify", "cssmedia", "cssmini"]);
};