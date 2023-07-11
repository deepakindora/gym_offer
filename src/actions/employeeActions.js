import { FETCH_EMPLOYEES_SUCCESS } from '../constants/ActionTypes';
import employeesData from '../data/employees.json';

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: employeesData });
  };
};
