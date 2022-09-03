require('dotenv').config();
const app = require('./api');

const routeLogin = require('./router/loginRouter');
const userRouter = require('./router/userRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', routeLogin.loginRouter);
app.use('/user', userRouter.router);

app.listen(port, () => console.log('ouvindo porta', port));
