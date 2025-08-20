import PatientCard from "./PatientCard";

export default function PatientQueueList() {
  const patients = [
    {
      id: "#apt12345",
      name: "Sarah Sanyukaa",
      description: "Chest pain",
      serviceDate: "2024-01-15",
      image: "/man.png",
      urgent: true,
    },
    {
      id: "#apt12345",
      name: "Sarah Sanyukaa",
      description: "Chest pain",
      serviceDate: "2024-01-15",
      image: "/man.png",
      urgent: true,
    },
    {
      id: "#apt12345",
      name: "Sarah Sanyukaa",
      description: "Chest pain",
      serviceDate: "2024-01-15",
      image: "/man.png",
      urgent: true,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Today</h3>
      {patients.map((patient, idx) => (
        <PatientCard key={idx} patient={patient} />
      ))}
    </div>
  );
}
