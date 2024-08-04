import React from "react"
import CategoryTiles from "../../../shared/components/CategoryTiles"
import { useNavigate } from "react-router-dom"
import categories from "../../../constants/categories"

export default function Category() {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pb-6 pt-3">
      <p className="xxxl-semibold-black py-10 tracking-wide">Categories</p>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 px-4">
        {categories.map(({ icon, text, category }) => (
          <CategoryTiles
            key={category}
            icon={icon}
            text={text}
            onClick={() =>
              navigate("/discover", { state: { category: category } })
            }
          />
        ))}
      </div>
    </div>
  )
}
