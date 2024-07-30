import React from "react"
import IconButton from "./IconButton"
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
        className="rounded-t-lg w-64 h-60 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-3 ms-1">
        <p className="sm-semibold-gray">{category}</p>
        <p className="md-semibold-black mt-1">{name}</p>
        <p className="md-semibold-blue my-2">Rp{numberWithDots(price)}</p>
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
