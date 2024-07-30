import { Button } from "flowbite-react"
import React from "react"

export default function IndividualItemsCard({
  title,
  stock,
  quantity,
  initPrice,
}) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div className="flex flex-row justify-between mb-2">
      <div>
        <p className="md-black mb-1">{title}</p>
        <p className="xs-semibold-gray mb-2">Stock: {stock}</p>
        <p className="sm-semibold-black mb-2">Rp{numberWithDots(initPrice)}</p>
      </div>
      <div>
        <p className="md-black text-right mt-2 mb-1">
          Rp{numberWithDots(quantity * initPrice)}
        </p>
        <Button.Group className="my-2">
          <Button color="gray" size={"sm"}>
            <div className="text-sm">-</div>
          </Button>
          <Button color="white" size={"sm"}>
            <div className="text-sm">{quantity}</div>
          </Button>
          <Button color="gray" size={"sm"}>
            <div className="text-sm">+</div>
          </Button>
        </Button.Group>
      </div>
    </div>
  )
}
