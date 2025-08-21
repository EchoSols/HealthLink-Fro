"use client";

import QueueCard from "./QueueCard";

const queues = [
  {
    name: "Sarah Sanyukaa",
    id: "#apt12345",
    description: "Chest pain",
    serviceDate: "2024-01-15",
    imageUrl: "/man.png",
  },
  {
    name: "Sarah Sanyukaa",
    id: "#apt12345",
    description: "Chest pain",
    serviceDate: "2024-01-15",
    imageUrl: "/man.png",
  },
  {
    name: "Sarah Sanyukaa",
    id: "#apt12345",
    description: "Chest pain",
    serviceDate: "2024-01-15",
    imageUrl: "/man.png",
  },
];

export default function QueueList() {
  return (
    <div className="space-y-4 mt-4">
      {queues.map((q, i) => (
        <QueueCard key={i} {...q} />
      ))}
    </div>
  );
}
