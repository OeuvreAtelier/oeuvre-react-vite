import Lottie from "lottie-react"
import React from "react"

export default function EmptyContentSmall({
  title,
  middleText,
  lowerText,
  animation,
}) {
  return (
    <div className="mb-10 pb-5 mx-auto flex flex-row">
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-l-lg shadow-md flex flex-col justify-center">
        <h1 className="xxl-semibold-black mb-5">{title}</h1>
        <p className="lg-black mb-2">{middleText}</p>
        <p className="lg-black mb-6">{lowerText}</p>
      </div>
      <div
        className="bg-white rounded-r-lg shadow-md border border-gray-200 flex justify-center items-center"
        style={{ width: 350, height: 350 }}
      >
        <div style={{ width: 280, height: 280 }}>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}
