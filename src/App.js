import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import EmployeeDetails from './components/EmployeeDetails';
import GymOffers from './components/GymOffers';
import ApplyOffer from './components/ApplyOffer';
import SuccessPage from './components/SuccessPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/employee/:id" element={<EmployeeDetails />} />
            <Route
              exact
              path="/employee/:id/gym-offers"
              element={<GymOffers />}
            />
            <Route
              exact
              path="/employee/:id/gym-offers/apply-offer"
              element={<ApplyOffer />}
            />
            <Route exact path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
