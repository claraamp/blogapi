import express from "express";

const app = express();
app.use(express.json());


const  PORT  = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('running on port'+ PORT);
});

const BlogServices = require('./services/BlogServices')
app.post('/blog/insert', BlogServices.insert)
app.get('/blog', BlogServices.findAll)
app.get('/blog/:idpost', BlogServices.findbyId)
app.delete('/blog/:idpost', BlogServices.delete)
app.put('/blog/:idpost', BlogServices.update)