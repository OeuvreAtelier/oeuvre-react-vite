import React from "react";
import IconButton from "./IconButton";
import { faFileEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CardPictureTileWithButtons({
  image,
  imageOnClick,
  category,
  categoryOnClick,
  name,
  price,
  onEdit,
  onDelete
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-gray-600">
      <img
        className="rounded-t-lg hover:cursor-pointer w-72 h-72 object-cover"
        src={image}
        alt={name}
        onClick={imageOnClick}
      />
      <div className="p-5">
        <p
          className="text-md font-normal text-gray-700 dark:text-gray-400 hover:underline hover:cursor-pointer"
          onClick={categoryOnClick}
        >
          {category}
        </p>
        <p
          className="pb-3 text-lg font-semibold text-gray-900 dark:text-white hover:underline hover:cursor-pointer"
          onClick={imageOnClick}
        >
          {name}
        </p>
        <p className="text-lg font-bold text-red-500 dark:text-gray-400">
          {price} JPY
        </p>
      </div>
      <div className="p-5">
        <IconButton btnName="Edit" btnIcon={faFileEdit} onClick={onEdit} />
        <IconButton btnName="Delete" btnIcon={faTrash} onClick={onDelete} />
      </div>
    </div>
  );
}
