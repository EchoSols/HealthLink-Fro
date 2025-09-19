import React from "react"

const Card = ({ title, total }: { title: string; total: number }) => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="p-6 border-l-4 border-[#118CDB] rounded-xl">
        <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-2">{title}</h2>
        <p className="text-[#404040] text-2xl font-bold">{total}</p>
      </div>
    </div>
  )
}

export default Card
