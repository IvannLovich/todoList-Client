import axios from 'axios';

export const API_ROOT =
  process.env.REACT_APP_API_ROOT || 'https://djanguno.herokuapp.com/api/';

const client = axios.create({
  baseURL: API_ROOT,
});

const responseBody = (res) => res.data.results;
const requests = {
  delete: (url) => client.delete(url).then(responseBody),
  get: (url) => client.get(url).then(responseBody),
  put: (url, body) => client.put(url, body).then(responseBody),
  patch: (url, body) => client.patch(url, body).then(responseBody),
  post: (url, body) => client.post(url, body).then(responseBody),
};

export { client };
export default requests;
