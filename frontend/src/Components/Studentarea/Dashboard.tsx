// Components/Studentarea/Dashboard.tsx


const studentData = {
  name: "John Doe",
  class: "10th Grade",
  studentId: "STU12345",
  subjects: ["Mathematics", "Physics", "Chemistry", "English", "Biology"]
};

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Dashboard</h1>

      {/* Student Info */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Student Details</h2>
        <p><span className="font-semibold">Name:</span> {studentData.name}</p>
        <p><span className="font-semibold">Class:</span> {studentData.class}</p>
        <p><span className="font-semibold">Student ID:</span> {studentData.studentId}</p>
      </div>

      {/* Subjects */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Subjects Enrolled</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {studentData.subjects.map((subject, idx) => (
            <div
              key={idx}
              className="bg-blue-50 text-blue-700 font-medium rounded-lg p-4 text-center shadow-sm"
            >
              {subject}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links or Notifications */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="/profile/timetable"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            View Timetable
          </a>
          <a
            href="/profile/notices"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Notices
          </a>
        </div>
      </div>
    </div>
  );
}
