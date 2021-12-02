export function LogIn(data) {
  return {
    type: 'LOG_IN',
    payload: data
  }
}

export function LogOut() {
  return {
    type: 'LOG_OUT',
  }
}