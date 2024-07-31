import React from "react"

export default function ScrollableModal({ isOpen, onClose, productName, body }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg relative max-h-[90vh] w-5/12 overflow-auto">
        <div
          className="absolute top-5 right-4 text-gray-300 hover:text-gray-500 cursor-pointer bg-slate-200 px-3 py-1 rounded-3xl text-white"
          onClick={onClose}
        >
          X
        </div>
        <h1 className="md-semibold-black mb-1">Product Reviews</h1>
        <p className="sm-lightgray mb-6">{productName}</p>
        {body}
      </div>
    </div>
  )
}
