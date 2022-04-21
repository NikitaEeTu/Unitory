const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
export const addEmployee = (employee) => {
  return {
    type: CREATE,
    payload: employee,
  };
};
export const deleteEmployee = (employee) => {
  return {
    type: DELETE,
    payload: employee,
  };
};

export const addGroup = (group) => {
  return {
    type: CREATE,
    payload: group,
  };
};
export const updateGroup = (group) => {
  return {
    type: UPDATE,
    payload: group,
  };
};
export const deleteGroup = (group) => {
  return {
    type: DELETE,
    payload: group,
  };
};
export const addCustomer = (customer) => {
  return {
    type: CREATE,
    payload: customer,
  };
};
