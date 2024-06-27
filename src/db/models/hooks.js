export const mongooseSaveError = (error, data, next) => {
    if(error.name === 'ValidationError') {
        error.status = 400;
    }
    next(error);
};

export const setUpdateSettings = function(next) {
    this.options.new = true;
    this.options.runValidators = true;
    next();
};
