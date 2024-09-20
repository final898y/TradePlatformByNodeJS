import express from "express";
import env from "./src/env";
import indexrouter from "./routers/index"
import userRouter from "./routers/user"


const app = express();
const port: number = env.PORT;

app.set("view engine", "pug");
app.use("/", indexrouter);
app.use("/api", userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(env.NODE_ENV);
});