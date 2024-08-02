import React, { useEffect, useState } from "react"
import Animation from "../../../assets/empty.json"
import CardPictureTileBottomBtn from "../../../shared/components/CardPictureTileBottomBtn"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import EmptyContent from "../../../shared/components/EmptyContent"
import { fetchMerchandisesByUserId } from "../../../redux/features/productSlice"
import convertEnum from "../../../constants/convertEnum"

export default function StoreProductList({ artist }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const { paging: totalPages } = useSelector((state) => state.merchandises)

  useEffect(() => {
    dispatch(
      fetchMerchandisesByUserId({ userId: artist.id, page: currentPage })
    )
  }, [dispatch, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <>
      {/* {merchandises.length === 0 ? (
        <EmptyContent
          title={"There's nothing in here..."}
          middleText={
            "How about you add some stuff by clicking the button on the bottom after these paragraphs?"
          }
          lowerText={
            "With merchandises available here, you can connect to the entire world by showing off your creative skills, or just selling some items that people loved."
          }
          btnTitle={"Add Products"}
          animation={Animation}
        />
      ) : (
        <div className="bg-slate-100 flex flex-col justify-center items-center mb-10">
          <div className="grid grid-cols-4 grid-rows-1 gap-3 px-40">
            {merchandises.map((merchandise) => (
              <CardPictureTileBottomBtn
                key={merchandise.id}
                image={
                  merchandise.image
                    ? merchandise.image.path
                    : "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
                }
                imageOnClick={() => {}}
                name={merchandise.name}
                category={convertEnum[merchandise.category]}
                lowerText={convertEnum[merchandise.type] + " " + "Product"}
                price={merchandise.price}
                btnName="Edit"
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
        </div>
      )} */}
    </>
  )
}
