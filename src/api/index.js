import axios from 'axios';

const api = axios.create({
  baseURL: 'http://fast-rider.herokuapp.com/api',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const getRides = () => {
  return api.get('/v1/rides', {
    params: {
      token: process.env.REACT_APP_API_KEY,
    },
  });
};

export const getTickets = (data) => {
  return api.post('/v1/tickets', {
    pin: data.pin,
    ride_id: data.ride,
    token: process.env.REACT_APP_API_KEY,
  });
};
