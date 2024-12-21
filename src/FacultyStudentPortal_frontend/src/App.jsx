import React, { useState } from "react";
import FacultyLogin from "./FacultyLogin";
import StudentLogin from "./StudentLogin";
import FacultyDashboard from "./FacultyDashboard";
import StudentDashboard from "./StudentDashboard";
import "./index.scss";

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <div className="App">
      <h1>Student Faculty Portal</h1>
      {!userType ? (
        <div>
          <button onClick={() => setUserType("faculty")}>Login as Faculty</button>
          <button onClick={() => setUserType("student")}>Login as Student</button>
        </div>
      ) : userType === "faculty" ? (
        <FacultyLogin setUserType={setUserType} />
      ) : (
        <StudentLogin setUserType={setUserType} />
      )}
    </div>
  );
}

export default App;