import PatientCard from "./PatientCard";

export default function PatientQueueList() {
  const patients = [
    {
      id: "apt23056",
      name: "James Bond",
      description: "Chest pain",
      serviceDate: "2025-08-24",
      image: "/man.png",
      urgent: true,
    },
    {
      id: "apt39244",
      name: "Tyres Gibson",
      description: "Chest pain",
      serviceDate: "2025-08-24",
      image: "/man.png",
      urgent: true,
    },
    {
      id: "apt23056",
      name: "Jonathan Kuminga",
      description: "Chest pain",
      serviceDate: "2025-08-24",
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
