import config from '../config/config';

async function getAllExtinguishers() {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/matafuegos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token,
    }
  })
  .then(response => {
    return response.json();
  })
}

async function getExtinguisherById(id) {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/matafuegos/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token,
    }
  })
  .then(response => {
    return response.json();
  })
}

export default {
  getAllExtinguishers,
  getExtinguisherById
}