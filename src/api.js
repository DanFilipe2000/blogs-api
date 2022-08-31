const express = require('express');
const userRouter = require('./router/userRouter');

// ...

const app = express();

app.use(express.json());

app.router(userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
