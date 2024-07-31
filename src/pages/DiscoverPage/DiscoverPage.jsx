import React, { useEffect } from "react"
import DiscoverProductList from "./components/DiscoverProductList"
import Footer from "../../shared/components/Footer"
import { useDispatch, useSelector } from "react-redux"

export default function DiscoverPage() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)

  return (
    <div className="bg-slate-100">
      <DiscoverProductList artist={artist} merchandises={merchandises} />
      <Footer />
    </div>
  )
}
