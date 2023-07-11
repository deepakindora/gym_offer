import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const GymOffers = ({ match }) => {
  const employeeId = match.params.id;
  const employees = useSelector((state) => state.employees);
  const employee = employees.find((emp) => emp.id === parseInt(employeeId));

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  let offer;
  if (employee.age > 45 && employee.age < 60 && employee.salary < 100000) {
    offer = '7000 per month';
  } else if (employee.age < 45 && employee.salary > 100000) {
    offer = '1200 per month';
  } else if (employee.age > 60 && employee.salary < 100000) {
    offer = '2000 per month';
  } else {
    offer = 'No suitable offer available.';
  }

  return (
    <div>
      <h2>Gym Offers</h2>
      <p>
        Offer for {employee.name}: {offer}
      </p>
      <Link to={`/employee/${employeeId}/gym-offers/apply-offer`}>
        Apply for offer
      </Link>
    </div>
  );
};

export default GymOffers;
