import React from "react"
import TextButton from "./TextButton"

export default function TransactionCardParent({
  trxId,
  trxDate,
  paymentStatus,
  address,
  children,
  onClick,
}) {
  return (
    <div className="card-border-shadow p-4 mb-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="xs-semibold-gray">ID: {trxId}</p>
          <p className="sm-semibold-black">Transaction Date: {trxDate}</p>
        </div>
        <div
          className={`xs-semibold-white px-2 py-1 mb-5 ${
            paymentStatus === "SETTLEMENT" ? "bg-green-500" : "bg-red-500"
          } rounded-xl text-center`}
        >
          {paymentStatus}
        </div>
      </div>
      <p className="xs-semibold-gray">Delivery Address</p>
      <p className="sm-semibold-black mb-4">{address}</p>
      {children}
      {paymentStatus === "SETTLEMENT" ? null : (
        <div className="flex flex-row justify-between items-center pt-3">
          <p className="sm-semibold-gray ms-2">
            The payment service is provided by Midtrans Payment Gateway.
          </p>
          <TextButton
            id="pay-button"
            btnName="Pay Now"
            btnColor="bg-indigo-500"
            textColor="text-white"
            hoverColor="bg-indigo-700"
            onClick={onClick}
          />
        </div>
      )}
    </div>
  )
}
