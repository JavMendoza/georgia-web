export default function OrdersReducer(state, action) {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, pendingOrders: action.payload };
    default:
      return state;
  }
}
