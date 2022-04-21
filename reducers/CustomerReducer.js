import { customers } from "mock-data/customers";
const CustomerReducer = (state = customers, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default CustomerReducer;
