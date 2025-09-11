import "./apply_form.css";

function App() {
  return (
    <div className="applyform">
      <h1>Apply to Join OSS GCET</h1>

      <p>Join our vibrant community of developers and innovators. We're looking for passionate students who want to contribute to open source projects and grow their technical skills together.</p>
    <form >
        <label htmlFor="FullName">Full Name</label>
        <input type="text" id="FullName" name="FullName" placeholder="Enter your Name" required />
        <label htmlFor="RollNumber">Roll Number</label>
        <input type="text" id="RollNumber" name="RollNumber" placeholder="Enter your RollNumber" required />
        <label htmlFor="PhoneNumber">Phone Number</label>
        <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Enter your Phone Number" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your Email" required />
        <label htmlFor="Year">Year</label>
        <input type="text" id="Year" name="Year" placeholder="Enter your Year" required />
        <label htmlFor="Branch/Section">Branch/Section</label>
        <input type="text" id="Branch/Section" name="Branch/Section" placeholder="Enter your Branch" required />
        <label htmlFor="Skills">List Your Skills (Separate by commas)</label>
        <textarea id="Skills" name="Skills" placeholder="e.g., Java, Python, Web Development" required></textarea>
        <label htmlFor="WhyJoin">Why do you want to join OSS GCET?</label>
        <textarea id="WhyJoin" name="WhyJoin" placeholder="Your reason..." required></textarea>
        <label htmlFor="Contribution">Have you contributed in Open Source before? (Yes/No + Details)</label>
        <textarea id="Contribution" name="Contribution" placeholder="Yes(Details) / No(but interested)" required></textarea>
        <label htmlFor="Role">Preferred Role in Club</label>
        <input type="text" id="Role" name="Role" placeholder="Enter your preferred role" required />
        <label htmlFor="Additional">Additional Information (Optional)</label>
        <textarea id="Additional" name="Additional" placeholder="Anything else you'd like to share"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;