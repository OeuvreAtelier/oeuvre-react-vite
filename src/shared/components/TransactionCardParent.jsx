import React from "react"
import TextButton from "./TextButton"

export default function TransactionCardParent({
  trxId,
  trxDate,
  paymentStatus,
  children,
}) {
  return (
    <div className="card-border-shadow p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="xs-semibold-gray">ID: {trxId}</p>
          <p className="sm-semibold-black mb-4">Transaction Date: {trxDate}</p>
        </div>
        <div
          className={`xs-semibold-white px-2 py-1 mb-7 ${
            paymentStatus === "Paid" ? "bg-green-500" : "bg-red-500"
          } rounded-xl text-center`}
        >
          {paymentStatus}
        </div>
      </div>
      {children}
      {paymentStatus === "Paid" ? null : (
        <div className="flex flex-row justify-between items-center pt-3">
          <p className="sm-semibold-gray ms-2">
            The payment excludes 11% VAT as well as service fee of Rp1.000.
          </p>
          <TextButton
            btnName="Pay Now"
            btnColor="bg-indigo-500"
            textColor="text-white"
            hoverColor="bg-indigo-700"
            onClick={() => {
              console.log("clicked")
            }}
          />
        </div>
      )}
    </div>
  )
}
