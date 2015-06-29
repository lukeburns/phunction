var phunction = require('./phunction');

function hello() {
  return 'hello ' + Array.prototype.join.call(arguments, ' ')
}

var hello = phunction(hello);

console.log( "hello('world') === hello.world()", hello('world') === hello.world())
console.log("hello('good','friend') === hello.good('friend')", hello('good','friend') === hello.good('friend'))
