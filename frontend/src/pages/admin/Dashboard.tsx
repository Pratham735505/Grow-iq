import Sidebar from "../../Components/adminpanel/Sidebar";
import { useState } from "react";

const initialStudents = [
  {
    id: "STU001",
    name: "John Doe",
    class: "10th Grade",
    subjects: ["Math", "Physics", "English"]
  },
  {
    id: "STU002",
    name: "Jane Smith",
    class: "9th Grade",
    subjects: ["Biology", "Chemistry", "English"]
  }
];

export default function Dashboard() {
  const [students, setStudents] = useState(initialStudents);

  const handleDelete = (id : any) => {
    if (window.confirm("Do you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 md:ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Dashboard</h1>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
              <p><strong>Class:</strong> {student.class}</p>
              <p><strong>ID:</strong> {student.id}</p>
              <p><strong>Subjects:</strong> {student.subjects.join(", ")}</p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">Verify</button>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(student.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
