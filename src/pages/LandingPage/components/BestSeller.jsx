import React, { useEffect, useState } from "react"
import CardPictureTile from "../../../shared/components/CardPictureTile"
import { useDispatch, useSelector } from "react-redux"
import { fetchMerchandises } from "../../../redux/features/productSlice"
import { useNavigate } from "react-router-dom"

export default function BestSeller() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const { data: review } = useSelector((state) => state.review)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchMerchandises({ page: 1 })).then(
      console.log("Best seller: ", merchandises)
    )
  }, [])

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pt-3">
      <p className="xxxl-semibold-black py-10 tracking-wide">Best Seller</p>

      <div className="grid grid-cols-4 grid-rows-1 gap-4 px-40">
        {merchandises.slice(0, 4).map((merchandise) => (
          <CardPictureTile
            image={merchandise.image.path}
            name={merchandise.name}
            category={merchandise.category}
            seller={merchandise.user.displayName}
            price={merchandise.price}
            onClick={() => {
              navigate("/product-detail", {
                state: {
                  artist: artist,
                  merchandise: merchandise,
                  review: review,
                },
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}
