import { Rating } from "flowbite-react"
import React from "react"

export default function CardPictureTileSmall({
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
      <div className="relative">
        <img
          className="rounded-t-lg hover:cursor-pointer w-64 h-44 object-cover"
          src={image}
          alt={name}
          onClick={imageOnClick}
        />
        <div className="absolute bottom-0 right-0 p-1 m-2 bg-white rounded-lg">
          <Rating>
            <Rating.Star color="#e0a910" />
            <p className="ms-1 xs-semibold-gray">4.95</p>
          </Rating>
        </div>
      </div>
      <div className="p-3 ms-1">
        <p
          className="xs-semibold-gray hover:underline hover:cursor-pointer"
          onClick={categoryOnClick}
        >
          {category}
        </p>
        <p
          className="sm-semibold-black mt-1 hover:underline hover:cursor-pointer"
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
        <p className="sm-semibold-blue">Rp{price}</p>
      </div>
    </div>
  )
}
