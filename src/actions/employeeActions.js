import { FETCH_EMPLOYEES_SUCCESS } from '../constants/ActionTypes';
import employeesData from '../data/employees.json';

export const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const fetchEmployees = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(fetchEmployeesSuccess(employeesData));
    }, 1000);
  };
};
