const { validationResult } = require('express-validator');
const ValidationError = require('../utils/errors/validation-error');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ValidationError(errors.array().map((e) => e.msg));
  }

  next();
};
