const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = '7001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Magic Happens on port:${port}`));
