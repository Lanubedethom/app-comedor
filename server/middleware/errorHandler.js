
export const logError = (err, req, res, next) => {
    console.error(err);
    next(err);
};

export const handleError = (err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
};

export const errorBoomHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    } else {
        next(err);
    }
}