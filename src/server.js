require('dotenv').config();
const app = require('./api');

const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categoryRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRouter.router);
app.use('/user', userRouter.router);
app.use('/categories', categoryRouter.router);

app.listen(port, () => console.log('ouvindo porta', port));
