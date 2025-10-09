export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="text-red-800 text-center">You are not authorized to view this page.</p>
    </div>
  );
}
