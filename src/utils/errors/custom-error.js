module.exports = class CustomError extends Error {
  constructor(message = "", statusCode = 400) {
    super(message);
    Error.call(this);
    Error.captureStackTrace(this);
    this.statusCode = statusCode;
    this.message = message;
  }
};
