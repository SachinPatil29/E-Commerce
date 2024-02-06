// Handling not found error

const notFound = (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Error Handler

const errorHandler = (err, req, res, next) => {
    //If the status code is 200 then it set statuscode to 500 because when an error occurs in the application it is set to be 500.
    const statuscode = res.statusCode === 200 ? 500 : res.statusCode; 
    res.status(statuscode);
    res.json({
        message: err?.message,
        stack: err?.stack
    });
};

module.exports = {notFound, errorHandler};