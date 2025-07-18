import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CustomerDashboard from './pages/CustomerDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PersonList from './components/PersonList';
import CaretakerPage from './pages/CaretakerPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/dashboard" element={<CustomerDashboard />} />
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/professionals" element={<PersonList />} />
          <Route path="/caretakers" element={<CaretakerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;