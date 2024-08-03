import React from "react"
import { faFileEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import TextButton from "./TextButton"

export default function CardPictureTileWithButtons({
  image,
  category,
  name,
  price,
  onEdit,
  onDelete,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div className="card-border-shadow">
      <img
        className="rounded-t-lg w-full h-44 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-3 ms-1">
        <p className="xs-semibold-gray">{category}</p>
        <p className="sm-semibold-black mt-1">{name}</p>
        <p className="sm-semibold-blue mt-1 mb-2">Rp{numberWithDots(price)}</p>
      </div>
      <div className="ps-5 pb-3 flex flex-row gap-3">
        <TextButton
          btnName="Edit"
          onClick={onEdit}
          btnColor="bg-sky-600"
          textColor="text-white"
        />
        <TextButton
          btnName="Delete"
          onClick={onDelete}
          btnColor="bg-red-600"
          textColor="text-white"
        />
      </div>
    </div>
  )
}
