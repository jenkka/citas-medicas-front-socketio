const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });

app.use(express.static('./dist/citas-medicas-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/citas-medicas-front/'}),
);

app.listen(process.env.PORT || 8080);