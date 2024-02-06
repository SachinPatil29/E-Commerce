const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const bodyparser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dbConnect();

app.use(express.json());
app.use('/api/user',authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Servert is running on PORT ${PORT}`);
})