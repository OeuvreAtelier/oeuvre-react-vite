import React, { useEffect } from "react"
import IconButton from "../../../shared/components/IconButton"
import {
  faBrush,
  faKiwiBird,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchArtistByUserId } from "../../../redux/features/profileSlice"

export default function StoreHeader({ artist, viewedArtist }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Artist ID Use Effect:", viewedArtist)
    dispatch(fetchArtistByUserId({ userId: viewedArtist.id }))
  }, [dispatch, viewedArtist])

  return (
    <div className="mx-40">
      <section
        className="dynamic-bg"
        style={{
          backgroundImage: `url(${
            viewedArtist.imageBanner
              ? viewedArtist.imageBanner.path
              : "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-banner/default_banner.jpg"
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row items-end">
          <img
            className="bg-white ms-20 size-32 mb-5 rounded-full p-1 object-cover"
            src={
              viewedArtist.imagePicture
                ? viewedArtist.imagePicture.path
                : "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
            }
            alt="profile"
          />
          <div className="h-96 ps-6 pb-2 max-w-screen-xl flex flex-col items-start justify-end">
            <h1 className="text-3xl font-semibold bg-white tracking-wide leading-none text-gray-800 p-4 rounded-lg">
              {viewedArtist.displayName}
            </h1>
            <p className="border my-4 text-md font-semibold bg-gray-800 tracking-wide leading-none text-white p-3 rounded-lg hover:cursor-pointer hover:bg-gray-800">
              Verified Artist
            </p>
          </div>
        </div>
      </section>
      <div className="card-border-shadow-bottom p-6 mb-6">
        {/* <p className="md-semibold-black mb-8">{artist.store.description}</p>
        <IconButton
          btnName="Pixiv"
          btnIcon={faBrush}
          onClick={() => {
            const pixivUrl = `https://www.pixiv.net/en/users/${artist.store.pixiv}`
            window.open(pixivUrl)
          }}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Twitter"
          btnIcon={faKiwiBird}
          onClick={() => {
            const twitterUrl = `https://twitter.com/${artist.store.twitter}`
            window.open(twitterUrl)
          }}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        /> */}
        <IconButton
          id="email"
          btnName="Email"
          btnIcon={faMailBulk}
          onClick={() => {
            const emailAddress = `${viewedArtist.email}`
            window.open(
              `mailto:${emailAddress}?subject=Information&body=Hello%21%20I%20would%20like%20to...`
            )
          }}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
      </div>
    </div>
  )
}
