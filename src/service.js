import axios from 'axios';

export const baseUrl = 'https://fast-fjord-69046.herokuapp.com';

export const service = axios.create({
   baseURL: baseUrl,
   headers: {
      'Content-Type': 'application/json'
   }
});

export const Auth = {
   login: value => service.post('/login', value),
   getUser: id => service.post(`api/v1/user-info/${id}`)
};