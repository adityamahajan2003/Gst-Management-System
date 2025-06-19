import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Card from '../../components/Card';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import './DashboardPage.css';
import RecentTransactions from './RecentTransaction';
import PendingApproval from '../../components/PendingApproval';

const DashboardPage = () => {
  return (
    <>
        <Topbar />
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
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
        <div className='bottom-flex'>
          <RecentTransactions />
          <PendingApproval />
        </div>
      </main>
    </div>
    </>
  );
};

export default DashboardPage;
