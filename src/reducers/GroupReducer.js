import { groups } from "../mock-data/groups";
const GroupReducer = (state = groups, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return [
        ...state.filter((group) => group.id !== parseInt(action.payload.id)),
      ];
    case "UPDATE":
      return [
        ...state.filter((group) => group.id !== parseInt(action.payload.id)),
        action.payload,
      ];
    default:
      return state;
  }
};

export default GroupReducer;
