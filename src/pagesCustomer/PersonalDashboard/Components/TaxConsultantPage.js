import React, { useState } from "react";
import "./TaxConsultantPage.css";
import profileImage from "../../../assets/PersonalDashboard/profileImg.png";
import ConsultantProfile from "../../PersonalDashboard/Components/ConsultantProfile";
import ConsultPage from "../../PersonalDashboard/Components/ConsultPage";
import taxconsultant from "../../../assets/PersonalDashboard/taxconsultant.png"; // Correct image

const TaxConsultantPage = () => {
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [consultingWith, setConsultingWith] = useState(null);

  const consultants = new Array(9).fill({
    name: "CA Anuj Verma",
    handle: "@anujverma664",
    specialization: "Specializes in Personal Income Tax, Investment Planning",
    experience: "2+ years of experience in tax consultation",
    rating: 4,
    gender: "Male",
    phone: "XXXXXX",
    email: "XXXXXX",
    location: "XXXXXX",
    certifications: "Certified Chartered Accountant (CA)",
    fee: "Rs 1000/Hour",
    languages: ["Hindi", "English"],
    reviews: [
      {
        name: "Anjali Singh",
        comment:
          "Anuj was extremely professional and helped me get my taxes filed quickly. His expertise in personal income tax saved me a lot of money on deductions. Highly recommend!",
        rating: 4,
      },
    ],
  });

  const handleBack = () => setSelectedConsultant(null);
  const handleCloseConsult = () => setConsultingWith(null);

  return (
    <div className="tax-page">
      {consultingWith ? (
        <ConsultPage consultant={consultingWith} onClose={handleCloseConsult} />
      ) : selectedConsultant ? (
        <ConsultantProfile
          consultant={selectedConsultant}
          onBack={handleBack}
          onConsult={(consultant) => setConsultingWith(consultant)}
        />
      ) : (
        <>
          <header className="tax-header">
            <div>
              <h2>Need help with your taxes?</h2>
              <p>Find a trusted tax consultant to assist you.</p>
            </div>
            <img
              src={taxconsultant}
              alt="Tax Consultant Banner"
              className="tax-header-img"
            />
          </header>

          <h3 className="section-title">Choose your Tax Consultant</h3>

          <div className="consultants-grid">
            {consultants.map((consultant, index) => (
              <div className="consultant-card" key={index}>
                <button
                  className="view-profile"
                  onClick={() => setSelectedConsultant(consultant)}
                >
                  View Profile
                </button>

                <div className="card-header-tax">
                  <img
                    src={profileImage}
                    alt="Consultant"
                    className="profile-image"
                  />
                  <div className="profile-details">
                    <h4 className="consultant-name">{consultant.name}</h4>
                    <p className="handle">{consultant.handle}</p>
                  </div>
                </div>

                <p className="specialization">{consultant.specialization}</p>
                <p className="experience">{consultant.experience}</p>

                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= consultant.rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TaxConsultantPage;
