import { ResponsePromise } from 'ky';
import { post } from './base';

export default {
  login: (data: { email: string; password: string }): ResponsePromise =>
    post('auth/login', {
      json: data,
    }),
  register: (data: {
    email: string;
    password: string;
    username: string;
  }): ResponsePromise =>
    post('auth/register', {
      json: data,
    }),
};
