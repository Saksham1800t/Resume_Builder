import { body } from 'express-validator';

export const validateResume = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('education').notEmpty().withMessage('Education is required'),
  body('experience').notEmpty().withMessage('Experience is required'),
  body('skills').isArray().withMessage('Skills must be an array'),
];
