import React, { useState } from "react";
import MainContentHeader from "../../Components/layout/mainContentHeader";
import NavButtons from "../../Components/layout/NavButtons";

const PostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const statusData = [
    { label: "Pending Approvals", value: 6 },
    { label: "Published Jobs", value: 28 },
    { label: "Active Applicants", value: 312 },
    { label: "Placed", value: 47 }
  ];

  const [step1Data, setStep1Data] = useState({
    jobTitle: "",
    employmentType: "Full-time",
    mode: "On-site",
    whoCanApply: "Public",
    positions: "",
    organization: "",
    location: ""
  });

  const [step2Data, setStep2Data] = useState({
    facultyOfStudy: "",
    fieldOfStudy: "",
    educationalQualification: "",
    totalCompensation: "",
    industryExperience: "",
    lastDateToApply: "",
    requirementOption: "Assessment",
    assessmentOption: "",
    jobDescription: ""
  });

  const handleStep1Change = (field, value) => {
    setStep1Data(prev => ({ ...prev, [field]: value }));
  };

  const handleStep2Change = (field, value) => {
    setStep2Data(prev => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    const { jobTitle, positions, organization, location } = step1Data;
    if (!jobTitle || !positions || !organization || !location) {
      alert("Please fill all required fields");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { facultyOfStudy, fieldOfStudy, educationalQualification, totalCompensation, lastDateToApply } = step2Data;
    if (!facultyOfStudy || !fieldOfStudy || !educationalQualification || !totalCompensation || !lastDateToApply) {
      alert("Please fill all required fields");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) setCurrentStep(2);
  };

  const handleBack = () => setCurrentStep(1);

  const handleSaveDraft = () => {
    alert("Draft saved successfully!");
  };

  const handlePublish = () => {
    if (validateStep2()) alert("Job published successfully!");
  };

  return (
    <div>
      <MainContentHeader title="Manage campus hiring" statusItems={statusData} />
      <NavButtons />
      <div className="bg-white rounded-lg shadow p-4 md:p-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
          <h3 className="font-semibold text-lg">Post New Jobs</h3>
          <button className="px-4 py-2 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
            Select from Job Boards
          </button>
        </div>
        {/* Step 1 Form */}
        {currentStep === 1 && (
          <div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded font-semibold cursor-pointer">
                Bulk Upload (CSV/Excel)
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded font-semibold cursor-pointer">
                Download Template
              </button>
            </div>
            <div className="space-y-5">
              {/* Job Title */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Job Title *</label>
                <input
                  value={step1Data.jobTitle}
                  onChange={(e) => handleStep1Change('jobTitle', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  placeholder="e.g., Guest Faculty"
                />
              </div>
              {/* Grid inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Type of Employment</label>
                  <select 
                    value={step1Data.employmentType}
                    onChange={(e) => handleStep1Change('employmentType', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Mode</label>
                  <select 
                    value={step1Data.mode}
                    onChange={(e) => handleStep1Change('mode', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  >
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Who can apply?</label>
                  <select 
                    value={step1Data.whoCanApply}
                    onChange={(e) => handleStep1Change('whoCanApply', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  >
                    <option value="Public">Public</option>
                    <option value="Students Only">Students Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Number of Positions *</label>
                  <input
                    value={step1Data.positions}
                    onChange={(e) => handleStep1Change('positions', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    placeholder="e.g., 2"
                  />
                </div>
              </div>
              {/* Organization */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Organization Name *</label>
                <input
                  value={step1Data.organization}
                  onChange={(e) => handleStep1Change('organization', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  placeholder="e.g., University"
                />
              </div>
              {/* Location */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Location *</label>
                <input
                  value={step1Data.location}
                  onChange={(e) => handleStep1Change('location', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  placeholder="e.g., Delhi, India"
                />
              </div>
              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium cursor-pointer hover:bg-gray-200"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium cursor-pointer hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Step 2 Form */}
        {currentStep === 2 && (
          <div className="space-y-5">
            {/* Faculty of study */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Faculty of study *</label>
              <input
                type="text"
                value={step2Data.facultyOfStudy}
                onChange={(e) => handleStep2Change('facultyOfStudy', e.target.value)}
                placeholder="e.g., Management Studies"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* Grid inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Field of study *</label>
                <input
                  type="text"
                  value={step2Data.fieldOfStudy}
                  onChange={(e) => handleStep2Change('fieldOfStudy', e.target.value)}
                  placeholder="e.g., Management Studies"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Educational Qualification *</label>
                <input
                  type="text"
                  value={step2Data.educationalQualification}
                  onChange={(e) => handleStep2Change('educationalQualification', e.target.value)}
                  placeholder="e.g., Post Graduate"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Total Compensation *</label>
                <input
                  type="text"
                  value={step2Data.totalCompensation}
                  onChange={(e) => handleStep2Change('totalCompensation', e.target.value)}
                  placeholder="e.g., 15000"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Industry Experience</label>
                <input
                  type="text"
                  value={step2Data.industryExperience}
                  onChange={(e) => handleStep2Change('industryExperience', e.target.value)}
                  placeholder="e.g., 10 years"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last date to apply *</label>
              <input
                type="date"
                value={step2Data.lastDateToApply}
                onChange={(e) => handleStep2Change('lastDateToApply', e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* Requirement Option */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Select Requirement Option:</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input 
                    type="radio" 
                    name="requirement" 
                    value="Assessment"
                    checked={step2Data.requirementOption === 'Assessment'}
                    onChange={(e) => handleStep2Change('requirementOption', e.target.value)}
                    className="text-blue-500 focus:ring-blue-400" 
                  />
                  Assessment
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input 
                    type="radio" 
                    name="requirement" 
                    value="Custom Text"
                    checked={step2Data.requirementOption === 'Custom Text'}
                    onChange={(e) => handleStep2Change('requirementOption', e.target.value)}
                    className="text-blue-500 focus:ring-blue-400" 
                  />
                  Custom Text
                </label>
              </div>
            </div>
            {/* Select Assessment */}
            {step2Data.requirementOption === 'Assessment' && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">Select Assessment Option:</label>
                <select
                  value={step2Data.assessmentOption}
                  onChange={(e) => handleStep2Change('assessmentOption', e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select the assessment</option>
                  <option value="Technical Assessment">Technical Assessment</option>
                  <option value="Aptitude Test">Aptitude Test</option>
                  <option value="Interview">Interview</option>
                </select>
              </div>
            )}
            {/* Job Description */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Job Description</label>
              <textarea
                rows={3}
                value={step2Data.jobDescription}
                onChange={(e) => handleStep2Change('jobDescription', e.target.value)}
                placeholder="Provide detailed job description here"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-between mt-6 gap-2">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2 rounded-md bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition"
              >
                Back
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="px-6 py-2 rounded-md bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={handlePublish}
                  className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Publish to Students
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostJob;