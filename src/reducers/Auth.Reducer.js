export default function AuthReducer(state, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload.usuario };
    case "LOG_OUT":
      return { ...state, user: null };
    default:
      return state;
  }
}
