import { createContext, useReducer } from "react";

import callsReducer from "./CallsReducer";
const CallsContext = createContext();

export const CallsProvider = ({ children }) => {
  //Initial state
  const initialState = {
    calls: [],
    call: {},
    loading: false,
  };
  //Our state and dispatch that will be able to give the current state and dispatch from the reducer
  const [state, dispatch] = useReducer(callsReducer, initialState);

  //This is the provider for our context
  return (
    <CallsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CallsContext.Provider>
  );
};

export default CallsContext;
