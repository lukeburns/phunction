# phunction

Substitute a property in for the first argument of a function.

## Usage

```
npm install phunction
```

```javascript
var phunction = require('phunction');
var api = phunction(api);
```

Then calling

```javascript
api(command, arg_1, ..., arg_n [, parameters, callback])
```

can be replaced with

```javascript
api[command](arg_1, ..., arg_n [, parameters, callback])
```
