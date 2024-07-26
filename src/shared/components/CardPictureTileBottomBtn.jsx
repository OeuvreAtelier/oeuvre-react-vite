import React from "react"
import TextButton from "./TextButton"

export default function CardPictureTileBottomBtn({
  image,
  imageOnClick,
  category,
  categoryOnClick,
  name,
  seller,
  sellerOnClick,
  price,
}) {
  return (
    <div className="card-border-shadow">
      <img
        className="rounded-t-lg hover:cursor-pointer w-64 h-48 object-cover"
        src={image}
        alt={name}
        onClick={imageOnClick}
      />
      <div className="px-5 pt-5">
        <p
          className="sm-semibold-gray hover:underline hover:cursor-pointer"
          onClick={categoryOnClick}
        >
          {category}
        </p>
        <p
          className="md-semibold-black mt-1 hover:underline hover:cursor-pointer"
          onClick={imageOnClick}
        >
          {name}
        </p>
        <p
          className="sm-black mb-1 hover:underline hover:cursor-pointer"
          onClick={sellerOnClick}
        >
          {seller}
        </p>
        <p className="md-semibold-blue">Rp{price}</p>
      </div>
      <div className="px-5 py-3">
        <TextButton
          btnName="Remove"
          btnColor="bg-red-700"
          textColor="text-white"
        />
      </div>
    </div>
  )
}
