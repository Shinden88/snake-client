const { stdin } = require('process');
let connection;

const handleUserInput = function (action) {
  if (action === '\u0003') {
    process.exit();
  }
  if (action === 'w') {
    connection.write('Move: up');
  }
  if (action === 'a') {
    connection.write('Move: left');
  }
  if (action === 'd') {
    connection.write('Move: right');
  }
  if (action === 's') {
    connection.write('Move: down');
  }
  if (action === 'b') {
    connection.write('Say: Beep beep');
  }
  if (action === 'l') {
    connection.write("Say: I'm a snek");
  }
};

const setupInput = function () {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };
