import { FETCH_EMPLOYEES_SUCCESS } from '../constants/ActionTypes';
import employeesData from '../data/employees.json';

const initialState = [];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default employeeReducer;
