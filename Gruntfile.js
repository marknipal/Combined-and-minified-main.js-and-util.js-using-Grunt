module.exports = function(grunt) {
 
    //  Initialize configuration object:
    grunt.initConfig({
 
        //Store the project settings from the package.json file into the pkg property.
        pkg: grunt.file.readJSON('package.json'),
 
        // We use metadata so we could easily change the folder structure.
        meta: {
            srcPath: 'src/assets/js/',
            distPath: 'dist/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['<%= meta.srcPath %>/*.js'],
                dest: '<%= meta.distPath %>concated.js'
				
            }
		},
	
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: '<%= concat.dist.dest %>',
				dest: '<%= meta.distPath %><%= pkg.name %>.min.js'
					}
				},
				
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task
    grunt.registerTask('default', ['concat','uglify']);
 
};