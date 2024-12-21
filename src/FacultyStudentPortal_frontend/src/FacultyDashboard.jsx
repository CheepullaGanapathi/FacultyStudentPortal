import React, { useState } from "react";

function FacultyDashboard({ principal }) {
  const [marks, setMarks] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [markValue , setMarkValue] = useState([]);
  const [Principal, setPrincipal]=useState("");

  const handleAddMarks = () => {
    if (!studentId || !markValue || isNaN(markValue) || markValue === "null") {
      alert("Please provide valid student ID and marks.");
      return;
    }

    const newMarks = {
      studentId: studentId,
      marks: parseInt(markValue),
    };
    

    setMarks([...marks, newMarks]);
    // Call Motoko backend function here to save marks
  };

  async function SubmitMarks(){
    
    var StdMarks = {
      prin: Principal,
      StdId: studentId,
      Marks: marks,
  };

  console.log(StdMarks)

  var answer = await student-faculty-portal-backend.SetStdMarks(StdMarks);
        console.log("answer",answer);
    }
  

  const handleEditMarks = (id) => {
    const newMarks = prompt("Edit Marks:");
    if (newMarks === "null" || newMarks === "") {
      alert("Marks cannot be null or empty!");
      return;
    }

    const updatedMarks = marks.map((mark) =>
      mark.studentId === id
        ? { ...mark, marks: parseInt(newMarks) }
        : mark
    );
    setMarks(updatedMarks);
    // Call Motoko backend function here to update marks
  };

  return (
    <div>
      <h2>Faculty Dashboard</h2>
      <p>Welcome, {principal}</p>

      <input
        type="text"
        placeholder="Principal"
        value={Principal}
        onChange={(e) => setPrincipal(e.target.value)}
        />
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Marks"
        value={markValue}
        onChange={(e) => setMarkValue(e.target.value)}
      />
      <button onClick={handleAddMarks}>Add Marks</button>

      <h3>Student Marks</h3>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index}>
              <td>{mark.studentId}</td>
              <td>{mark.marks}</td>
              <td>
                <button onClick={() => handleEditMarks(mark.studentId)}>Edit</button>
                <button onClick={() => SubmitMarks(mark.studentId)}>Submit</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyDashboard;