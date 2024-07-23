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
      <div className="flex">
        <FontAwesomeIcon icon={btnIcon} className="mt-1 ps-2" />
        <p className="font-semibold ps-3 pe-2 text-sm">{btnName}</p>
      </div>
    </button>
  )
}
