import express, { Request, Response } from 'express';
import env from "./src/env";


const app = express();
const port: number = env.PORT || 2000;

app.set('view engine', 'pug');


app.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
  //res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(env.NODE_ENV);
});