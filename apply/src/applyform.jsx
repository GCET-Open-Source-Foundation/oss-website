import "./apply_form.css";
import { useState } from "react";

function ApplyForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    phoneNumber: "",
    email: "",
    year: "",
    branchSection: "",
    skills: "",
    whyJoin: "",
    contribution: "",
    role: "",
    additional: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "rollNumber",
      "phoneNumber",
      "email",
      "year",
      "branchSection",
      "skills",
      "whyJoin",
      "contribution",
      "role",
    ];

    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    console.log(formData);
    alert("Application submitted successfully!");
    // Send formData to backend here
  };

  return (
    <div className="applyform">
      <h1>Apply to Join OSS GCET</h1>
      <p>
        Join our vibrant community of developers and innovators. We're looking for passionate students who want to contribute to open source projects and grow their technical skills together.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="rollNumber">Roll Number</label>
        <input
          type="text"
          id="rollNumber"
          name="rollNumber"
          placeholder="Enter your Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Enter your Year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <label htmlFor="branchSection">Branch/Section</label>
        <input
          type="text"
          id="branchSection"
          name="branchSection"
          placeholder="Enter your Branch/Section"
          value={formData.branchSection}
          onChange={handleChange}
          required
        />

        <label htmlFor="skills">List Your Skills (Separate by commas)</label>
        <textarea
          id="skills"
          name="skills"
          placeholder="e.g., Java, Python, Web Development"
          value={formData.skills}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="whyJoin">Why do you want to join OSS GCET?</label>
        <textarea
          id="whyJoin"
          name="whyJoin"
          placeholder="Your reason..."
          value={formData.whyJoin}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="contribution">Have you contributed in Open Source before? (Yes/No + Details)</label>
        <textarea
          id="contribution"
          name="contribution"
          placeholder="Yes(Details) / No(but interested)"
          value={formData.contribution}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="role">Preferred Role in Club</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Enter your preferred role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <label htmlFor="additional">Additional Information (Optional)</label>
        <textarea
          id="additional"
          name="additional"
          placeholder="Anything else you'd like to share"
          value={formData.additional}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplyForm;
