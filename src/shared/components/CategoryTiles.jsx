import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function CategoryTiles({ icon, text, onClick }) {
  return (
    <div
      className="card-border-shadow p-5 flex flex-row hover:cursor-pointer"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="ps-1 pe-4 text-gray-500" />
      <p className="sm-semibold-gray pe-3">{text}</p>
    </div>
  )
}
