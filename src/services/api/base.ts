import ky from 'ky';

const API_URL = 'http://localhost:3000/api/';

const apiClient = ky.create({
  prefixUrl: API_URL,
  throwHttpErrors: false,
});

const { get, post, put, delete: destroy } = apiClient;

export { get, post, put, destroy };
