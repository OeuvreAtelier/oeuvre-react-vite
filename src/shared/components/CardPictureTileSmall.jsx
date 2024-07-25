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
      <img
        className="rounded-t-lg hover:cursor-pointer w-64 h-44 object-cover"
        src={image}
        alt={name}
        onClick={imageOnClick}
      />
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
