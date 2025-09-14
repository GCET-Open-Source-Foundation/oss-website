import "./bug_report.css";
import { useState } from "react";

function BugReport() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bugTitle: "",
    bugType: "",
    description: "",
    url: "",
    reason: "",
    screenshots: [],
  });

  // Preview images for UI
  const [previewImages, setPreviewImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "screenshots") {
      if (files.length > 10) {
        alert("You can upload a maximum of 10 images.");
        return;
      }

      const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
      for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
          alert("Only PNG, JPG, or JPEG files are allowed.");
          return;
        }
      }

      const filesArray = Array.from(files);
      setFormData((prev) => ({ ...prev, screenshots: filesArray }));

      // For preview
      const fileURLs = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewImages(fileURLs);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ["fullName", "email", "bugTitle", "description"];
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    // Example: Log form data
    console.log(formData);
    alert("Bug report submitted successfully!");
    // Here you can send formData to your backend
  };

  return (
    <div className="applyform">
      <h1>Report a Bug</h1>
      <p>
        Found an issue in our website or projects? Help us improve by reporting it here. Your feedback ensures OSS GCET stays reliable, user-friendly, and transparent. Every report matters in building a better open-source community.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your Name"
          required
          value={formData.fullName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="bugTitle">Bug Title</label>
        <input
          type="text"
          id="bugTitle"
          name="bugTitle"
          placeholder="Enter the Bug Title"
          required
          value={formData.bugTitle}
          onChange={handleChange}
        />

        <label htmlFor="bugType">Type of Bug (UI/Functionality/Behaviour/Security etc)</label>
        <textarea
          id="bugType"
          name="bugType"
          placeholder="Describe the type of bug"
          value={formData.bugType}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="description">What content are you reporting? (Description)</label>
        <textarea
          id="description"
          name="description"
          placeholder="Describe the issue in detail"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="url">URL (if any)</label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="Enter the page URL"
          value={formData.url}
          onChange={handleChange}
        />

        <label htmlFor="reason">Tell us why you are reporting the bug?</label>
        <textarea
          id="reason"
          name="reason"
          placeholder="Why is this important?"
          value={formData.reason}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="screenshots">Screenshots of Bug (PNG/JPG only, max 10)</label>
        <input
          type="file"
          id="screenshots"
          name="screenshots"
          accept=".png,.jpg,.jpeg"
          multiple
          onChange={handleChange}
        />

        {/* Preview selected images */}
        {previewImages.length > 0 && (
          <div className="image-preview">
            {previewImages.map((src, idx) => (
              <img key={idx} src={src} alt={`preview-${idx}`} />
            ))}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BugReport;
