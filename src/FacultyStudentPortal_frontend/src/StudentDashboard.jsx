import React, { useState, useEffect } from "react";

function StudentDashboard({ principal }) {
  const [marks, setMarks] = useState(null);

  useEffect(() => {
    // Fetch marks from the backend (Motoko canister)
    const fetchMarks = async () => {
      // Call the Motoko backend to get the marks
    //   const response = await fetch(/api/getMarks?studentId=${principal});
    //   const data = await response.json();
    //   setMarks(data);
    };
    fetchMarks();
  }, [principal]);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <p>Welcome, {principal}</p>
      {marks ? (
        <table>
          <thead>
            <tr>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{marks}</td> */}
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No marks available.</p>
      )}
    </div>
  );
}

export default StudentDashboard;