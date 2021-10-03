const { Router } = require('express');
const { body } = require('express-validator');
const validationMiddleware = require('../middlewares/validation.middleware');
const CustomError = require('../utils/errors/custom-error');
const mapService = require('../services/map.service');

const router = Router();

const validations = {
  float: (key) =>
    body(key)
      .isFloat()
      .withMessage(`${key} coordinate should be (float) provided.`)
};

router.post(
  '/',
  [
    validations.float('left'),
    validations.float('right'),
    validations.float('top'),
    validations.float('bottom'),
    validationMiddleware
  ],
  async (req, res, next) => {
    const { left, right, top, bottom } = req.body;

    try {
      const r = await mapService.getGEOJSON({ left, right, top, bottom });
      res.status(200).json({ r });
    } catch ({ response }) {
      next(new CustomError(response.data));
    }
  }
);

module.exports = router;
