import React, { useState } from "react";
import "./ConsultantProfile.css";
import profileBanner from "../../../assets/PersonalDashboard/viewprofile.png";
import profileImage from "../../../assets/PersonalDashboard/profileImg.png";
import RequestModal from "../Components/RequestModal";

const ConsultantProfile = ({ consultant, onBack, onConsult }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConsultClick = () => setShowModal(true);
  const handleCancel = () => setShowModal(false);
  const handleConfirm = () => {
    setShowModal(false);
    onConsult(consultant); // Trigger ConsultPage from parent
  };

  return (
    <>
      {showModal && (
        <RequestModal
          consultant={consultant}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}

      <div className="profile-detail-view">
        <button className="back-button" onClick={onBack}>
          ← Back to Consultant List
        </button>

        <div className="profile-banner">
          <img src={profileBanner} alt="Banner" className="profile-banner-img" />
          <div className="profile-info">
            <img src={profileImage} alt="Profile" className="profile-pic" />
            <div>
              <h2 className="consultant-name purple">{consultant.name}</h2>
              <p className="handle">{consultant.handle}</p>
            </div>
            <button className="consult-btn" onClick={handleConsultClick}>
              Consult
            </button>
          </div>
        </div>

        <div className="profile-layout">
          <div className="left-pane">
            <h4>About</h4>
            <ul>
              <li>👤 {consultant.gender}</li>
              <li>📞 {consultant.phone}</li>
              <li>✉️ {consultant.email}</li>
              <li>📍 {consultant.location}</li>
            </ul>
          </div>

          <div className="center-pane">
            <h4>Bio</h4>
            <p>{consultant.specialization}</p>
            <p>{consultant.experience}</p>

            <h4>Certifications</h4>
            <p>{consultant.certifications}</p>

            <h4>Consultation Fee</h4>
            <p>{consultant.fee}</p>

            <h4>Language</h4>
            <ul>
              {consultant.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>

          <div className="right-pane">
            <div className="reviews-header">
              <h4>Reviews</h4>
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

            {consultant.reviews.map((review, idx) => (
              <div className="review-card" key={idx}>
                <strong>{review.name}</strong>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= review.rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantProfile;
