module.exports = function( grunt ) {

"use strict";

grunt.loadNpmTasks( "grunt-clean" );
grunt.loadNpmTasks( "grunt-html" );
grunt.loadNpmTasks( "grunt-wordpress" );
grunt.loadNpmTasks( "grunt-jquery-content" );
grunt.loadNpmTasks( "grunt-check-modules" );

grunt.initConfig({
	clean: {
		wordpress: "dist/"
	},
	htmllint: {
		resources: "resources/*.html"
	},
	jshint: {
		options: {
			undef: true,
			node: true
		}
	},
	lint: {
		grunt: "grunt.js"
	},
	watch: {
		pages: {
			files: "pages/**",
			tasks: "deploy"
		}
	},
	"build-pages": {
		all: grunt.file.expandFiles( "pages/**" )
	},
	"build-resources": {
		all: grunt.file.expandFiles( "resources/**/*" )
	},
	wordpress: grunt.utils._.extend({
		dir: "dist/wordpress",
		order: "order.yml"
	}, grunt.file.readJSON( "config.json" ) )
});

grunt.registerTask( "default", "wordpress-deploy" );
grunt.registerTask( "build-wordpress", "check-modules clean lint build-pages build-resources");
grunt.registerTask( "deploy", "wordpress-deploy" );

};



