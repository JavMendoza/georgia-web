import { createContext, useReducer, useContext } from "react";
import API from '../api/orders.api';
import OrdersReducer from '../reducers/Orders.Reducer';
import { SetOrders } from '../actions/Orders.Action';

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [ordersState, dispatch] = useReducer(OrdersReducer, { pendingOrders: [] });

  const getAllOrders = () => {
    API.getAllOrders()
    .then(data => {
      dispatch(SetOrders(data));
    })
  }

  return <OrdersContext.Provider value={{ordersState, getAllOrders}}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within a OrdersProvider');
  }
  return context;
}