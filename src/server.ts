import express from "express";
import BlogControllers from "./controllers/BlogControllers";

const app = express();
app.use(express.json());

const  PORT  = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('running on port'+ PORT);
});


app.post('/insert', BlogControllers.insert)
app.delete('/blog/:idpost', BlogControllers.deleteBlog)
app.get('/blog', BlogControllers.findAll)