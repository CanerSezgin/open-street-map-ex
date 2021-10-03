const CustomError = require('./custom-error');

module.exports = class RequestValidationError extends CustomError {
  constructor(errors) {
    super(errors.join(' | '), 422);
  }
};
