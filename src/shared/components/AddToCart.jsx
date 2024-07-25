import React from "react"
import IconButton from "./IconButton"

export default function AddToCart({
  header,
  type,
  price,
  name,
  icon,
  onClick,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-10">
        <p className="mb-2">
          <p className="sm-blue">{header}</p>
          <p className="sm-black mb-2">{type}</p>
        </p>
        <p className="lg-semibold-black me-4">Rp{price}</p>
      </div>
      <IconButton
        btnName={name}
        btnIcon={icon}
        onClick={onClick}
        color="bg-indigo-500"
        hoverColor="bg-indigo-600"
        textColor="text-white"
      />
      <p className="sm-semibold-gray pt-5 my-4">About shipping:</p>
      <p className="sm-semibold-gray font-semibold mb-2">
        1. Ships within X days
      </p>
      <p className="sm-black mb-4">
        The product will be shipped in X days after the seller packed and sealed
        the item, to ensure that it will be delivered safely.
      </p>
      <p className="sm-semibold-gray mb-2">2. Available to download</p>
      <p className="sm-black mb-4">
        You will be able to download the digital product at any time after
        payment is confirmed.
      </p>
    </div>
  )
}
