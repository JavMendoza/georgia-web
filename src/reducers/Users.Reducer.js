export default function UsersReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      const repartidores = action.payload.filter(user => user.rol === "repartidor");
      const comunes = action.payload.filter(user => user.rol === "comun");
      return { ...state, comunes, repartidores };
    case "ADD_REPARTIDOR":
      return { ...state, repartidores: [...state.repartidores, action.payload] };
    default:
      return state;
  }
}
