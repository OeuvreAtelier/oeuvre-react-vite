import React from "react"
import {
  faBookmark,
  faGear,
  faHistory,
} from "@fortawesome/free-solid-svg-icons"
import IconButton from "../../../shared/components/IconButton"
import { useNavigate } from "react-router-dom"
import CardPictureTile from "../../../shared/components/CardPictureTile"
import CardPictureTileSmall from "../../../shared/components/CardPictureTileSmall"

export default function DiscoverProductList() {
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
          <h1 className="text-2xl font-semibold mb-6">Discover</h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-5">
            <CardPictureTileSmall
              image={"https://static.zerochan.net/Arlecchino.full.3705545.jpg"}
              category="Games"
              name="Honkai Star Rail"
              seller="Mihoyo"
              price="250000"
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}
