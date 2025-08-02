import React, { useEffect, useState } from "react";
import "./ReportPage.css";

const ReportPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/reportData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="report-container">
      <aside className="sidebar">
        <h2 className="logo">Eparse Matrix Solution</h2>
        <nav>
          {["Dashboard", "Client Management", "Document Management", "GST Filing", "Quotation & Invoice", "Payment", "Report", "Support", "Setting"].map((item) => (
            <button key={item} className={`sidebar-btn ${item === "Report" ? "active" : ""}`}>
              {item}
            </button>
          ))}
        </nav>
        <button className="logout-btn">Log Out</button>
      </aside>

      <main className="report-main">
        <div className="report-header">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="view-report-btn">View Report</button>
        </div>

        <div className="report-grid">
          <div className="card">
            <h3>Overview</h3>
            <p className="green">GST Filings: {data.overview.gst.completed} (Completed)</p>
            <p className="red">GST Filings: {data.overview.gst.pending} (Pending)</p>
            <p className="green">Income Tax Filings: {data.overview.incomeTax.completed} (Completed)</p>
            <p className="red">Income Tax Filings: {data.overview.incomeTax.pending} (Pending)</p>
          </div>

          <div className="card">
            <h3>Upcoming Deadlines</h3>
            <ul>
              {data.deadlines.gst.map((item, i) => (
                <li key={i}>GST - {item}</li>
              ))}
              {data.deadlines.it.map((item, i) => (
                <li key={i}>IT - {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card table-card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Filing Type</th>
                <th>Total Filed</th>
                <th>Pending</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.filings.map((f, i) => (
                <tr key={i}>
                  <td>{f.name}</td>
                  <td>{f.type}</td>
                  <td>{f.total}</td>
                  <td>{f.pending}</td>
                  <td>{f.dueDate}</td>
                  <td>
                    <span className={`status ${f.status.toLowerCase()}`}>
                      {f.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ReportPage;
