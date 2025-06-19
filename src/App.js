import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import SetupProfilePage from './pages/SetupProfilePage/SetupProfilePage';
import DashboardPage from './pages/Dashboard/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/forgot' element={<ForgotPassword/>} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/verification' element={<VerificationPage />} />
          <Route path='/setup' element={<SetupProfilePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
