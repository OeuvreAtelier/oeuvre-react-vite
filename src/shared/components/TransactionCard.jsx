import React from "react"
import TextButton from "./TextButton"

export default function TransactionCard({
  title,
  seller,
  quantity,
  initPrice,
  onClick,
  isHidden
}) {
  return (
    <div className="shadow-md p-4 rounded-lg mb-3 bg-white">
      <p className="text-md text-gray-900 font-semibold">{title}</p>
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-md text-gray-600 mb-1 font-semibold">{seller}</p>
          <p className="text-sm text-gray-600 mb-1">
            Quantity: {quantity} x Rp{initPrice}
          </p>
        </div>
        <div>
          <p className="text-md text-gray-600 text-right">Total Price</p>
          <p className="text-lg text-gray-900 mb-1 font-semibold text-right">
            Rp{quantity * initPrice}
          </p>
        </div>
      </div>
      <div className={`mt-1 ${isHidden === true ? "hidden" : ""}`}>
        <TextButton
          btnName="Rate Product"
          onClick={onClick}
          btnColor="bg-indigo-500"
          textColor="text-white"
          hoverColor="bg-indigo-700"
        />
      </div>
    </div>
  )
}
