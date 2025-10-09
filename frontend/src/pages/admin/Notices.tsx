import Sidebar from "../../Components/adminpanel/Sidebar";
import { useState } from "react";

export default function Notices() {
  const [notices, setNotices] = useState([
    { id: 1, title: "Exam Schedule", content: "Exams start next week." }
  ]);

  const handleDelete = (id: any) => {
    if (window.confirm("Do you want to delete this notice?")) {
      setNotices(notices.filter((n) => n.id !== id));
    }
  };

  const handleAdd = () => {
    const title = prompt("Notice Title:");
    const content = prompt("Notice Content:");
    if (title && content) {
      setNotices([...notices, { id: Date.now(), title, content }]);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 md:ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Notices</h1>
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add New Notice</button>
        </div>

        {notices.length === 0 && <p className="text-gray-700">No notices available.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold">{notice.title}</h2>
              <p className="text-gray-700">{notice.content}</p>
              <div className="mt-2 flex gap-2">
                <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(notice.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
