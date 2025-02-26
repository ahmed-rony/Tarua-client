import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  title: "",
  description: [],
  rawDescription: "",
  image: "",
  dramaPics: [],
  director: "",
  designers: [],
  rawDesigners: "",
  actors: [],
  rawActors: "",
  directorsWord: "",
  mediaAwards: [{ year: "", description: "" }], // Ensure an initial empty object
};


const CreateDramaContext = createContext(INITIAL_STATE);

const CreateDramaReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };

    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.data,
        [action.payload.rawField]: action.payload.rawData,
      };

      case "ADD_MEDIA_AWARD":
        return {
          ...state,
          mediaAwards: [...state.mediaAwards, { year: "", description: "" }], // Add an empty award
        };
  
      case "UPDATE_MEDIA_AWARD":
        return {
          ...state,
          mediaAwards: state.mediaAwards.map((award, index) =>
            index === action.payload.index
              ? { ...award, [action.payload.field]: action.payload.value }
              : award
          ),
        };
  
      case "REMOVE_MEDIA_AWARD":
        return {
          ...state,
          mediaAwards: state.mediaAwards.filter((_, index) => index !== action.payload),
        };

    case "ADD_IMAGES":
      return {
        ...state,
        image: action.payload.projectCover || state.image,
        dramaPics: action.payload.uploadImg || state.dramaPics,
      };

    case "RESET_FORM":
      return INITIAL_STATE;

    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const CreateDramaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CreateDramaReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CreateDramaContext.Provider value={contextValue}>
      {children}
    </CreateDramaContext.Provider>
  );
};

export default CreateDramaContext;
