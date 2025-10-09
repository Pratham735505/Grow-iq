import Sidebar from "../../Components/adminpanel/Sidebar";
import { useState } from "react";

// Define type for a single timetable entry
interface TimetableEntry {
  id: number;
  day: string;
  schedule: string[];
}

export default function Timetable() {
  const [timetables, setTimetables] = useState<TimetableEntry[]>([]);

  const handleAdd = () => {
    const day = prompt("Enter Day:");
    const schedule = prompt("Enter schedule (comma separated):");

    if (day && schedule) {
      const newEntry: TimetableEntry = {
        id: Date.now(),
        day,
        schedule: schedule.split(",").map((s) => s.trim()), // trim spaces
      };
      setTimetables([...timetables, newEntry]);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Do you want to delete this timetable?")) {
      setTimetables(timetables.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 md:ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Time Table</h1>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Timetable
          </button>
        </div>

        {timetables.length === 0 && <p className="text-gray-700">No timetable created.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timetables.map((t) => (
            <div key={t.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold">{t.day}</h2>
              <ul className="list-disc ml-5 text-gray-700">
                {t.schedule.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(t.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
