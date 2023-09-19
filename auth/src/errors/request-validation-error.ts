import { FieldValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(public errors: FieldValidationError[]) {
    super();

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
