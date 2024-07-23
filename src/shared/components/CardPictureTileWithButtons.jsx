import React from "react"
import IconButton from "./IconButton"
import { faFileEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

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
    <div
      className="bg-white border border-gray-200 rounded-lg shadow hover:border-gray-600"
      
    >
      <img
        className="rounded-t-lg hover:cursor-pointer object-cover"
        src={image}
        alt={name}
        onClick={productOnClick}
      />
      <div className="p-5">
        <p
          className="text-md font-normal text-gray-700 hover:underline hover:cursor-pointer"
          onClick={categoryOnClick}
        >
          {category}
        </p>
        <p className="pb-3 text-lg font-semibold text-gray-900 hover:underline hover:cursor-pointer">
          {name}
        </p>
        <p className="text-lg font-bold text-indigo-500">
          Rp{price}
        </p>
      </div>
      <div className="p-5">
        <IconButton
          btnName="Edit"
          btnIcon={faFileEdit}
          onClick={onEdit}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Delete"
          btnIcon={faTrash}
          onClick={onDelete}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
      </div>
    </div>
  )
}
