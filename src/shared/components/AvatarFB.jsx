import { Avatar } from "flowbite-react"
import React from "react"

export default function AvatarFB({ img, username, onClick, size }) {
  return (
    <Avatar
      img={img}
      alt={`${username}'s avatar`}
      onClick={onClick}
      className={`hover:cursor-pointer w-10 h-${size}`}
      rounded
    />
  )
}
