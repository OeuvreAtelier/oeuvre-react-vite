import React from "react"
import convertEnum from "../../constants/convertEnum.js"

export default function CardPictureTile({
  image,
  category,
  name,
  seller,
  price,
  onClick,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div className="card-border-shadow hover:cursor-pointer" onClick={onClick}>
      <img
        className="rounded-t-lg w-64 h-60 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-5">
        <p className="sm-semibold-gray mb-1">{convertEnum[category]}</p>
        <p className="md-semibold-black mb-1">{name}</p>
        <p className="sm-black mb-1">{seller}</p>
        <p className="md-semibold-blue">Rp{numberWithDots(price)}</p>
      </div>
    </div>
  )
}
