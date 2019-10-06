const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('You are on the root route :D'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));