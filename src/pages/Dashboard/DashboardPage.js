import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Card from "../../components/Card";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import "./DashboardPage.css";
import RecentTransactions from "./RecentTransaction";
import PendingApproval from "../../components/PendingApproval";
import Requests from "./Requests";

const DashboardPage = () => {
  const [showRequests, setShowRequests] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logging out..."); 
    navigate("/login");
  };

  return (
    <>
      <Topbar />
      <div className="dashboard-container">
        <Sidebar onLogout={handleLogout} />
        <main className="dashboard-content">
          {showRequests ? (
            <Requests goBack={() => setShowRequests(false)} />
          ) : (
            <>
              <h2>Hi XYZ, Welcome back</h2>
              <div className="cards-row">
                <Card title="Total User" value="20k" borderColor="brown" />
                <Card title="Total Revenue Generated" value="13,4321k" borderColor="purple" />
                <Card title="Total GST Collected" value="5,4321k" borderColor="green" />
                <Card title="Outstanding Payments" value="2321k" borderColor="red" />
              </div>
              <div className="charts-row">
                <LineChart />
                <BarChart />
                <PieChart />
              </div>
              <div className="bottom-flex">
                <RecentTransactions />
                <div onClick={() => setShowRequests(true)}>
                  <PendingApproval />
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
