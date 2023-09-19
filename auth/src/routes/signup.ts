import express, { Request, Response } from 'express';
import {
  FieldValidationError,
  body,
  validationResult,
} from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(
        errors.array() as FieldValidationError[]
      );
    }

    let { email, password } = req.body;
    console.log('Creating an user');
    throw new DatabaseConnectionError();

    res.send('Hei');
  }
);

export { router as signupRouter };
