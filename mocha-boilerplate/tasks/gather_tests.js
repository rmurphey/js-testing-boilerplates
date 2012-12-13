module.exports = function( grunt ) {
	
	grunt.registerTask( 'gatherTests', function() {
		var fs = require( 'fs' ),
			path = require( 'path' ),
			testDir = 'tests',
			tests = [];

		// List the files in the tests directory.
		fs.readdirSync( testDir ).filter( function( file ) {

			// Keep the .js files
			return file.substr( -3 ) === '.js';
		
		}).forEach( function( file ) {

			// Add the file to the list of tests.
			tests.push(
				path.join( testDir, file )
			);
		});

		// Format the test names as RequireJS modules.
		tests = tests.map( function( test ) {
			return "'" + test.split('.')[0] + "'";
		}).join(",\n    ");

		// Write the list of tests to file
		fs.writeFileSync('list_of_tests.js', "define(function() {\n" +
				"  return [\n" +
				"    " + tests + "\n" +
				"  ];\n" +
				"});\n"
		);
	});
};
