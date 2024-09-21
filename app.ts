import express from "express";
import env from "./src/env";
import IndexRouter from "./Routers/indexRouter"
import UserRouter from "./Routers/userRouter"


const app = express();
const port: number = env.PORT;

app.set("view engine", "pug");
app.set('views', './views')
app.use("/", IndexRouter);
app.use("/api", UserRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(env.NODE_ENV);
});