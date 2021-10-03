const CustomError = require('./errors/custom-error');

module.exports = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  res.status(400).json({ message: 'Something went wrong' });
};
