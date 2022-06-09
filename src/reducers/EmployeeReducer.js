import { employeesData } from "../mock-data/employees";
const EmployeeReducer = (state = employeesData, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((emp) => emp.id !== parseInt(action.payload));
    default:
      return state;
  }
};

export default EmployeeReducer;
