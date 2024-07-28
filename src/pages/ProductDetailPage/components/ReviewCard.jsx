import React from "react"
import AvatarFB from "../../../shared/components/AvatarFB"
import { Rating } from "flowbite-react"

export default function ReviewCard({ avatar, username, rating, text }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-start align-middle gap-2 ">
        <div style={{ width: "25px", height: "25px" }}>
          <AvatarFB img={avatar} username={username} size="1" />
        </div>
        <p className="sm-semibold-black mb-2 -mt-2">{username}</p>
      </div>
      <Rating size="sm" className="mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Rating.Star key={star} color={star <= rating ? "#e0a910" : "gray"} />
        ))}
      </Rating>
      <p className="sm-black text-justify mb-8">{text}</p>
    </div>
  )
}
