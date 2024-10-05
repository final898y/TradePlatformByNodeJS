import express from 'express';
import env from './env';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import IndexRouter from './routers/indexRouter';
import UserRouter from './routers/userRouter';
import TestRouter from './routers/testRouter';

const app = express();
const port: number = env.PORT;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', IndexRouter);
app.use('/users', UserRouter);
app.use('/tests', TestRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(env.NODE_ENV);
});