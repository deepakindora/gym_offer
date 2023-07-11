import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyOffer } from '../actions/offerActions';
import { useNavigate } from 'react-router-dom';

const ApplyOffer = ({ match }) => {
  const employeeId = match.params.id;
  const employees = useSelector((state) => state.employees);
  const employee = employees.find((emp) => emp.id === parseInt(employeeId));
  const dispatch = useDispatch();
  const history = useNavigate();

  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    dispatch(applyOffer());
    setApplied(true);
  };

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  return (
    <div>
      <h2>Apply Offer</h2>
      <p>Offer for {employee.name} applied successfully.</p>
      {applied ? (
        <p>Offer already applied.</p>
      ) : (
        <button onClick={handleApply}>Apply for offer</button>
      )}
      <br />
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default ApplyOffer;
