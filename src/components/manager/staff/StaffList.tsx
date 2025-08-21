"use client";

import StaffCard from "./StaffCard";

const staff = [
  {
    name: "Micheal Porter",
    id: "#apt12345",
    role: "Doctor",
    joined: "2024-07-05",
    email: "King@gmail.com",
    department: "Cardiology",
    endDate: "2024-07-05",
    imageUrl: "/man.png",
  },
  {
    name: "Sarah Sanyukaa",
    id: "#apt12345",
    role: "Doctor",
    joined: "2024-07-05",
    email: "King@gmail.com",
    department: "Cardiology",
    endDate: "2024-07-05",
    imageUrl: "/man.png",
  },
];

export default function StaffList() {
  return (
    <div className="space-y-4 mt-4">
      {staff.map((member, i) => (
        <StaffCard key={i} {...member} />
      ))}
    </div>
  );
}
