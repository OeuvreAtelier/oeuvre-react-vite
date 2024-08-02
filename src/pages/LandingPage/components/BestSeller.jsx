import React, { useEffect, useState } from "react"
import CardPictureTile from "../../../shared/components/CardPictureTile"
import { useDispatch } from "react-redux"
import { fetchMerchandises } from "../../../redux/features/productSlice"

export default function BestSeller({ merchandises }) {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchMerchandises({ page: currentPage }))
  }, [dispatch, currentPage])

  console.log("Merchandises:", merchandises)
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pt-3">
      <p className="xxxl-semibold-black py-10 tracking-wide">Best Seller</p>

      <div className="grid grid-cols-4 grid-rows-1 gap-4 px-40">
        {merchandises.slice(1, 5).map((merchandise) => (
          <CardPictureTile
            image={merchandise.image.path}
            name={merchandise.name}
            category={merchandise.category}
            seller={merchandise.user.displayName}
            price={merchandise.price}
          />
        ))}
      </div>
    </div>
  )
}
