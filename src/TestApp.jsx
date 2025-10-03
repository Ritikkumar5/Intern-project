import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

//components for testing
const TestComponent1 = () => <div>Test Component 1 - Children Approach</div>;
const TestComponent2 = () => <div>Test Component 2 - Outlet Approach</div>;
const TestComponent3 = () => <div>Test Component 3 - Outlet Nested</div>;

function TestApp() {
  return (
    <Router>
      <Routes>
        {/* using children prop */}
        <Route
          path="/test-children/*"
          element={
            <Layout>
              <Routes>
                <Route path="page1" element={<TestComponent1 />} />
              </Routes>
            </Layout>
          }
        />

        {/*using Outlet */}
        <Route path="/test-outlet" element={<Layout />}>
          <Route index element={<TestComponent2 />} />
          <Route path="nested" element={<TestComponent3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default TestApp;
