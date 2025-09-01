import React, { useState } from "react";
import "../styles/Education.css";

export default function Education() {
  const [editing, setEditing] = useState(true);
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
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
    <div className="education">
      <h2>Education</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={formData.school}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date of Study"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {formData.school}</p>
          <p><strong>Title:</strong> {formData.title}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
