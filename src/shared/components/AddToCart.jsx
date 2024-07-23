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
          <p className="text-sm text-indigo-700">{header}</p>
          <p className="text-sm text-gray-600 mb-2">{type}</p>
        </p>
        <p className="text-xl text-gray-600 mb-2 pe-4 font-semibold">Rp{price}</p>
      </div>
      <IconButton
        btnName={name}
        btnIcon={icon}
        onClick={onClick}
        color="bg-indigo-500"
        hoverColor="bg-indigo-600"
        textColor="text-white"
      />
      <p className="text-sm text-gray-800 font-semibold pt-5 my-4">About shipping:</p>
      <p className="text-sm text-gray-800 font-semibold mb-2">
        - Ships within X days
      </p>
      <p className="text-sm text-gray-600 mb-4">
        The product will be shipped in X days after the seller packed and sealed
        the item, to ensure that it will be delivered safely.
      </p>
      <p className="text-sm text-gray-800 font-semibold mb-2">
        - Available to download
      </p>
      <p className="text-sm text-gray-600 mb-4">
        You will be able to download the digital product at any time after payment is
        confirmed.
      </p>
    </div>
  )
}
