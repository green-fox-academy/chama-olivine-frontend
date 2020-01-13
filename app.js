const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/dist')));
app.use(express.static(path.join(__dirname + '/dist/Angular')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Angular/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port)

const server = http.createServer(app);
server.listen(port, () => console.log('Running.....'))
