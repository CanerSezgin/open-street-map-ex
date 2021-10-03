const os = require('os');
const app = require('./app');
const config = require('./config');

const server = app.listen(config.port, () => {
  console.log(
    `✓ SERVER: Listening at http://${os.hostname()}:${config.port} in ${
      config.env
    } environment.`
  );
});

server.timeout = 25000; // sets timeout to 25 seconds
