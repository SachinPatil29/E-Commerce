const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use('/api/user',authRouter);
app.use('/api/product',productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Servert is running on PORT ${PORT}`);
})