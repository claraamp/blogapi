import * as dotenv from "dotenv";
import express from "express";
import BlogControllers from "./controllers/BlogControllers";

const app = express();
app.use(express.json());
dotenv.config();

const  { PORT }  = process.env;

app.listen(PORT, () => {
  console.log('running on port'+ PORT);
});


app.post('/insert', BlogControllers.insert)
app.delete('/blog/:idpost', BlogControllers.deleteBlog)