// Components/Studentarea/Notice.tsx
import React from "react";

const notices = [
  { date: "2025-10-01", title: "Exam Schedule Released", description: "The schedule for the monthly exams is now available. Check the timetable carefully." },
  { date: "2025-10-03", title: "New Teacher Joined", description: "Welcome Ms. Verma who will be taking English classes from next week." },
  { date: "2025-10-04", title: "Holiday Notice", description: "School will remain closed on 2025-10-05 due to regional holiday." },
  // add more notices
];

export default function Notice() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Notices</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <p className="text-gray-500 text-sm mb-1">{new Date(notice.date).toLocaleDateString()}</p>
            <h2 className="font-semibold text-lg mb-2">{notice.title}</h2>
            <p className="text-gray-700">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
