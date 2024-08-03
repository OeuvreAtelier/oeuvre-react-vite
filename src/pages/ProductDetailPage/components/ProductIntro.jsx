import React, { useEffect, useState, useContext } from "react"
import IconButton from "../../../shared/components/IconButton"
import {
  faShoppingBasket,
  faBookmark,
  faList,
  faWarning,
} from "@fortawesome/free-solid-svg-icons"
import AddToCart from "../../../shared/components/AddToCart"
import { Rating } from "flowbite-react"
import ScrollableModal from "./ScrollableModal"
import ReviewCard from "./ReviewCard"
import { useLocation, useNavigate } from "react-router-dom"
import convertEnum from "../../../constants/convertEnum.js"
import { CartContext } from "../../../context/CartContext.jsx"
import ConfirmationModal from "../../../shared/components/ConfirmationModal.jsx"

export default function ProductIntro() {
  const { cartItems, addToCart } = useContext(CartContext)
  const [openModal, setOpenModal] = useState(false)
  const { state } = useLocation()
  const navigate = useNavigate()
  const [emptyStock, setEmptyStock] = useState(false)
  const [sameId, setSameId] = useState(false)

  console.log("State PRODUCT INTRO:", state)
  console.log("State MERCHANDISE PRODUCT INTRO:", state.merchandise)

  const handleEmptyStock = () => {
    setEmptyStock(true)
  }

  const handleSameId = () => {
    setSameId(true)
  }

  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  useEffect(() => {
    if (state !== null) {
    } else {
      navigate("/discover")
    }
  }, [navigate, state])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // I NEED THIS
  console.log("Artist ID B406 PRODUCT INTRO:", state.merchandise.user.id)
  // I NEED THIS TOO
  console.log("Own ID:", state.artist.id)

  const viewedArtistId = state.merchandise.user.id
  const ownId = state.artist.id

  return (
    <>
      <ConfirmationModal
        show={emptyStock}
        onClose={() => setEmptyStock(false)}
        text="Sorry, the product is sold out at the moment."
        isHidden={true}
      />
      <ConfirmationModal
        show={sameId}
        onClose={() => setSameId(false)}
        text="Sorry, you cannot buy your own product."
        isHidden={true}
      />
      <div className="flex flex-col">
        <ScrollableModal
          isOpen={openModal}
          onClose={handleCloseModal}
          productName={state.merchandise.name}
          body={
            <>
              <ReviewCard
                avatar="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                username={state.artist.firstName}
                rating={5}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
              <ReviewCard
                avatar="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                username="Mavuika"
                rating={5}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
              <ReviewCard
                avatar="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                username="Mavuika"
                rating={5}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
            </>
          }
          btnOnClick={handleCloseModal}
          btnText="Close"
        />
      </div>
      <div className="container mx-auto mt-32">
        <div className="flex flex-row justify-center">
          <div className="w-1/2 px-10">
            <div className="relative">
              <img
                src={
                  state !== null
                    ? state.merchandise.image.path
                    : "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
                }
                alt="Product"
                className="object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 p-1 m-6 bg-white rounded-lg">
                <Rating size="md">
                  <Rating.Star color="#e0a910" />
                  <p className="mx-1 lg-semibold-black">4.95</p>
                </Rating>
              </div>
            </div>
            <p className="lg-semibold-black mt-5">Description</p>
            <p className="md-black mt-2 mb-5">
              {state.merchandise.description.description}
            </p>
          </div>
          <div className="w-1/4 me-20 flex flex-col mb-5">
            <p className="sm-semibold-gray mb-1">
              {convertEnum[state.merchandise.category]}
            </p>
            <p
              className="md-semibold-black mb-1 hover:underline hover:cursor-pointer"
              onClick={() => {
                {
                  state.artist.id === state.merchandise.user.id
                    ? navigate("/view-store")
                    : null
                  // navigate("/view-2-store", {
                  //     state: {
                  //       viewedArtistId,
                  //       ownId,
                  //     },
                  //   })
                }
              }}
            >
              {state.merchandise.user.displayName}
            </p>
            <h1 className="xl-semibold-black mb-2">{state.merchandise.name}</h1>
            <p className="sm-lightgray mb-5">
              Stock: {state.merchandise.stock}
            </p>
            <div>
              {/* <IconButton
                btnName="Bookmark Item"
                btnIcon={faBookmark}
                onClick={() => {}}
                color="bg-white"
                hoverColor="bg-gray-300"
                textColor="text-gray-600"
              /> */}
              <IconButton
                btnName="View Reviews"
                btnIcon={faList}
                onClick={handleOpenModal}
                color="bg-white"
                hoverColor="bg-gray-300"
                textColor="text-gray-600"
              />
            </div>
            <AddToCart
              header={
                state.merchandise.type === "PHYSICAL"
                  ? "Ships within 7 working days"
                  : "Available to download later"
              }
              type={convertEnum[state.merchandise.type]}
              price={numberWithDots(state.merchandise.price)}
              name={
                state.merchandise.stock === 0 ? "Out of Stock" : "Add to Cart"
              }
              icon={
                state.merchandise.stock === 0 ? faWarning : faShoppingBasket
              }
              onClick={() => {
                if (state.merchandise.stock === 0) {
                  handleEmptyStock()
                } else if (state.artist.id === state.merchandise.user.id) {
                  handleSameId()
                } else {
                  addToCart(state.merchandise)
                  navigate("/shopping-cart", {
                    state: {
                      artist: state.artist,
                      merchandise: state.merchandise,
                    },
                  })
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
