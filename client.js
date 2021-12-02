const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connected to the server');
    conn.write('Name: SNK');
  });
  return conn;
};
module.exports = { connect };
