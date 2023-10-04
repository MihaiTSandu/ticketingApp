import express from 'express';
// For solving errors on async routes:
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@mtstickets/common';

const app = express();
app.set('trust-proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
