import config from '../config/config';

async function getAllOrders() {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/pedidos?filter=estado:pendiente`, {
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

async function getAllOrderTypes() {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${config.api.url}/tipoPedidos`, {
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
  getAllOrders,
  getAllOrderTypes,
}