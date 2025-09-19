import React, { useState } from "react";

const RecruiterPostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [step1Data, setStep1Data] = useState({
    jobTitle: "",
    employmentType: "Full-time",
    mode: "On-site",
    whoCanApply: "public",
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

  const handleNext = () => {
    if (validateStep1()) setCurrentStep(2);
  };

  const handleSaveDraft = () => {
    alert("Draft saved successfully!");
  };

  const handlePublish = () => {
    alert("Job published successfully!");
  };

  return (
    <div className="p-4 md:p-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-white rounded-lg shadow p-4 md:p-6">
        <div>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">
            Recruiter / Vendor Dashboard
          </span>
          <h1 className="text-2xl font-bold mt-2 text-gray-900">Post a Job</h1>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium cursor-pointer hover:bg-blue-700 mt-2 md:mt-0">
          New Job
        </button>
      </div>
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-lg shadow p-2 md:p-4">
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm cursor-pointer">
          Post a Job
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm cursor-pointer">
          My Job Listings
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm cursor-pointer">
          Applications Received
        </button>
      </div>
      {/* Form Container */}
      <div className="bg-white rounded-lg shadow p-4 md:p-8 w-full mx-auto">
        <h2 className="text-xl font-semibold mb-8 text-gray-900">Post a Job</h2>
        {/* Step 1 Form */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                value={step1Data.jobTitle}
                onChange={(e) => handleStep1Change('jobTitle', e.target.value)}
                placeholder="e.g., Guest Faculty"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type of Employment</label>
                <select
                  value={step1Data.employmentType}
                  onChange={(e) => handleStep1Change('employmentType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mode</label>
                <select
                  value={step1Data.mode}
                  onChange={(e) => handleStep1Change('mode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900"
                >
                  <option value="On-site">e.g., On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Who can apply ?</label>
                <select
                  value={step1Data.whoCanApply}
                  onChange={(e) => handleStep1Change('whoCanApply', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900"
                >
                  <option value="public">e.g., public</option>
                  <option value="students">Students only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Positions</label>
                <input
                  type="text"
                  value={step1Data.positions}
                  onChange={(e) => handleStep1Change('positions', e.target.value)}
                  placeholder="e.g., 2"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
            {/* Organization Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
              <input
                type="text"
                value={step1Data.organization}
                onChange={(e) => handleStep1Change('organization', e.target.value)}
                placeholder="e.g., University"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={step1Data.location}
                onChange={(e) => handleStep1Change('location', e.target.value)}
                placeholder="e.g., Delhi, India"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-4 pt-6">
              <button
                onClick={handleSaveDraft}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium cursor-pointer hover:bg-gray-200"
              >
                Save Draft
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium cursor-pointer hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* Step 2 Form */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Faculty of study */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Faculty of study</label>
              <input
                type="text"
                value={step2Data.facultyOfStudy}
                onChange={(e) => handleStep2Change('facultyOfStudy', e.target.value)}
                placeholder="e.g., Management Studies"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Field of study</label>
                <input
                  type="text"
                  value={step2Data.fieldOfStudy}
                  onChange={(e) => handleStep2Change('fieldOfStudy', e.target.value)}
                  placeholder="e.g., Management Studies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Educational Qualification</label>
                <input
                  type="text"
                  value={step2Data.educationalQualification}
                  onChange={(e) => handleStep2Change('educationalQualification', e.target.value)}
                  placeholder="e.g., Post Graduate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Compensation</label>
                <input
                  type="text"
                  value={step2Data.totalCompensation}
                  onChange={(e) => handleStep2Change('totalCompensation', e.target.value)}
                  placeholder="e.g., 15000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry Experience</label>
                <input
                  type="text"
                  value={step2Data.industryExperience}
                  onChange={(e) => handleStep2Change('industryExperience', e.target.value)}
                  placeholder="e.g., 10 years"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Last date to apply */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last date to apply</label>
              <input
                type="text"
                value={step2Data.lastDateToApply}
                onChange={(e) => handleStep2Change('lastDateToApply', e.target.value)}
                placeholder="e.g., dd-mm-yy"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Select Requirement Option */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Requirement Option:</label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="requirement"
                    value="Assessment"
                    checked={step2Data.requirementOption === 'Assessment'}
                    onChange={(e) => handleStep2Change('requirementOption', e.target.value)}
                    className="mr-2"
                  />
                  Assessment
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="requirement"
                    value="Custom Text"
                    checked={step2Data.requirementOption === 'Custom Text'}
                    onChange={(e) => handleStep2Change('requirementOption', e.target.value)}
                    className="mr-2"
                  />
                  Custom Text
                </label>
              </div>
            </div>
            {/* Select Assessment Option */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Assessment Option</label>
              <select
                value={step2Data.assessmentOption}
                onChange={(e) => handleStep2Change('assessmentOption', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">select the assessment</option>
                <option value="technical">Technical Assessment</option>
                <option value="aptitude">Aptitude Test</option>
              </select>
            </div>
            {/* Job Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
              <textarea
                rows={4}
                value={step2Data.jobDescription}
                onChange={(e) => handleStep2Change('jobDescription', e.target.value)}
                placeholder="Provide detailed job description here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-4 pt-6">
              <button
                onClick={handleSaveDraft}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
              >
                Save Draft
              </button>
              <button
                onClick={handlePublish}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Publish to Job
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterPostJob;