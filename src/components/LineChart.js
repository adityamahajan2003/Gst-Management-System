import React from 'react';
import './Chart.css';
import LineChartImg from '../../src/assets/LineChart.png'; 

const LineChart = () => {
  return (
    <div className="chart">
      <img src={LineChartImg} alt="Line Chart" />
    </div>
  );
};

export default LineChart;