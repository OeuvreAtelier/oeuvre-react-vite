import React from "react"
import IconButton from "./IconButton"
import { faFileEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import TextButton from "./TextButton"

export default function CardPictureTileWithButtons({
  image,
  productOnClick,
  category,
  categoryOnClick,
  name,
  price,
  onEdit,
  onDelete,
}) {
  return (
    <div className="card-border-shadow flex flex-col justify-between">
      <div className="">
        <img
          className="rounded-t-lg hover:cursor-pointer object-cover"
          src={image}
          alt={name}
          onClick={productOnClick}
        />
        <div className="mx-5 my-3">
          <p
            className="sm-semibold-gray hover:underline hover:cursor-pointer"
            onClick={categoryOnClick}
          >
            {category}
          </p>
          <p
            className="md-semibold-black my-1 hover:underline hover:cursor-pointer"
            onClick={productOnClick}
          >
            {name}
          </p>
          <p className="lg-semibold-blue">Rp{price}</p>
        </div>
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
