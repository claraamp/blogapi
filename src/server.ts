import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());


const { PORT } = process.env;


app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

const BlogServices = require('./services/BlogServices')
app.post('/blog/insert', BlogServices.insert)