const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const prodcategoryRouter = require('./routes/prodCategoryRoute');
const blogcategoryRouter = require('./routes/blogCategoryRoute');
const brandRouter = require('./routes/brandRoute');
const colorRouter = require('./routes/colorRoute');
const enquiryRouter = require('./routes/enquiryRoute');
const couponRouter = require('./routes/couponRoute');
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
app.use('/api/blog',blogRouter);
app.use('/api/category',prodcategoryRouter);
app.use('/api/blogcategory',blogcategoryRouter);
app.use('/api/brand',brandRouter);
app.use('/api/color',colorRouter);
app.use('/api/enquiry',enquiryRouter);
app.use('/api/coupon',couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Servert is running on PORT ${PORT}`);
})