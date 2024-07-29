import Lottie from "lottie-react"
import React from "react"

export default function EmptyContent({
  title,
  middleText,
  lowerText,
  onClick,
  btnTitle,
  animation,
}) {
  return (
    <div className="px-40 mb-10 pb-5 mx-auto flex flex-row">
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-l-lg shadow-md justify-center">
        <h1 className="xxl-semibold-black mb-5">{title}</h1>
        <p className="lg-black mb-2">{middleText}</p>
        <p className="lg-black mb-6">{lowerText}</p>
        <div
          onClick={onClick}
          className="hover:cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300"
        >
          {btnTitle}
        </div>
      </div>
      <div className="bg-white rounded-r-lg shadow-md border border-gray-200 justify-center">
        <div style={{ width: 400, height: 400 }}>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}
