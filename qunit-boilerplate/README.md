# QUnit Boilerplate

This is a boilerplate for adding QUnit tests to your client-side JavaScript project. To use it, clone the parent repository, and then copy the `qunit-boilerplate` directory to your project, placing it wherever you'd like. You can safely rename the directory if you'd like.

The boilerplate uses the QUnit testing framework, and also provides the [sinon.js](http://sinonjs.org/) library for spies and XHR mocking.

Follow the instructions below to configure the boilerplate and start writing your tests.

## Configuring the tests

Open the `config.js` file in this directory and follow the instructions for configuring your project.

You may also want to edit the `grunt.js` file in this directory to change the JSHint [options](http://www.jshint.com/docs/).

## Creating a test

The boilerplate comes with an example test in the `tests/example.js` file. It looks like this:

    define([ 'app/main' ], function() {
      module('example');
      test('it works', function() {
        ok( true );
      });
    });

The example test uses the [AMD format](http://requirejs.org/docs/whyamd.html#amd) to indicate that the test depends on the `app/main` file -- this will load the file at `main.js` in the `appDir` directory you indicated in your `config.js`. Once this dependency is loaded, the test defines a test suite, which consists of one test that asserts that `true` is truthy.

You can edit this file to create your own tests, or you can create a new file that contains your own tests. If you create a new file, make sure to follow the instructions below on adding tests.

### Adding tests

Presently, you need to edit the `list_of_tests.js` file when you add tests; this file will be automatically generated in a future version of the boilerplate.

## Running the tests

You can run the tests in a browser by opening the file at `runner/index.html`.

### Running the tests with Grunt

- Install [Node](http://nodejs.org)
- Install [Grunt](http://gruntjs.com) and [PhantomJS](http://phantomjs.org/download.html).

From this directory, run `grunt qunit` from the command line to run the tests.