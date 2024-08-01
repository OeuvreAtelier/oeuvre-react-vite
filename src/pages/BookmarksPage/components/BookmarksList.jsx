import React from "react"
import IconButton from "../../../shared/components/IconButton"
import {
  faBookmark,
  faGear,
  faHistory,
} from "@fortawesome/free-solid-svg-icons"
import CardPictureTileBottomBtn from "../../../shared/components/CardPictureTileBottomBtn"
import { useNavigate } from "react-router-dom"

export default function BookmarksList() {
  const navigate = useNavigate()
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
              navigate("/transaction-history")
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
          <h1 className="text-2xl font-semibold mb-6">Bookmarked Items</h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-5">
            <CardPictureTileBottomBtn
              image={
                "https://genshin.global/wp-content/uploads/2022/06/raiden-shogun-birthday-art-genshinimpact.jpg"
              }
              imageOnClick={() => {}}
              name="The Goddess's Hell"
              category="Illustration"
              lowerText="Kayano Hikatu"
              price="125000"
              btnName={"Remove"}
              btnOnClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
