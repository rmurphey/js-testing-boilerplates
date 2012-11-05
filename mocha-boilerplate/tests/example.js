define([ 'app/main' ], function() {
  suite('foo', function() {
    test('it works', function() {
      assert.ok( window.foo.bar === 'baz' );
    });
  });
});