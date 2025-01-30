import { AlertTriangle } from "lucide-react";

export default function SOS() {
  const handleSOS = () => {
    alert("SOS signal sent! Emergency services have been notified.");
  };

  return (
    <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-300">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">SOS</h2>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSOS}
          className="w-full bg-red-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-700 flex items-center justify-center transition duration-300"
        >
          <AlertTriangle className="mr-2 h-5 w-5" />
          Send SOS Signal
        </button>
      </div>
    </div>
  );
}
