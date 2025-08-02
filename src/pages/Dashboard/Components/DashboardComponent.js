import React from "react";
import Card from "../../../components/Card";
import LineChart from "../../../components/LineChart";
import BarChart from "../../../components/BarChart";
import PieChart from "../../../components/PieChart";
import RecentTransactions from "./RecentTransaction";
import Requests from "./Requests";
import requests from "../../../Config/Request.json";
import PendingApproval from "../../../components/PendingApproval";
import "./DashboardComponent.css";

const DashboardComponent = ({ showRequests, setShowRequests }) => {
  return (
    <main className="dashboard-content">
      {showRequests ? (
        <>
          <div className="dashboard-requests-header">
            Requests ({requests.length})
          </div>
          <Requests />
        </>
      ) : (
        <>
          <h2>Hi XYZ, Welcome back</h2>

          <div className="dashboard-cards-row">
            <Card title="Total User" value="20k" borderColor="brown" />
            <Card title="Total Revenue Generated" value="13,4321k" borderColor="purple" />
            <Card title="Total GST Collected" value="5,4321k" borderColor="green" />
            <Card title="Outstanding Payments" value="2321k" borderColor="red" />
          </div>

          <div className="dashboard-charts-row">
            <LineChart />
            <BarChart />
            <PieChart />
          </div>

          <div className="dashboard-bottom-flex">
            <RecentTransactions />
            <div onClick={() => setShowRequests(true)}>
              <PendingApproval />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default DashboardComponent;
