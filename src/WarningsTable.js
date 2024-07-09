


import React from 'react';

const countTotalsAndPercentages = (data1) => {
  const monthCounts = new Array(12).fill(0);
  const monthPercentages = new Array(12).fill(0);
  const monthCriticals = new Array(12).fill(0);
  const monthCriticalPercentages = new Array(12).fill(0);
  const monthInfrastructure = new Array(12).fill(0);
  const monthInfrastructurePercentages = new Array(12).fill(0);


  if (!data1 || data1.length === 0) {
    return { monthCounts, monthPercentages, monthCriticals, monthCriticalPercentages, monthInfrastructure ,monthInfrastructurePercentages};
  }

  data1.forEach((prod) => {
    if (!prod.info || !Array.isArray(prod.info)) {
      return;
    }
    prod.info.forEach((i) => {
      const date = new Date(i.Date);
      const month = date.getMonth();
      const warnings = parseFloat(i.scom_alerts?.total_warnings) || 0;
      const criticals = parseFloat(i.scom_alerts?.total_critical) || 0;
      const infrastructure = parseFloat(i.infra_health_coverage) || 0;
      const serverss=parseFloat(i.number_of_servers) ||0;
      monthCounts[month] += warnings;
      monthCriticals[month] += criticals;
      monthInfrastructure[month] = infrastructure;
      monthInfrastructurePercentages[month]=(monthInfrastructure[month]/serverss)*100;
    });
  });

  // Calculate percentages
  for (let i = 1; i < 12; i++) {
    if (monthCounts[i - 1] !== 0) {
      monthPercentages[i] = ((monthCounts[i] - monthCounts[i - 1]) / monthCounts[i - 1]) * 100;
    }
    if (monthCriticals[i - 1] !== 0) {
      monthCriticalPercentages[i] = ((monthCriticals[i] - monthCriticals[i - 1]) / monthCriticals[i - 1]) * 100;
    }
  }

  return { monthCounts, monthPercentages, monthCriticals, monthCriticalPercentages, monthInfrastructure ,monthInfrastructurePercentages};
};

const WarningsTable = ({ data1 }) => {
  const monthOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const { monthCounts, monthPercentages, monthCriticals, monthCriticalPercentages,monthInfrastructure,monthInfrastructurePercentages } = countTotalsAndPercentages(data1);
  
  console.log('Total Warnings Per Month:', monthCounts);
  console.log('Percentage Change in Warnings:', monthPercentages);
  console.log('Total Criticals Per Month:', monthCriticals);
  console.log('Percentage Change in Criticals:', monthCriticalPercentages);

  return (
    <div style={{ marginTop: '20px', width: '90%', overflowX: 'auto' }}>
        <h2 style={{ color: 'white' }}>SCOM Alerts Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid white', padding: '8px' }}>Month</th>
            {monthOrder.map((month, index) => (
              <th key={index} style={{ border: '1px solid white', padding: '8px' }}>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid white', padding: '8px' }}>Total Warnings</td>
            {monthCounts.map((count, index) => (
              <td key={index} style={{ border: '1px solid white', padding: '8px' }}>{count}</td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '1px solid white', padding: '8px' }}>Percentage Change Warnings</td>
            {monthPercentages.map((percentage, index) => (
              <td key={index} style={{ border: '1px solid white', padding: '8px' }}>{percentage.toFixed(2)}%</td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '1px solid white', padding: '8px' }}>Total Criticals</td>
            {monthCriticals.map((count, index) => (
              <td key={index} style={{ border: '1px solid white', padding: '8px' }}>{count}</td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '1px solid white', padding: '8px' }}>Percentage Change Criticals</td>
            {monthCriticalPercentages.map((percentage, index) => (
              <td key={index} style={{ border: '1px solid white', padding: '8px' }}>{percentage.toFixed(2)}%</td>
            ))}
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: 'white' }}>Infrastructure Health Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid white', padding: '8px' }}>Month</th>
            {monthOrder.map((month, index) => (
              <th key={index} style={{ border: '1px solid white', padding: '8px' }}>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid white', padding: '8px' }}>Infrastructure Health Coverage</td>
            {monthInfrastructure.map((coverage, index) => (
              <td key={index} style={{ border: '1px solid white', padding: '8px' }}>{coverage}</td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '1px solid white', padding: '8px' }}>Infrastructure Health Coverage Percentage</td>
            {monthInfrastructurePercentages.map((coverage, index) => (
              <td key={index} style={{ border: '1px solid white', padding: '8px' }}>{coverage.toFixed(2)}%</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WarningsTable;
