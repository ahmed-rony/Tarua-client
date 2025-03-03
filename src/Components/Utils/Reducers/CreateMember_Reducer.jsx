import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  name: "",
  role: [],
  email: "",
  phone: "",
  description: [],
  performance: [],
  mediaAwards: [{ year: "", description: "" }],
  image: "",
  rawRole: "",
  rawDescription: "",
  rawPerformance: "",
};

const CreateMemberContext = createContext(INITIAL_STATE);

const CreateMemberReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.data,
        [action.payload.rawField]: action.payload.rawData,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        image: action.payload.projectCover || state.image,
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
    case "SET_EDIT_MEMBER": // ✅ Add this case
      return { ...state, ...action.payload };

    case "RESET_FORM":
      return INITIAL_STATE;

    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const CreateMemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CreateMemberReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CreateMemberContext.Provider value={contextValue}>
      {children}
    </CreateMemberContext.Provider>
  );
};

export default CreateMemberContext;
