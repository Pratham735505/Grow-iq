import Sidebar from "../../Components/adminpanel/Sidebar";

export default function LoginHistory() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 md:ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">Login History</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">No login history available.</p>
        </div>
      </div>
    </div>
  );
}
