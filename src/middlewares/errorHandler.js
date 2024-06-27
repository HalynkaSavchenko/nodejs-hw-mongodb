import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
    if(error instanceof HttpError) {
        res.status(error.status).json({
            status: error.status,
            message: error.name,
            data: error,
        });
        return;
    }

    // прямий обробник помилки валідації без використання хуків
    // if (error.name === 'ValidationError') {
    //     res.status(400).json({
    //         status: 400,
    //         message: 'Validation Error',
    //         data: error.message
    //     });
    //     return;
    // }

    res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || 'Something went wrong',
        data: error.message
    });
};
