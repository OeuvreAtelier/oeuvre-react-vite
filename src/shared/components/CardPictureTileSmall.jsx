import { Rating } from "flowbite-react"
import React from "react"

export default function CardPictureTileSmall({
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
      <div className="relative">
        <img
          className="rounded-t-lg hover:cursor-pointer w-64 h-44 object-cover"
          src={image}
          alt={name}
        />
        <div className="absolute bottom-0 right-0 p-1 m-2 bg-white rounded-lg">
          <Rating>
            <Rating.Star color="#e0a910" />
            <p className="ms-1 xs-semibold-gray">4.95</p>
          </Rating>
        </div>
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
