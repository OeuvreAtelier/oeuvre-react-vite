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
          <h1 className="text-2xl font-semibold mb-6">Bookmarked Items</h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-5">
            <CardPictureTileBottomBtn
              image={
                "https://genshin.global/wp-content/uploads/2022/06/raiden-shogun-birthday-art-genshinimpact.jpg"
              }
              imageOnClick=""
              name="The Goddess's Hell"
              category="Illustration"
              categoryOnClick=""
              seller="Kayano Hikatu"
              sellerOnClick=""
              price="125000"
            />

            <CardPictureTileBottomBtn
              image={"https://static.zerochan.net/Arlecchino.full.3705545.jpg"}
              imageOnClick=""
              name="Spirited Away"
              category="Video"
              categoryOnClick=""
              seller="Ghibli Studio"
              sellerOnClick=""
              price="89000"
            />
            <CardPictureTileBottomBtn
              image={
                "https://c4.wallpaperflare.com/wallpaper/35/918/352/genshin-impact-artwork-clorinde-genshin-impact-anime-anime-girls-hd-wallpaper-preview.jpg"
              }
              imageOnClick=""
              name="Baldur's Gate 3"
              category="Games"
              categoryOnClick=""
              seller="FromSoftware"
              sellerOnClick=""
              price="538000"
            />
            <CardPictureTileBottomBtn
              image={
                "https://i.pinimg.com/736x/25/84/ec/2584ec3b93837b5f1c874fb7811e3d6c.jpg"
              }
              imageOnClick=""
              name="Promise of The World"
              category="Music"
              categoryOnClick=""
              seller="Ghibli Studio"
              sellerOnClick=""
              price="56000"
            />
            <CardPictureTileBottomBtn
              image={
                "https://genshin.global/wp-content/uploads/2022/06/raiden-shogun-birthday-art-genshinimpact.jpg"
              }
              imageOnClick=""
              name="The Goddess's Hell"
              category="Illustration"
              categoryOnClick=""
              seller="Kayano Hikatu"
              sellerOnClick=""
              price="125000"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
