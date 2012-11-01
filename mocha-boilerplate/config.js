(function() {

// test mode -- 'tdd', 'bdd-should', or 'bdd-expect'
var mode = 'tdd';

// location of your app files relative to this file
var appDir = '../demo-app/js';

// location of all of the app files you'd like to test,
// relative to the appDir specified above. do not include
// the file extension.
//
// for example:
//
//    var appFiles = [
//      'app'
//    ];
//
// alternately, if you understand how to use the shim object
// in the requirejs config, you can modify the shim object below
// and add your app files there, with their dependencies.
var appFiles = [

];

// any vendor libraries or plugins you are using, and their
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

// if your vendor libraries have dependencies on other libraries,
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

var shim = {

};



// you shouldn't need to modify anything below here, and if you do
// modify anything below here, you should know what you're doing :)

if ( mode === 'tdd' ) {
  window.assert = chai.assert;
}

if ( mode === 'bdd-should' ) {
  window.should = chai.should();
}

if ( mode === 'bdd-expect' ) {
  window.expect = chai.expect;
}

mocha.setup( mode.split('-')[0] );

var paths = {
  app: appDir
};

var appLibsArray = [];

for (var lib in appLibs) {
  appLibsArray.push( lib );
  paths[ lib ] = appLibs[ lib ];
}

appFiles.forEach(function(f) {
  shim[ 'app/' + f.replace(/\.js$/, '') ] = appLibsArray;
});

require.config({
  deps: [ 'tests/main' ],
  paths: paths,
  shim: shim
});

}());