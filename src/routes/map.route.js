const {  Router } = require("express")
const { body } = require("express-validator")
const validationMiddleware = require("../middlewares/validation.middleware")

const router = Router();

const validations = {
  email: body('email').isEmail().withMessage('Email must be valid.'),
};

router.get(
  '/',
  [validations.email, validationMiddleware],
  async (req, res, next) => {
    const { name = '', phone = '', email, message = '' } = req.body;

    try {
      const { contactUs: contactUsEmailConfig } = config.emails;
      res.status(200).json({ status: 'send' })
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
