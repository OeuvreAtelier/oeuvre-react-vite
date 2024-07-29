import React from "react"
import TextButton from "./TextButton"

export default function CardText({
  heading,
  upperText,
  middleText,
  lowerText,
  onEdit,
  onDelete,
}) {
  return (
    <div className="card-border-shadow p-4 flex flex-col w-full">
      <p className="md-semibold-black mb-1">{heading}</p>
      <p className="md-gray">{upperText}</p>
      <p className="md-gray">{middleText}</p>
      <p className="md-gray mb-4">{lowerText}</p>
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
  )
}
