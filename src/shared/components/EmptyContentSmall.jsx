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
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-l-lg shadow-md justify-center">
        <h1 className="xxl-semibold-black mb-5">{title}</h1>
        <p className="lg-black mb-2">{middleText}</p>
        <p className="lg-black mb-6">{lowerText}</p>
      </div>
      <div className="bg-white rounded-r-lg shadow-md border border-gray-200 justify-center">
        <div style={{ width: 300, height: 300 }}>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}
