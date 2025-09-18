import { useState } from "react";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";

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

    console.log("Application Submitted:", formData);
    alert("Application submitted successfully!");

    // Reset form
    setFormData({
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
  };

  return (
    <>
      <Navbar/>
      {/* Banner image */}
      <img
        className="mx-auto my-6 w-full max-w-md rounded-2xl shadow-lg"
        src="./apply_form.png"
        alt="Apply Form Banner"
      />
      <div className="min-h-screen flex flex-col items-center px-4 py-10">
      <div className="max-w-2xl w-full bg-white rounded-xl">
        {/* Title */}
        <h1 className="text-2xl text-center mb-4">
          Apply to Join OSS GCET
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Join our vibrant community of developers and innovators. We're looking
          for passionate students who want to contribute to open source projects
          and grow their technical skills together.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Roll Number */}
          <div>
            <label
              htmlFor="rollNumber"
              className="block text-sm font-medium mb-1"
            >
              Roll Number
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              placeholder="Enter your Roll Number"
              value={formData.rollNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Year */}
          <div>
            <label htmlFor="year" className="block text-sm font-medium mb-1">
              Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Enter your Year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Branch Section */}
          <div>
            <label
              htmlFor="branchSection"
              className="block text-sm font-medium mb-1"
            >
              Branch/Section
            </label>
            <input
              type="text"
              id="branchSection"
              name="branchSection"
              placeholder="Enter your Branch/Section"
              value={formData.branchSection}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-sm font-medium mb-1">
              List Your Skills (Separate by commas)
            </label>
            <textarea
              id="skills"
              name="skills"
              placeholder="e.g., Java, Python, Web Development"
              value={formData.skills}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Why Join */}
          <div>
            <label htmlFor="whyJoin" className="block text-sm font-medium mb-1">
              Why do you want to join OSS GCET?
            </label>
            <textarea
              id="whyJoin"
              name="whyJoin"
              placeholder="Your reason..."
              value={formData.whyJoin}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Contribution */}
          <div>
            <label
              htmlFor="contribution"
              className="block text-sm font-medium mb-1"
            >
              Have you contributed in Open Source before? (Yes/No + Details)
            </label>
            <textarea
              id="contribution"
              name="contribution"
              placeholder="Yes(Details) / No(but interested)"
              value={formData.contribution}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Preferred Role in Club
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Enter your preferred role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Additional */}
          <div>
            <label
              htmlFor="additional"
              className="block text-sm font-medium mb-1"
            >
              Additional Information (Optional)
            </label>
            <textarea
              id="additional"
              name="additional"
              placeholder="Anything else you'd like to share"
              value={formData.additional}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-blue-950 text-white py-2 px-5 rounded-3xl hover:bg-blue-900 transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ApplyForm;
