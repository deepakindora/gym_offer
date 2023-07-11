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
            <Route exact path="/" component={Home} />
            <Route exact path="/employee/:id" component={EmployeeDetails} />
            <Route
              exact
              path="/employee/:id/gym-offers"
              component={GymOffers}
            />
            <Route
              exact
              path="/employee/:id/gym-offers/apply-offer"
              component={ApplyOffer}
            />
            <Route exact path="/success" component={SuccessPage} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
