import React, { useState } from "react";
import "../styles/Experience.css";

export default function Experience() {
  const [editing, setEditing] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const handleEdit = () => setEditing(true);

  return (
    <div className="experience">
      <h2>Experience</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={formData.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={formData.endDate}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {formData.company}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Responsibilities:</strong> {formData.responsibilities}</p>
          <p><strong>From:</strong> {formData.startDate} <strong>Until:</strong> {formData.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
