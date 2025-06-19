import React from 'react';
import './Chart.css';
import PieChartImg from '../../src/assets/PieChart.png'; 

const PieChart = () => {
  return (
    <div className="chart">
      <img src={PieChartImg} alt="Pie Chart" />
    </div>
  );
};

export default PieChart;
