import { FieldValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: FieldValidationError[]) {
    super('Invalid request parameters');

    // Only because of built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error: FieldValidationError) => {
      return {
        message: error.msg,
        field: error.path,
      };
    });
  }
}
