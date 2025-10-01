import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import RecruiterLayout from "./components/layout/RecruiterLayout.jsx";

import PostJob from "./components/careers/PostJob.jsx";
import ApprovalQueue from "./components/careers/ApprovalQueue.jsx";
import PublishedJobs from "./components/careers/PublishedJobs.jsx";
import StudentTracking from "./components/careers/StudentTracking.jsx";


import RecruiterPostJob from "./components/careers/RecruiterPostJob.jsx";

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
               
              </Routes>
            </RecruiterLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;