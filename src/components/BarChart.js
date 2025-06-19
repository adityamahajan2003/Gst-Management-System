import React from 'react';
import './Chart.css';
import BarChartImg from '../../src/assets/BarChart.png'; 

const BarChart = () => {
  return (
    <div className="chart">
      <img src={BarChartImg} alt="Bar Chart" />
    </div>
  );
};

export default BarChart;

