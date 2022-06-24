const callsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_CALLS":
      return {
        ...state,
        calls: action.payload,
        loading: false,
      };
    case "SET_CALL":
      return {
        ...state,
        call: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default callsReducer;
