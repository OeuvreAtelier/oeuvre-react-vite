import React from "react"
import IconButton from "../../../shared/components/IconButton"
import { faHeart, faShoppingBasket, faBookmark } from "@fortawesome/free-solid-svg-icons"
import AddToCart from "../../../shared/components/AddToCart"

export default function ProductIntro() {
  return (
    <div className="container mx-auto mt-32">
      <div className="flex flex-row justify-center">
        <div className="w-1/2 px-10">
          <img
            src="https://genshin.global/wp-content/uploads/2022/06/raiden-shogun-birthday-art-genshinimpact.jpg"
            alt="Product"
            className="object-cover rounded-lg"
          />
          <p className="md-black my-10 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            suscipit cupiditate animi unde autem optio eaque? Architecto
            reiciendis blanditiis similique. Excepturi, aliquam rem laborum eos
            fuga sit velit blanditiis ipsa quia distinctio perferendis,
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
              btnName="1000"
              btnIcon={faHeart}
              onClick={() => {}}
              color="bg-white"
              hoverColor="bg-gray-300"
              textColor="text-gray-600"
            />
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
        </div>
      </div>
    </div>
  )
}
