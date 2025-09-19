import React from 'react'

const mainContentHeader = ({ title, statusItems }) => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow p-4 md:p-6 flex flex-col gap-2">
      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-semibold mr-2 w-max">
        Placement Officer - Admin Dashboard
      </span>
      <h2 className="text-lg md:text-xl font-bold mt-2 mb-2">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {statusItems.map((item, index) => (
          <span key={index} className="bg-gray-100 px-3 py-2 rounded text-xs md:text-sm font-semibold">
            {item.label} <span className="font-bold">{item.value}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default mainContentHeader