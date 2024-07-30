import React from "react"
import IndividualItemsCard from "./IndividualItemsCard"

export default function TransactionConfirmationCard({
  seller,
  title,
  stock,
  quantity,
  initPrice,
  leftClick,
  rightClick,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div className="card-border-shadow px-5 pt-5 pb-3 mb-3">
      <p className="sm-semibold-gray mb-2">{seller}</p>
      <IndividualItemsCard
        title={title}
        stock={stock}
        quantity={quantity}
        initPrice={initPrice}
        leftClick={leftClick}
        rightClick={rightClick}
      />
    </div>
  )
}
