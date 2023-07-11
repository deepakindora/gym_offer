import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EmployeeDetails = ({ match }) => {
  const employeeId = match.params.id;
  const employees = useSelector((state) => state.employees);
  const employee = employees.find((emp) => emp.id === parseInt(employeeId));

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <h3>Name: {employee.name}</h3>
      <p>Favorite Sport Game: {employee.favoriteSport}</p>
      <p>Accomplishments: {employee.accomplishments}</p>
      <Link to={`/employee/${employeeId}/gym-offers`}>Gym Offer</Link>
    </div>
  );
};

export default EmployeeDetails;
