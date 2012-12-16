(function() {
// indicate the location of your app files relative to this file
var appDir = '../demo-app/js';

// if your project uses libraries or plugins, indicate their
// location relative to this configuration file.
//
// for example:
//
//    var appLibs = {
//      backbone: '../demo-app/vendor/backbone-min',
//      underscore: '../demo-app/vendor/underscore-min',
//      jquery: '../demo-app/vendor/jquery'
//    };
var appLibs = {
};

// if your libraries or plugins have dependencies on other libraries,
// or if your vendor libraries provide a global variable, use this
// object to indicate them.
//
// for example:
//
//    var shim = {
//      backbone: {
//        deps: [ 'jquery', 'underscore' ],
//        exports: 'Backbone'
//      },
//      underscore: {
//        exports: '_'
//      }
//    };
//
// for more information, see the shim documentation for requirejs:
//
// http://requirejs.org/docs/api.html#config-shim

var shim = {
};






// you shouldn't need to modify anything below here, and if you do
// modify anything below here, you should know what you're doing :)
var paths = {
  app: appDir
};

var appLibsArray = [];

for (var lib in appLibs) {
  appLibsArray.push( lib );
  paths[ lib ] = appLibs[ lib ];
}

require.config({
  paths: paths,
  shim: shim
});

var listOfLibs = [ 'list_of_tests' ];

for ( var lib in appLibs ) {
  listOfLibs.push( lib );
}

require( listOfLibs, function( lot ) {
  require( lot, function() {
    QUnit.start();
  });
});

}());