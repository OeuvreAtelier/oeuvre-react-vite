import React from "react"
import TextButton from "./TextButton"

export default function CardPictureTileBottomBtn({
  image,
  imageOnClick,
  name,
  category,
  lowerText,
  price,
  btnName,
  btnOnClick,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div className="card-border-shadow">
      <img
        className="rounded-t-lg w-full h-44 object-cover hover:cursor-pointer"
        src={image}
        alt={name}
        onClick={imageOnClick}
      />
      <div className="p-3 ms-1">
        <p className="xs-semibold-gray mb-1">{category}</p>
        <p className="sm-semibold-black mb-1">{name}</p>
        <p className="sm-black mb-1">{lowerText}</p>
        <p className="sm-semibold-blue">Rp{numberWithDots(price)}</p>
      </div>
      <div className="ms-4 mb-3">
        <TextButton
          btnName={btnName}
          btnColor="bg-indigo-500"
          textColor="text-white"
          hoverColor="bg-indigo-700"
          onClick={btnOnClick}
        />
      </div>
    </div>
  )
}
