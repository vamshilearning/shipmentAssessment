import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CustomerOnboarding from './components/CustomerOnboarding';
import ShipmentList from './components/ShipmentList';
import DeliveryPartnerDashboard from './components/DeliveryPartnerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerOnboarding/>} />
        <Route path="/dashboard" element={<DeliveryPartnerDashboard/>} />
        <Route path="/shipments" element={<ShipmentList/>} />
      </Routes>
    </Router>
  );
}

export default App
