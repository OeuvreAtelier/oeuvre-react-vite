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
import { useAuth } from "../../../context/AuthContext.jsx"
import { useDispatch, useSelector } from "react-redux"
import { fetchReviewsByProductId } from "../../../redux/features/reviewSlice"

export default function ProductIntro() {
  const { cartItems, addToCart } = useContext(CartContext)
  const [openReview, setOpenReview] = useState(false)
  const { state } = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emptyStock, setEmptyStock] = useState(false)
  const [sameId, setSameId] = useState(false)
  const [checkLogin, setCheckLogin] = useState(false)
  const { isLoggedIn } = useAuth()
  const [currentPage, setCurrentPage] = useState(1)
  const reviews = state.review

  console.log("State PRODUCT INTRO:", state)
  console.log("State MERCHANDISE PRODUCT INTRO:", state.merchandise)
  console.log("Product ID:", state.merchandise.id)
  console.log("Reviews:", state.review)

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    dispatch(
      fetchReviewsByProductId({
        productId: state.merchandise.id,
        page: currentPage,
      })
    )
  }, [dispatch, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleEmptyStock = () => {
    setEmptyStock(true)
  }

  const handleSameId = () => {
    setSameId(true)
  }

  const handleCheckLogin = () => {
    setCheckLogin(true)
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

  const handleOpenReview = () => {
    setOpenReview(true)
  }

  const handleCloseReview = () => {
    setOpenReview(false)
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
      <ConfirmationModal
        show={checkLogin}
        onClose={() => setCheckLogin(false)}
        text="Please login to your account to buy this product."
        leftClick="Cancel"
        rightClick="Okay"
        onLeftClick={() => setCheckLogin(false)}
        onRightClick={() => navigate("/login")}
        isHidden={false}
      />
      <div className="flex flex-col">
        <ScrollableModal
          isOpen={openReview}
          onClose={handleCloseReview}
          productName={state.merchandise.name}
          body={
            <>
              {reviews.length === 0 ? (
                <p className="sm-semibold-black text-center">No reviews yet.</p>
              ) : (
                <>
                  {reviews.map((review) => (
                    <ReviewCard
                      avatar={
                        review.user.imagePicture === null
                          ? "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
                          : review.user.imagePicture.path
                      }
                      username={`${review.user.firstName} ${review.user.lastName}`}
                      rating={review.rating}
                      text={review.review}
                    />
                  ))}
                </>
              )}
            </>
          }
          btnOnClick={handleCloseReview}
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
            <p className="md-black mt-2 mb-5 whitespace-pre-line">
              {state.merchandise.description.description}
            </p>
          </div>
          <div className="w-1/4 me-20 flex flex-col mb-5">
            <p
              className="sm-semibold-gray mb-1 hover:underline hover:cursor-pointer"
              onClick={() =>
                navigate("/discover", {
                  state: { category: state.merchandise.category },
                })
              }
            >
              {convertEnum[state.merchandise.category]}
            </p>
            <p
              className="md-semibold-black mb-1"
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
              <IconButton
                btnName="View Reviews"
                btnIcon={faList}
                onClick={handleOpenReview}
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
                if (!isLoggedIn) {
                  handleCheckLogin()
                } else {
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
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
