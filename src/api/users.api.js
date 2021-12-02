import config from '../config/config';

async function logIn(email, password) {
  return fetch(`${config.api.url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Error al intentar logear al usuario");
    }
  })
}

async function getAllUsers() {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/usuarios`, {
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

async function getAllRepartidores() {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/usuarios?filter=rol:repartidor`, {
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

async function addRepartidor(user) {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token,
    },
    body: JSON.stringify({ 
      ...user,
      password: "12312312",
      rol: "repartidor"
    }),
  })
  .then(response => {
    return response.json();
  })
}

export default {
  logIn,
  getAllUsers,
  addRepartidor,
  getAllRepartidores
}