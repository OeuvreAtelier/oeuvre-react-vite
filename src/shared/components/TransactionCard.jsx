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
    <div className="card-border-shadow px-5 pt-5 pb-3 mb-3">
      <p className="md-semibold-black">{title}</p>
      <div className="flex flex-row justify-between">
        <div>
          <p className="md-semibold-gray mb-1">{seller}</p>
          <p className="sm-lightgray mb-2">
            Quantity: {quantity} x Rp{initPrice}
          </p>
        </div>
        <div>
          <p className="md-semibold-gray text-right">Total Price</p>
          <p className="md-semibold-black text-right">
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
