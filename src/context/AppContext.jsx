import { createContext, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

export const AppContext = createContext();

const initialState = {
  activities: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};