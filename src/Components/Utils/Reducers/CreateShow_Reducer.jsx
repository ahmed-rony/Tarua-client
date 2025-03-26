import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  dramaId: "",
  venueId: "",
  maxCapacity: 0,
  date: "",
  time: [],
  rawTime: "",
};

const CreateShowContext = createContext(INITIAL_STATE);

const CreateShowReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "UPDATE_TIME":
      return {
        ...state,
        time: action.payload.timeArray,
        rawTime: action.payload.rawTime,
      };
    case "SET_EDIT_SHOW": // ✅ Add this case
      return { ...state, ...action.payload };
    case "RESET_FORM":
      return INITIAL_STATE;
    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const CreateShowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CreateShowReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CreateShowContext.Provider value={contextValue}>
      {children}
    </CreateShowContext.Provider>
  );
};

export default CreateShowContext;
