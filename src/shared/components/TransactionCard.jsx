import React from "react"
import TextButton from "./TextButton"

export default function TransactionCard({
  invoiceNumber,
  productName,
  seller,
  quantity,
  initPrice,
  isHidden,
  onClick,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div className="card-border-shadow px-5 pt-5 pb-3 mb-3">
      <p className="sm-semibold-black mb-1">Invoice {invoiceNumber}</p>
      <p className="md-semibold-black mb-1">{productName}</p>
      <div className="flex flex-row justify-between mb-2">
        <div>
          <p className="sm-black mb-1">{seller}</p>
          <p className="sm-lightgray mb-2">
            Quantity: {quantity} x Rp{numberWithDots(initPrice)}
          </p>
        </div>
        <div>
          <p className="md-semibold-gray text-right">Total Price</p>
          <p className="md-semibold-black text-right">
            Rp{numberWithDots(quantity * initPrice)}
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
