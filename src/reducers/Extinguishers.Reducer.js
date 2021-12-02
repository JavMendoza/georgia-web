export default function ExtinguishersReducer(state, action) {
  switch (action.type) {
    case "SET_EXTINGUISHERS":
      return { ...state, extinguishers: action.payload };
    default:
      return state;
  }
}
