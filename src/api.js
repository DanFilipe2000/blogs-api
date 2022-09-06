const express = require('express');

const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categoryRouter');
const postRouter = require('./router/postRouter');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRouter.router);
app.use('/user', userRouter.router);
app.use('/categories', categoryRouter.router);
app.use('/post', postRouter.router);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
