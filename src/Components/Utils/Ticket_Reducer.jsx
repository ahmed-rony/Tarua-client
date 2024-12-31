import { createContext, useReducer, useEffect } from "react";

// Initial state
const INITIAL_STATE = {
  purchaserName: "",
  date: "",
  time: "",
  auditorium: "",
  ticketPrice: 0,
  seats: [],
  error: null, // Added error to manage validation messages
};

// Helper functions for validation
const validateField = (name, value) => {
  switch (name) {
    case "ticketPrice":
      return value >= 0 ? value : 0;
    case "purchaserName":
      return value.trim();
    default:
      return value;
  }
};

// Reducer function
const TicketReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: validateField(
          action.payload.name,
          action.payload.value
        ),
        error: null, // Clear errors on valid input
      };

    case "RESET_FORM":
      return { ...INITIAL_STATE };

    case "SET_STATE":
      return { ...state, ...action.payload };

    case "ADD_SEAT":
      if (state.seats.length >= 5) {
        return {
          ...state,
          error: "You can only book a maximum of 5 seats.",
        };
      }
      return {
        ...state,
        seats: [...state.seats, action.payload],
        error: null, // Clear errors on successful addition
      };

    case "TOGGLE_SEAT":
      if (state.seats.includes(action.payload)) {
        return {
          ...state,
          seats: state.seats.filter((seat) => seat !== action.payload),
          error: null,
        };
      }
      if (state.seats.length >= 5) {
        return {
          ...state,
          error: "You can only book a maximum of 5 seats.",
        };
      }
      return {
        ...state,
        seats: [...state.seats, action.payload],
        error: null,
      };

    case "REMOVE_SEAT":
      return {
        ...state,
        seats: state.seats.filter((seat) => seat !== action.payload),
        error: null, // Clear errors if applicable
      };

    default:
      return state;
  }
};

// Create context
const TicketContext = createContext(INITIAL_STATE);

// Context provider
export const TicketProvider = (props) => {
  const [state, dispatch] = useReducer(TicketReducer, INITIAL_STATE);

  // Persist state in localStorage
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("TicketContext"));
    if (storedState) {
      dispatch({ type: "SET_STATE", payload: storedState });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TicketContext", JSON.stringify(state));
  }, [state]);

  // Utility functions
  const resetForm = () => dispatch({ type: "RESET_FORM" });

  const addSeat = (seat) => dispatch({ type: "ADD_SEAT", payload: seat });

  const removeSeat = (seat) => dispatch({ type: "REMOVE_SEAT", payload: seat });
  const toggleSeat = (seat) => {
    dispatch({ type: "TOGGLE_SEAT", payload: seat });
  };

  const contextValue = {
    state,
    dispatch,
    resetForm,
    addSeat,
    removeSeat,
    toggleSeat
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
