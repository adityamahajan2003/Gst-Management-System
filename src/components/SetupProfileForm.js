import React, { useState, useRef } from "react";
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

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  // ✅ Add a ref for the hidden file input
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Profile Photo:", profilePhoto);
  };

  return (
    <div className="setup-profile-container">
      <h2>Set up Profile</h2>

      <div className="profile-photo" onClick={handlePhotoClick}>
        {preview ? (
          <img src={preview} alt="Profile Preview" className="preview-img" />
        ) : (
          <span>Upload Profile Photo</span>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          ref={fileInputRef}
          style={{ display: "none" }} // ✅ hide the input
        />
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Id
          <input name="id" value={formData.id} onChange={handleChange} />
        </label>
        <label>
          Bio
          <input name="bio" value={formData.bio} onChange={handleChange} />
        </label>
        <label>
          Fees
          <input name="fees" value={formData.fees} onChange={handleChange} />
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
