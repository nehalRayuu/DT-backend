const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const eventRouter = require('./routes/Routes');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(multer().single('image'));
app.use('/api/v3/app', eventRouter);


mongoose.connect(process.env.DB_URL).then((e)=>{
    console.log('connected to db')
})
.catch((e)=>{
console.log(e);
})


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
