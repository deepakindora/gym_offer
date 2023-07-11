import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../actions/employeeActions';
import { Link } from 'react-router-dom';

const Home = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
