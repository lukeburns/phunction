var phunction = require('./phunction');

function hello() {
  return 'hello ' + Array.prototype.join.call(arguments, ' ')
}

var greetings = phunction(hello);

console.log(hello(), 'hello() === greetings()', hello() === greetings())
console.log(hello('world'), "hello('world') === greetings.world()", hello('world') === greetings.world())
console.log(hello('good', 'friend'), "hello('good','friend') === greetings.good('friend')", hello('good','friend') === greetings.good('friend'))
