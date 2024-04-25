const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 
app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
); 
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost ${PORT}`)
})