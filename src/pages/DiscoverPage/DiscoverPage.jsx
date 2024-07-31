import React, { useEffect } from "react"
import DiscoverProductList from "./components/DiscoverProductList"
import Footer from "../../shared/components/Footer"
import { useDispatch, useSelector } from "react-redux"
import { fetchMerchandises } from "../../redux/features/productSlice"

export default function DiscoverPage() {
  const { data: merchandises } = useSelector((state) => state.merchandises)

  return (
    <div className="bg-slate-100">
      <DiscoverProductList merchandises={merchandises} />
      <Footer />
    </div>
  )
}
