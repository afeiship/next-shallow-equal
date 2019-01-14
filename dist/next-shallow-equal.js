(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var hasOwn = Object.prototype.hasOwnProperty;

  nx.shallowEqual = function(inTarget1, inTarget2) {
    if (inTarget1 === inTarget2) {
      return true;
    }
    var keys1 = Object.keys(inTarget1);
    var keys2 = Object.keys(inTarget2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    // Test for A's keys different from B.
    for (var i = 0; i < keys1.length; i++) {
      if (!hasOwn.call(inTarget2, keys1[i]) || inTarget1[keys1[i]] !== inTarget2[keys1[i]]) {
        return false;
      }
    }
    return true;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.shallowEqual;
  }
})();
