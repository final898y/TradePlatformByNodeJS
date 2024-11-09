import express from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import env from './env';
import IndexRouter from './routers/indexRouter';
import UserRouter from './routers/userRouter';
import TestRouter from './routers/testRouter';

const app = express();
const httpport: number = env.HTTPPORT;
const httpsport: number = env.HTTPSPORT;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', IndexRouter);
app.use('/users', UserRouter);
app.use('/tests', TestRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// const privateKey = fs.readFileSync('src/key.pem');
// const certificate = fs.readFileSync('src/cert.pem');

// const httpsServer = https.createServer({
//   key: privateKey,
//   cert: certificate
// }, app);
// httpsServer.listen(httpsport, () => {
//   console.log(`Example app listening at https://localhost:${httpsport}`);
//   console.log(env.NODE_ENV);
// });

// const httpServer = http.createServer((req, res) => {
//   const redirectUrl = `https://localhost:${httpsport}${req.url}`;
//   res.writeHead(301, { "Location": redirectUrl });
//   res.end();
// });
// httpServer.listen(httpport, () => {
//   console.log(`HTTP Server running on port ${httpport} and redirecting to HTTPS`);
// });

app.listen(httpport, () => {
  console.log(`Example app listening on port ${httpport}`);
  console.log(env.NODE_ENV);
});
