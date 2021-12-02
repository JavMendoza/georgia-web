export function SetUsers(users) {
  return {
    type: 'SET_USERS',
    payload: users
  }
}

export function AddRepartidor(user) {
  return {
    type: 'ADD_REPARTIDOR',
    payload: user
  }
}