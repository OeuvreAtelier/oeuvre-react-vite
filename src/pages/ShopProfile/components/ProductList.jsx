import React, { useEffect, useState } from "react"
import CardPictureTileWithButtons from "../../../shared/components/CardPictureTileWithButtons"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteProduct,
  fetchMerchandisesByUserId,
} from "../../../redux/features/productSlice"
import FloatingActionButton from "../../../shared/components/FloatingActionButton"
import { useNavigate } from "react-router-dom"
import ConfirmationModal from "../../../shared/components/ConfirmationModal.jsx"
import Animation from "../../../assets/empty.json"
import CreateStoreStart from "../../../assets/create-store.json"
import convertEnum from "../../../constants/convertEnum.js"
import EmptyContent from "../../../shared/components/EmptyContent.jsx"
import CardPictureTileBottomBtn from "../../../shared/components/CardPictureTileBottomBtn.jsx"

export default function ProductList({ artist, merchandises }) {
  const [openModal, setOpenModal] = useState(false)
  const [checkFirstNameModal, setCheckFirstNameModal] = useState(false)
  const [deleteId, setDeleteId] = useState("")
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

  console.log("Current Page (PL):", currentPage)
  console.log("Total Pages (PL):", totalPages.totalPages)

  const handleEdit = (artist, merchandise) => {
    navigate("/register-update", {
      state: {
        merchandise: merchandise,
        artist: artist,
      },
    })
  }

  const handleAdd = (artist) => {
    navigate("/register-update", {
      state: {
        artist: artist,
      },
    })
  }

  const handleDeleteModal = (id) => {
    setOpenModal(true)
    setDeleteId(id)
  }

  const handleDelete = () => {
    dispatch(deleteProduct(deleteId))
      .unwrap()
      .then(() => {
        dispatch(
          fetchMerchandisesByUserId({ userId: artist.id, page: currentPage })
        )
      })
      .catch((error) => console.error("Deletion failed:", error))
    setOpenModal(false)
  }

  const handleCreateManageStore = (artist) => {
    if (artist.firstName === null) {
      navigate("/edit-profile", {
        state: {
          artist: artist,
        },
      })
    } else {
      navigate("/manage-store", {
        state: {
          artist: artist,
        },
      })
    }
  }
  // console.log("First Name:", artist.displayName)
  const handleFirstNameModal = async () => {
    setCheckFirstNameModal(true)
  }

  if (artist.artist === false) {
    return (
      <>
        <ConfirmationModal
          show={checkFirstNameModal}
          onClose={() => setCheckFirstNameModal(false)}
          text="Please complete your profile first before proceeding by going to the Edit Profile page."
          isHidden={true}
        />
        <EmptyContent
          title={"Start selling products now!"}
          middleText={
            "When you open a store here, you can do what you love and make money at the same time!"
          }
          lowerText={
            "To start selling products, you need to register as an artist and create your store."
          }
          onClick={() => {
            artist.firstName === null
              ? handleFirstNameModal()
              : handleCreateManageStore(artist)
          }}
          btnTitle={"Create store"}
          animation={CreateStoreStart}
        />
      </>
    )
  } else {
    return (
      <>
        <ConfirmationModal
          show={openModal}
          onClose={() => setOpenModal(false)}
          text="Do you want to delete this merchandise?"
          yes="Yes"
          no="No"
          onYesClick={handleDelete}
          onNoClick={() => setOpenModal(false)}
          isHidden={false}
        />
        {merchandises.length === 0 ? (
          <EmptyContent
            title={"There's nothing in here..."}
            middleText={
              "How about you add some stuff by clicking the button on the bottom after these paragraphs?"
            }
            lowerText={
              "With merchandises available here, you can connect to the entire world by showing off your creative skills, or just selling some items that people loved."
            }
            onClick={() => handleAdd(artist)}
            btnTitle={"Add Products"}
            animation={Animation}
          />
        ) : (
          <div className="bg-slate-100 flex flex-col justify-center items-center mb-10">
            <FloatingActionButton
              btnName="Add Merchandise"
              onClick={() => handleAdd(artist)}
            />
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
                  btnOnClick={() => handleEdit(artist, merchandise)}
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
        )}
      </>
    )
  }
}
