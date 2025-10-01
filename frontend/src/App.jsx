import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career_Landing from "./components/careers/Career-Landing";
import CareerBrowse from "./components/careers/CareerBrowse";
import CareerResources from "./components/careers/Resources";
import Layout from "./components/Layout.jsx/Layout";
import StudentDashboard from "./components/careers/Student-Dashboard";
import MyApplication from "./components/careers/MyApplication";
import SavedJobs from "./components/careers/SavedJobs";
import Received_Applications from "./components/careers/Received_Applications";
import JobListings from "./components/careers/JobListings";
import Recruiter_ListingsandApplications from "./components/careers/Recruiter_ListingsandApplications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="explore" element={<Career_Landing />} />
            <Route path="browse" element={<CareerBrowse />}>
              <Route index element={<StudentDashboard />} />
              <Route path="browsejobs" element={<StudentDashboard />} />
              <Route path="applications" element={<MyApplication />} />
              <Route path="savedjobs" element={<SavedJobs />} />
            </Route>

            <Route
              path="/placement"
              element={<Recruiter_ListingsandApplications />}
            >
              <Route index element={<JobListings />} />
              <Route path="job-listings" element={<JobListings />} />
              <Route path="applications" element={<Received_Applications />} />
            </Route>

            <Route path="resources" element={<CareerResources />} />
            {/* <Route
              path="placementapplication"
              element={<Recruiter_ListingsandApplications />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
