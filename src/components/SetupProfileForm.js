import React, { useState } from "react";
import "./SetupProfileForm.css";

const SetupProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "Anuj Verma",
    id: "@anujvermaa664",
    bio: "--------",
    fees: "------",
    experience: "-----",
    language: "xxxxxxxxxxxxxx",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="setup-profile-container">
      <h2>Set up Profile</h2>
      <div className="profile-photo">Upload Profile Photo</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Id
          <input
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label>
        <label>
          Bio
          <input
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </label>
        <label>
          Fees
          <input
            name="fees"
            value={formData.fees}
            onChange={handleChange}
          />
        </label>
        <label>
          Experience
          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </label>
        <label>
          Language
          <input
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </label>
        <button type="button" className="upload-btn">
          ⬆️ Upload Certifications
        </button>
        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default SetupProfileForm;
