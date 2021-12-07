const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(express.static('./dist/citas-medicas-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/citas-medicas-front/'}),
);

app.listen(process.env.PORT || 8080);