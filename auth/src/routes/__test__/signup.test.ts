import request from 'supertest';
import { app } from '../../app';

it('returns a 201 successful signup', async () => {
  return (await request(app).post('api/users/signup'))
    .body({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});
