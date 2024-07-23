import { Avatar } from "flowbite-react"
import React from "react"

export default function AvatarFB({img, width, username, onClick}) {
  return (
    <div className={`flex flex-wrap w-${width} me-4 hover:cursor-pointer`}>
        <Avatar
          img={img}
          alt={`${username}'s avatar`}
          onClick={onClick}
          rounded
        />
    </div>
  )
}
