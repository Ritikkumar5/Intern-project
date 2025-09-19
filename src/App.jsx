import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./Components/layout/Layout.jsx";
import RecruiterLayout from "./Components/layout/RecruiterLayout.jsx";

// Placement Officer Pages
import PostJob from "./pages/placementOfficer/PostJob.jsx";
import ApprovalQueue from "./pages/placementOfficer/ApprovalQueue.jsx";
import PublishedJobs from "./pages/placementOfficer/PublishedJobs.jsx";
import StudentTracking from "./pages/placementOfficer/StudentTracking.jsx";
import Landing from "./Components/Landing.jsx";

// Recruiter Pages
import RecruiterPostJob from "./pages/recruiter/RecruiterPostJob.jsx";
// import MyListings from "./pages/recruiter/MyListings.jsx";
// import ApplicationsReceived from "./pages/recruiter/ApplicationsReceived.jsx";
// import AiShortlist from "./pages/recruiter/AiShortlist.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Placement Officer (Career) Routes */}
        <Route
          path="/career/*"
          element={
            <Layout>
              <Routes>
                <Route path="landing" element={<Landing />} />
        
                <Route path="post-job" element={<PostJob />} />
                <Route path="approval" element={<ApprovalQueue />} />
                <Route path="published-jobs" element={<PublishedJobs />} />
                <Route path="student-tracking" element={<StudentTracking />} />
              </Routes>
            </Layout>
          }
        />

        {/* Recruiter Routes */}
        <Route
          path="/recruiter/*"
          element={
            <RecruiterLayout>
              <Routes>
                <Route path="post-job" element={<RecruiterPostJob />} />
                {/* <Route path="my-listings" element={<MyListings />} /> */}
                {/* <Route path="applications" element={<ApplicationsReceived />} /> */}
                {/* <Route path="ai-shortlist" element={<AiShortlist />} /> */}
              </Routes>
            </RecruiterLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;