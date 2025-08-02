import React, { useState } from "react";
import styles from "./IncomeTaxFilling.module.css";
import incometaxfillingimg from "../../../assets/PersonalDashboard/incometaxfilling.png";
import Stepper from "./Stepper";

const steps = ["Basic Detail", "Income Detail", "Deductions", "Summary"];

const IncomeTaxFilling = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    salary: "",
    interestIncome: "",
    rentalIncome: "",
    digitalAssets: "",
    otherIncome: "",
    exemptAllowances: "",
    homeLoanSelf: "",
    homeLoanLetOut: "",
    deduction80C: "",
    deduction80D: "",
    deduction80TTA: "",
    deduction80E: "",
  });

  const resetForm = () => {
    setCurrentStep(0);
    setSelectedYear("");
    setSelectedAge("");
    setFormData({
      salary: "",
      interestIncome: "",
      rentalIncome: "",
      digitalAssets: "",
      otherIncome: "",
      exemptAllowances: "",
      homeLoanSelf: "",
      homeLoanLetOut: "",
      deduction80C: "",
      deduction80D: "",
      deduction80TTA: "",
      deduction80E: "",
    });
  };

  const handleNext = () => {
    if (currentStep === 0 && (!selectedYear || !selectedAge)) {
      setError("Please select both financial year and age.");
      return;
    }
    setError("");
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className={styles.formBlock}>
              <label className={styles.sectionLabel}>
                Select Financial Year you want to Calculate
              </label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="year"
                    value="2024-25"
                    checked={selectedYear === "2024-25"}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  />
                  FY 2024–25 <span className={styles.badge}>Latest Budget</span>
                  <span className={styles.lightNote}>
                    (Return to be filed between 1 April 2025 – 31 March 2026)
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="year"
                    value="2023-24"
                    checked={selectedYear === "2023-24"}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  />
                  FY 2023–24
                  <span className={styles.lightNote}>
                    (Return to be filed between 1 April 2024 – 31 March 2025)
                  </span>
                </label>
              </div>
            </div>

            <div className={styles.formBlock}>
              <label className={styles.sectionLabel}>Select Age</label>
              <div className={styles.ageGroup}>
                {["18-25", "26-35", "36-45", "46-60", "61+"].map((age) => (
                  <label key={age}>
                    <input
                      type="radio"
                      name="age"
                      value={age}
                      checked={selectedAge === age}
                      onChange={(e) => setSelectedAge(e.target.value)}
                    />
                    {age.replace("-", " – ")} Yrs
                  </label>
                ))}
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <div className={styles.incomeForm}>
            <div className={styles.incomeGrid}>
              {[
                ["Income from Salary", "salary"],
                ["Other Income", "otherIncome"],
                ["Income from Interest", "interestIncome"],
                ["Exempt Allowances", "exemptAllowances"],
                ["Rental Income Received", "rentalIncome"],
                ["Interest on Home Loan (Self occupied)", "homeLoanSelf"],
                ["Income from Digital Assets", "digitalAssets"],
                ["Interest on Home Loan (Let out)", "homeLoanLetOut"],
              ].map(([label, name]) => (
                <div className={styles.incomeRow} key={name}>
                  <label>{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className={styles.deductionsForm}>
            <div className={styles.incomeGrid}>
              {[
                ["Section 80C (Investments, LIC, PPF, ELSS)", "deduction80C"],
                ["Section 80D (Health Insurance)", "deduction80D"],
                ["Section 80TTA (Savings Interest)", "deduction80TTA"],
                ["Education Loan Interest (80E)", "deduction80E"],
                ["Education Loan Interest (80E)", "deduction80E"],
                ["Education Loan Interest (80E)", "deduction80E"],
                ["Education Loan Interest (80E)", "deduction80E"],
              ].map(([label, name]) => (
                <div className={styles.incomeRow} key={name}>
                  <label>{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className={styles.summary}>
            <div className={styles.suggestion}>
              <strong>Suggestions:</strong> You should opt for{" "}
              <b>Old Regime</b> as it allows you to avail exemption and
              deduction from your income sources.
            </div>

            <table className={styles.summaryTable}>
              <thead>
                <tr>
                  <th></th>
                  <th>Old Regime<br />FY 2024–2025</th>
                  <th>New Regime<br />FY 2024–2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Income</td>
                  <td>Rs 000</td>
                  <td>Rs 000</td>
                </tr>
                <tr>
                  <td>Exemptions & Deductions</td>
                  <td>Rs 000</td>
                  <td>Rs 000</td>
                </tr>
                <tr>
                  <td>Taxable Income</td>
                  <td>Rs 000</td>
                  <td>Rs 000</td>
                </tr>
                <tr>
                  <td>Tax Due</td>
                  <td>Rs 000</td>
                  <td>Rs 000</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.tryAgain}>
              <button className={styles.tryAgainBtn} onClick={resetForm}>
                Try Calculator Again
              </button>
            </div>

            <div className={styles.share}>
              <p>Share on:</p>
              <div className={styles.icons}>
                <span>🟢</span> <span>🔵</span> <span>⚫</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.incomeTaxContainer}>
      <div className={styles.headerBanner}>
        <div className={styles.headerContent}>
          <h2>Welcome to Income Tax Filing</h2>
          <p>We're here to help you smoothly navigate the tax filing process.</p>
        </div>
        <div className={styles.headerImage}>
          <img src={incometaxfillingimg} alt="Income Tax Filing Banner" />
        </div>
      </div>

      <div className={styles.formSection}>
        <h3 className={styles.stepTitle}>Income Tax Calculator</h3>
        <p className={styles.financialYear}>Financial Year 2024–2025</p>
        <p className={styles.subheading}>
          Complete the steps below to easily file your Income Tax.
        </p>

        <Stepper currentStep={currentStep} steps={steps} />
        {renderStepContent()}
        {error && <p className={styles.formError}>{error}</p>}

        {/* Show navigation buttons for step 0, 1, 2 */}
        {currentStep < 3 && (
          <div className={styles.buttonRow}>
            {currentStep > 0 && (
              <button className={styles.backButton} onClick={handlePrevious}>
                ← Back
              </button>
            )}
            <button className={styles.nextButton} onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Finish" : "Next →"}
            </button>
          </div>
        )}

        {/* Show back button on summary (step 3) */}
        {currentStep === 3 && (
          <div className={styles.buttonRow}>
            <button className={styles.backButton} onClick={handlePrevious}>
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeTaxFilling;
