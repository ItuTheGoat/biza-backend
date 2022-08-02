const express = require('express');
const app = express();
const config = require('config');

const port = config.get('server.port');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
})