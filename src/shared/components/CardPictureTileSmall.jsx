import { Rating } from "flowbite-react"
import React from "react"

export default function CardPictureTileSmall({
  image,
  category,
  name,
  seller,
  price,
  onClick,
  productStock,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="card-border-shadow hover:cursor-pointer" onClick={onClick}>
      <div className="relative">
        <img
          className="rounded-t-lg hover:cursor-pointer w-64 h-44 object-cover"
          src={image}
          alt={name}
        />

        {productStock === 0 ? (
          <div className="absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full rounded-lg flex items-center justify-center">
            <div className="sm-semibold-white bg-black p-2 rounded-lg">
              Sold Out
            </div>
          </div>
        ) : null}
      </div>
      <div className="p-3 ms-1">
        <p className="xs-semibold-gray">{category}</p>
        <p className="sm-semibold-black mt-1">{name}</p>
        <p className="sm-black mb-1">{seller}</p>
        <p className="sm-semibold-blue">Rp{numberWithDots(price)}</p>
      </div>
    </div>
  )
}
