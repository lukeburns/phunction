var Proxy = require('harmony-proxy');

module.exports = phunction;

function phunction (fn) {
  return new Proxy(fn, {
    get: function(target, property, receiver) {
      return target.bind(null, property);
    },
    apply: function(target, thisArg, args) {
      return target.apply(null, args);
    }
  });
}
