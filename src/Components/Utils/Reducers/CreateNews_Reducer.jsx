import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  title: "",
  url: "",
  description: "",
  image: "",
  date: "",
};

const CreateNewsContext = createContext(INITIAL_STATE);

const CreateNewsReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };

    case "ADD_IMAGES":
      return {
        ...state,
        image: action.payload.projectCover || state.image,
      };
    case "SET_EDIT_NEWS": // ✅ Add this case
      return { ...state, ...action.payload };

    case "RESET_FORM":
      return INITIAL_STATE;

    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const CreateNewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CreateNewsReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CreateNewsContext.Provider value={contextValue}>
      {children}
    </CreateNewsContext.Provider>
  );
};

export default CreateNewsContext;
