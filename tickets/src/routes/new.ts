import { requireAuth, validateRequest } from '@mtstickets/common';
import { body } from 'express-validator';
import express, { Request, Response } from 'express';

const router = express.Router();

router.post(
  '/api/tickets',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    // gt -> grater than
    body('price').isFloat({ gt: 0 }).withMessage('Price must be grater than 0'),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export { router as createTicketRouter };
