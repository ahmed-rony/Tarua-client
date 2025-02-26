import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  selectedDate: null,
  selectedTime: null,
  selectedShowId: null,
  selectedSeats: [],
  totalPrice: 0, // New field for storing total price
  email: "",
};

const ShowContext = createContext(INITIAL_STATE);

const showReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_DATE":
      return {
        ...state,
        selectedDate: action.payload,
        selectedTime: null,
        selectedShowId: null,
        selectedSeats: [],
        totalPrice: 0,
      };

    case "SET_SELECTED_TIME":
      return {
        ...state,
        selectedTime: action.payload.time,
        selectedShowId: action.payload.showId,
        selectedSeats: [],
        totalPrice: 0,
      };

    case "SET_SELECTED_SEATS": {
      const selectedSeats = action.payload;
      const totalPrice = action.totalPrice; // Use the total price passed from the action
      return { ...state, selectedSeats, totalPrice };
    }

    case "SET_USER_EMAIL":
      return { ...state, email: action.payload };

    case "RESET_FORM":
      return INITIAL_STATE;

    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};


export const ShowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(showReducer, INITIAL_STATE);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ShowContext.Provider value={contextValue}>{children}</ShowContext.Provider>
  );
};

export default ShowContext;
