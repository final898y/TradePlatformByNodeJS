import express from "express";
import env from "./src/env";
import IndexRouter from "./src/Routers/indexRouter"
import UserRouter from "./src/Routers/userRouter"


const app = express();
const port: number = env.PORT;

app.set("view engine", "pug");
app.set('views', './views')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/", IndexRouter);
app.use("/user", UserRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(env.NODE_ENV);
});