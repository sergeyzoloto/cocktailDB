const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use('*/src', express.static('src'));
app.use('*/public', express.static('public'));

// default URL for website
app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});
const server = http.createServer(app);
const port = 8080;
server.listen(port);
console.debug('Server listening on port ' + port);
