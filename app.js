const connect = require('./config/database');
const app = require('./config/server');

app.listen(8080, async () => {
  await connect();
  console.log('The server is running on port 8080');
});
