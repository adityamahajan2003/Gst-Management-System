import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import VerificationPage from "./pages/VerificationPage/VerificationPage";
import SetupProfilePage from "./pages/SetupProfilePage/SetupProfilePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import PersonalDashboardPage from "./pagesCustomer/PersonalDashboard/PersonalDashboardPage";
import BusinessDashboardPage from "./pagesCustomer/BusinessDashboard/BusinessDashboardPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/setup" element={<SetupProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/Customer/personal-dashboard" element={<PersonalDashboardPage />} />
          <Route path="/Customer/business-dashboard" element={<BusinessDashboardPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
