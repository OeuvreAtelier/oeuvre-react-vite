import React, { useEffect, useState } from "react"
import {
  faBookmark,
  faGear,
  faHistory,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import IconButton from "../../../shared/components/IconButton"
import { useNavigate } from "react-router-dom"
import CardPictureTileSmall from "../../../shared/components/CardPictureTileSmall"
import { fetchMerchandises, fetchProductsByName } from "../../../redux/features/productSlice"
import { useDispatch, useSelector } from "react-redux"
import convertEnum from "../../../constants/convertEnum"
import TextInputForm from "../../../shared/components/TextInputForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function DiscoverProductList({ merchandises }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const { paging: totalPages } = useSelector((state) => state.merchandises)

  useEffect(() => {
    dispatch(fetchMerchandises({ page: currentPage }))
  }, [dispatch, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const [form, setForm] = useState({
    search: "",
  })

  const handleKeyboardChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    console.log(form)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchProductsByName({ productName: form.search, page: currentPage }))
    console.log("Searching:", form.search)
  }

  return (
    <div className="container mx-auto pt-28 pb-8">
      <div className="flex flex-row justify-center mx-10">
        <div className="w-1/4 px-5 flex flex-col gap-4">
          <IconButton
            btnName="Bookmarks"
            btnIcon={faBookmark}
            color="bg-white"
            hoverColor="bg-slate-100"
            onClick={() => {
              navigate("/bookmarks")
            }}
          />
          <IconButton
            btnName="Transaction History"
            btnIcon={faHistory}
            color="bg-white"
            hoverColor="bg-slate-100"
            onClick={() => {
              navigate("/transaction")
            }}
          />
          <IconButton
            btnName="Settings"
            btnIcon={faGear}
            color="bg-white"
            hoverColor="bg-slate-100"
          />
        </div>
        <div className="w-3/4 flex flex-col ps-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold mt-2 mb-6">Discover</h1>
            <form
              className="flex flex-row justify-between"
              onSubmit={handleSearch}
            >
              <TextInputForm
                type="text"
                id="search"
                name="search"
                placeholder="Search items..."
                onChange={handleKeyboardChange}
                value={form.search}
              />
              <div className="p-2 ms-2 me-1 mb-6 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-center hover:cursor-pointer text-white">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </form>
          </div>
          <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-5">
            {merchandises.map((merchandise) => (
              <CardPictureTileSmall
                key={merchandise.id}
                image={
                  "https://static.zerochan.net/Arlecchino.full.3705545.jpg"
                }
                category={convertEnum[merchandise.category]}
                name={merchandise.name}
                seller="Mihoyo"
                price={merchandise.price}
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 mt-6">
            {[...Array(totalPages.totalPages)].map((_, index) => (
              <div
                className={
                  currentPage === index + 1
                    ? `p-2 cursor-pointer rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold`
                    : `p-2 cursor-pointer rounded-lg bg-white hover:bg-gray-100 text-gray-600`
                }
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-5">
            <CardPictureTileSmall
              image={"https://static.zerochan.net/Arlecchino.full.3705545.jpg"}
              category="GAMES"
              name="Honkai Star Rail"
              seller="Mihoyo"
              price="250000"
            /> */}
        </div>
      </div>
    </div>
  )
}
