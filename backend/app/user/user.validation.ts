import { body, checkExact } from 'express-validator';
import * as userService from './user.service';

export const login = checkExact([
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email must be valid'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isString().withMessage('Password must be a string'),
]);

export const createUser = checkExact([
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email must be valid')
        .custom(async (value) => {
            const user = await userService.getUserByEmail(value);
            if (user) throw new Error("Email already exists.");
            return true;
        }),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isString().withMessage('Password must be a string'),
    body('confirmPassword')
        .notEmpty().withMessage('Confirm password is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation does not match password');
            }
            return true;
        }),
]);

export const updateUser = checkExact([
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email must be valid')
        .custom(async (value) => {
            const user = await userService.getUserByEmail(value);
            if (!user) throw new Error("User not found.");
            return true;
        }),
    body('active')
        .notEmpty().withMessage('Active status is required')
        .isBoolean().withMessage('Active must be a boolean'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isString().withMessage('Password must be a string'),
]);

export const editUser = checkExact([
    body('name')
        .optional()
        .isString().withMessage('Name must be a string'),
    body('email')
        .optional()
        .isEmail().withMessage('Email must be valid')
        .custom(async (value) => {
            const user = await userService.getUserByEmail(value);
            if (!user) throw new Error("User not found.");
            return true;
        }),
    body('active')
        .optional()
        .isBoolean().withMessage('Active must be a boolean'),
    body('password')
        .optional()
        .isString().withMessage('Password must be a string'),
]);
