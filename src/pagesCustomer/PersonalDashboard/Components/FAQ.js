import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  { question: "How do I reset my password?", answer: "Go to settings → Security → Reset Password." },
  { question: "How can I view previous filings?", answer: "Navigate to the 'Documents' section on your dashboard." },
  { question: "How do I contact support?", answer: "Use the live chat or call our support line at 1800-123-456." },
  { question: "Where can I find my payment receipts?", answer: "In the 'Transactions' tab of your profile." },
  { question: "How to update PAN details?", answer: "Click on 'Profile' → 'KYC' and edit PAN info." },
  // Add more as needed...
];

const FAQ = ({ onBack }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <button className="faq-back-btn" onClick={onBack}>← Back</button>
      <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
      
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
