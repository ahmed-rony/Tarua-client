import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  title: "",
  description: [],
  rawDescription: "",
  image: "",
  dramaPics: [],
  director: [{ id: "", name: "" }],
  actors: [{ id: "", name: "" }],
  designers: [{ id: "", name: "" }],
  mediaAwards: [{ year: "", description: "" }],
  directorsWord: "",
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
    case "UPDATE_MEDIA_AWARD": {
      const updatedMediaAwards = state.mediaAwards.map((award, i) =>
        i === action.payload.index
          ? { ...award, [action.payload.field]: action.payload.value }
          : award
      );

      return { ...state, mediaAwards: updatedMediaAwards };
    }

    case "REMOVE_MEDIA_AWARD":
      return {
        ...state,
        mediaAwards: state.mediaAwards.filter(
          (_, index) => index !== action.payload
        ),
      };
    case "ADD_IMAGES":
      return {
        ...state,
        image: action.payload.projectCover || state.image,
        dramaPics: action.payload.uploadImg || state.dramaPics,
      };
    case "ADD_ITEM":
      return {
        ...state,
        [action.payload.field]: [
          ...state[action.payload.field], // Spread the current items
          action.payload.item, // Add the new item (actor)
        ],
      };

    case "REMOVE_ITEM":
      // Remove the actor by matching its 'id' field
      return {
        ...state,
        [action.payload.field]: state[action.payload.field].filter(
          (item) => item.id !== action.payload.id
        ),
      };
      case "TOGGLE_SELECTION": {
        const existingItems = state[action.payload.field];
      
        // Check if the item already exists, if yes, remove it
        const updatedItems = existingItems.some((item) => item.id === action.payload.item.id)
          ? existingItems.filter((item) => item.id !== action.payload.item.id)
          : [...existingItems, action.payload.item];
      
        return {
          ...state,
          [action.payload.field]: updatedItems,
        };
      }
      
      case "SET_EDIT_DRAMA": // ✅ Add this case
      return { ...state, ...action.payload };

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
