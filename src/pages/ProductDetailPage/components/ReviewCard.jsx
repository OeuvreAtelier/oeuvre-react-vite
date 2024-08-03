import React from "react"
import { Rating } from "flowbite-react"

export default function ReviewCard({ avatar, username, rating, text }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-start align-middle gap-2 ">
        <img
          className="bg-indigo-500 size-9 mt-1 rounded-full object-cover align-middle items-center"
          src={
            "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
          }
          alt="profile"
        />
        <div className="flex flex-col ms-1">
          <p className="sm-semibold-black mb-2">{username}</p>
          <Rating size="sm" className="mb-2 -mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Rating.Star
                key={star}
                color={star <= rating ? "#e0a910" : "gray"}
              />
            ))}
          </Rating>
        </div>
      </div>
      <p className="sm-black text-justify mb-8">{text}</p>
    </div>
  )
}
