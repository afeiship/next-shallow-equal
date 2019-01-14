var nx = require('next-js-core2');
require('../src/next-shallow-equal');

test('nx.shallowEqual: shallow object', function() {
  var obj1 = { name: 'fei' };
  var obj2 = { name: 'fei' };
  var rs = nx.shallowEqual(obj1, obj2);

  expect(rs).toBe(true);
});

test('nx.shallowEqual: the same object', function () {
  var obj1 = { name: 'fei' };
  var obj2 = obj1;
  var rs = nx.shallowEqual(obj1, obj2);

  expect(rs).toBe(true);
});

test('nx.shallowEqual: not the same object', function () {
  var obj1 = { name: 'fei' };
  var obj2 = { name: 'fei', age: 108};
  var rs = nx.shallowEqual(obj1, obj2);

  expect(rs).toBe(false);
});
