import { Phone } from "lucide-react";

const emergencyContacts = [
  { name: "Emergency Services", number: "911" },
  { name: "Police", number: "555-0100" },
  { name: "Fire Department", number: "555-0200" },
  { name: "Hospital", number: "555-0300" },
];

export default function EmergencyContacts() {
  return (
    <div className="p-4 shadow-lg rounded-lg bg-white border border-gray-400">
      <div className="text-xl font-bold mb-4">Emergency Contacts</div>
      <div className="space-y-4">
        <ul className="space-y-2">
          {emergencyContacts.map((contact) => (
            <li key={contact.name} className="flex justify-between items-center">
              <span>{contact.name}</span>
              <button
                className="bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-200 rounded-md flex items-center px-3 py-1 text-sm"
                onClick={() => window.location.href = `tel:${contact.number}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                {contact.number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
