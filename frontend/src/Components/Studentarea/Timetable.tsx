// Components/Studentarea/Timetable.tsx


const timetableData = [
  { day: "Monday", subject: "Mathematics", teacher: "Engineer A.K. Nagvanshi", time: "9:00 AM - 10:00 AM" },
  { day: "Monday", subject: "Physics", teacher: "Engineer Arjun", time: "10:15 AM - 11:15 AM" },
  { day: "Tuesday", subject: "Chemistry", teacher: "Dr. Sharma", time: "9:00 AM - 10:00 AM" },
  { day: "Tuesday", subject: "English", teacher: "Ms. Verma", time: "10:15 AM - 11:15 AM" },
  { day: "Wednesday", subject: "Biology", teacher: "Dr. Singh", time: "9:00 AM - 10:00 AM" },
  { day: "Wednesday", subject: "Mathematics", teacher: "Engineer A.K. Nagvanshi", time: "10:15 AM - 11:15 AM" },
  // add more as needed
];

export default function Timetable() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Timetable</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Teacher</th>
              <th className="py-3 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{item.day}</td>
                <td className="py-3 px-4">{item.subject}</td>
                <td className="py-3 px-4">{item.teacher}</td>
                <td className="py-3 px-4">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
