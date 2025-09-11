import "./bug_report.css";


function App() {
  return (
    <div className="applyform">
      <h1>Report a Bug</h1>

      <p>Found an issue in our website or projects? Help us improve by reporting it here. Your feedback ensures OSS GCET stays reliable, user-friendly, and transparent. Every report matters in building a better open-source community.</p>
    <form >
        <label htmlFor="FullName">Full Name</label>
        <input type="text" id="FullName" name="FullName" placeholder="Enter your Name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your Email" required />
        <label htmlFor="BugTitle">Bug Title</label>
        <input type="text" id="BugTitle" name="BugTitle" placeholder="Enter the Bug Title" required />
        <label htmlFor="BugType">Type of Bug (UI/Functionality/Behaviour/Security etc)</label>
        <textarea id="BugType" name="BugType" ></textarea>
        <label htmlFor="Content">What content your reporting?(Description)</label>
        <textarea id="Content" name="Content"></textarea>
         <label htmlFor="URL">URL (if any)</label>
        <input type="text" id="URL" name="URL" />
        <label htmlFor="YReport">Tell us why you are reporting the bug?</label>
        <textarea id="YReport" name="YReport" ></textarea>
        <label htmlFor="Screenshot">Screenshots of a Bug(PDF_FORMAT)</label>
        <input type="file" placeholder="Choose File"></input> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;