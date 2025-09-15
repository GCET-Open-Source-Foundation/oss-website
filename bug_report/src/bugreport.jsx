import { useState } from "react";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";

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

  const [previewImages, setPreviewImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "screenshots") {
      const newFiles = Array.from(files);

      // Validate file types
      const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
      for (let file of newFiles) {
        if (!allowedTypes.includes(file.type)) {
          alert("Only PNG, JPG, or JPEG files are allowed.");
          return;
        }
      }

      // Merge with existing files
      const mergedFiles = [...formData.screenshots, ...newFiles];

      if (mergedFiles.length > 10) {
        alert("You can upload a maximum of 10 images.");
        return;
      }

      setFormData((prev) => ({ ...prev, screenshots: mergedFiles }));

      // Merge previews
      const mergedURLs = [
        ...previewImages,
        ...newFiles.map((file) => URL.createObjectURL(file)),
      ];
      setPreviewImages(mergedURLs);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemoveImage = (idx) => {
    setPreviewImages(previewImages.filter((_, i) => i !== idx));
    setFormData((prev) => ({
      ...prev,
      screenshots: prev.screenshots.filter((_, i) => i !== idx),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["fullName", "email", "bugTitle", "description"];
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    console.log("Bug Report Submitted:", formData);
    alert("Bug report submitted successfully!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <img
        className="mx-auto my-6 w-full max-w-md rounded-2xl shadow-lg"
        src="./bug_report.png"
        alt="Bug report"
      />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-center text-2xl mb-4">Report a Bug</h1>
        <p className="text-gray-600 text-center mb-8">
          Found an issue in our website or projects? Help us improve by
          reporting it here. Your feedback ensures OSS GCET stays reliable,
          user-friendly, and transparent.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 space-y-4 shadow"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Bug Title */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="bugTitle">
              Bug Title
            </label>
            <input
              type="text"
              id="bugTitle"
              name="bugTitle"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the Bug Title"
              required
              value={formData.bugTitle}
              onChange={handleChange}
            />
          </div>

          {/* Bug Type */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="bugType">
              Type of Bug
            </label>
            <textarea
              id="bugType"
              name="bugType"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="UI / Functionality / Behaviour / Security"
              value={formData.bugType}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the issue in detail"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* URL */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="url">
              URL (if any)
            </label>
            <input
              type="url"
              id="url"
              name="url"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the page URL"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="reason">
              Why are you reporting this bug?
            </label>
            <textarea
              id="reason"
              name="reason"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Why is this important?"
              value={formData.reason}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Screenshots Upload */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="screenshots"
            >
              Screenshots (PNG/JPG only, max 10)
            </label>

            {/* Dropzone-style upload */}
            <div
              className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 transition"
              onClick={() => document.getElementById("screenshots").click()}
            >
              <p className="text-gray-500">
                Click or drag images here (up to 10 total)
              </p>
              <p className="text-xs text-gray-400 mt-1">(PNG, JPG, JPEG)</p>
            </div>

            <input
              type="file"
              id="screenshots"
              name="screenshots"
              accept=".png,.jpg,.jpeg"
              multiple
              className="hidden"
              onChange={handleChange}
            />

            {/* Counter */}
            {previewImages.length > 0 && (
              <p className="text-sm text-gray-500 mt-3">
                {previewImages.length} / 10 uploaded
              </p>
            )}

            {/* Previews Grid */}
            {previewImages.length > 0 && (
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-3">
                {previewImages.map((src, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={src}
                      alt={`preview-${idx}`}
                      className="w-full h-28 object-cover rounded-lg border shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-950 text-white py-2 px-5 rounded-3xl hover:bg-blue-900 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default BugReport;
