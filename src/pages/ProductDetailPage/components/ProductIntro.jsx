import React, { useState } from "react"
import IconButton from "../../../shared/components/IconButton"
import {
  faShoppingBasket,
  faBookmark,
  faList,
} from "@fortawesome/free-solid-svg-icons"
import AddToCart from "../../../shared/components/AddToCart"
import { Rating } from "flowbite-react"
import ScrollableModal from "./ScrollableModal"
import AvatarFB from "../../../shared/components/AvatarFB"
import ReviewCard from "./ReviewCard"

export default function ProductIntro() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <>
      <div className="flex flex-col">
        <ScrollableModal
          show={openModal}
          onClose={handleCloseModal}
          title="Product Reviews"
          body={
            <>
              <ReviewCard
                avatar={
                  "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                }
                username="Mavuika"
                rating={3}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
              />
              <ReviewCard
                avatar={
                  "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                }
                username="Mavuika"
                rating={3}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
              />
              <ReviewCard
                avatar={
                  "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                }
                username="Mavuika"
                rating={3}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
              />
              <ReviewCard
                avatar={
                  "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                }
                username="Mavuika"
                rating={3}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
              />
              <ReviewCard
                avatar={
                  "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                }
                username="Mavuika"
                rating={3}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
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
                src="https://genshin.global/wp-content/uploads/2022/06/raiden-shogun-birthday-art-genshinimpact.jpg"
                alt="Product"
                className="object-cover rounded-lg"
              />
              <div className="absolute top-0 right-0 p-1 m-6 bg-white rounded-lg">
                <Rating size="md">
                  <Rating.Star color="#e0a910" />
                  <p className="mx-1 lg-semibold-black">4.95</p>
                </Rating>
              </div>
            </div>
            <p className="md-black my-10 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              suscipit cupiditate animi unde autem optio eaque? Architecto
              reiciendis blanditiis similique. Excepturi, aliquam rem laborum
              eos fuga sit velit blanditiis ipsa quia distinctio perferendis,
              reprehenderit odit. Culpa, aspernatur? Ea adipisci, veniam et nemo
              tenetur dignissimos iure, itaque aut, possimus culpa eligendi
              consequuntur ipsum recusandae minima nulla doloremque magni.
              Possimus, exercitationem? Delectus a eum laborum ad, quasi, sit
              suscipit expedita inventore distinctio explicabo asperiores itaque
              id nisi facilis? Sapiente saepe incidunt expedita a, officia
              deleniti harum. Consequatur vero tenetur, quia accusantium eum
              deserunt mollitia odio, voluptatum odit voluptatibus magnam cum
              sequi nesciunt?
            </p>
          </div>
          <div className="w-1/4 me-20 flex flex-col">
            <p className="sm-semibold-gray mb-1 hover:underline hover:cursor-pointer">
              Category
            </p>
            <p className="md-semibold-black mb-1 hover:underline hover:cursor-pointer">
              Seller Name
            </p>
            <h1 className="xl-semibold-black mb-5">
              Product Name: Lorem Ipsum
            </h1>
            <div>
              <IconButton
                btnName="Bookmark Item"
                btnIcon={faBookmark}
                onClick={() => {}}
                color="bg-white"
                hoverColor="bg-gray-300"
                textColor="text-gray-600"
              />
            </div>
            <AddToCart
              header="Ships within 7 working days"
              type="Physical"
              price="100.000"
              name="Add to Cart"
              icon={faShoppingBasket}
            />
            <IconButton
              btnName="View Reviews"
              btnIcon={faList}
              onClick={handleOpenModal}
              color="bg-white"
              hoverColor="bg-gray-300"
              textColor="text-gray-600"
            />
          </div>
        </div>
      </div>
    </>
  )
}
