(function() {

// test mode -- 'tdd' or 'bdd'
var mode = 'tdd';

// location of your app files relative to this file
var appDir = '../fake-app-dir';

// location of all of the app files you'd like to test,
// relative to the appDir specified above. do not include
// the file extension. for example:
//
//    var appFiles = [
//      'main',
//      'user'
//    ];
//
// alternately, if you understand how to use the shim object
// in the requirejs config, you can modify the shim object below
// and add your app files there, with their dependencies.
var appFiles = [

];

// any vendor libraries or plugins you are using, and their
// location relative to this configuration file
var appLibs = {
  backbone: '../vendor/backbone',
  underscore: '../vendor/underscore',
  jquery: '../vendor/jquery'
};

// if your vendor libraries have dependencies on other libraries,
// or if your vendor libraries provide a global variable, use this
// object to indicate them.
var shim = {
  backbone: {
    deps: [ 'jquery', 'underscore' ],
    exports: 'Backbone'
  },
  underscore: {
    exports: '_'
  }
};



// modifying stuff below here is expert mode :)

if ( mode === 'tdd' ) {
  window.assert = chai.assert;
}

if ( mode === 'bdd' ) {
  window.should = chai.should();
}

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