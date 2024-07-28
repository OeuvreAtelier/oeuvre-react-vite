import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconButton({
  btnName,
  btnIcon,
  onClick,
  color,
  hoverColor,
  textColor,
}) {
  return (
    <button
      onClick={onClick}
      className={`shadow-md ${color} ${textColor} p-3 me-3 rounded-lg border hover:${hoverColor} hover:cursor-pointer`}
    >
      <div className="flex flex-row gap-3">
        <FontAwesomeIcon icon={btnIcon} className="mt-1 ps-2" />
        <p className="sm-semibold pe-2">{btnName}</p>
      </div>
    </button>
  )
}
