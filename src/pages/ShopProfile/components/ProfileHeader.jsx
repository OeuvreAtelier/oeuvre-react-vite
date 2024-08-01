import React from "react"
import IconButton from "../../../shared/components/IconButton"
import {
  faBrush,
  faBuilding,
  faImage,
  faKiwiBird,
  faMailBulk,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function ProfileHeader({ artist, store }) {
  const navigate = useNavigate()

  const handleEdit = (artist) => {
    navigate("/edit-profile", {
      state: {
        artist: artist,
      },
    })
  }

  const handleEditAvatarBanner = (artist) => {
    navigate("/edit-profile-image", {
      state: {
        artist: artist,
      },
    })
  }

  const handleCreateManageStore = (artist) => {
    navigate("/manage-store", {
      state: {
        artist: artist,
      },
    })
  }

  console.log("Artist:", artist)
  console.log("Store:", store)

  return (
    <div className="mx-40">
      <section
        className="dynamic-bg"
        style={{
          backgroundImage: `url(${
            artist.imageBanner
              ? artist.imageBanner.path
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
              artist.imagePicture
                ? artist.imagePicture.path
                : "https://i.imgur.com/LGvqTph.jpeg"
            }
            alt="profile"
          />
          <div className="h-96 ps-6 pb-2 max-w-screen-xl flex flex-col items-start justify-end">
            <h1 className="text-3xl font-semibold bg-white tracking-wide leading-none text-gray-800 p-4 rounded-lg">
              {artist.displayName}
            </h1>
            <p
              onClick={() => handleEdit(artist)}
              className="border my-4 text-md font-semibold bg-gray-800 tracking-wide leading-none text-white p-3 rounded-lg hover:cursor-pointer hover:bg-gray-800"
            >
              Edit Profile
            </p>
          </div>
        </div>
      </section>
      <div className="card-border-shadow-bottom p-6 mb-6">
        <p className="md-semibold-black mb-8">
          {store === null
            ? "You can add the description by creating your store first."
            : store.description}
        </p>
        <IconButton
          btnName="Pixiv"
          btnIcon={faBrush}
          onClick={() => {
            const pixivUrl =
              store === null
                ? "https://www.pixiv.net/en/users/431873"
                : `https://www.pixiv.net/en/users/${store.pixiv}`
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
            const twitterUrl =
              store === null
                ? "https://twitter.com/hololive_id"
                : `https://twitter.com/${store.twitter}`
            window.open(twitterUrl)
          }}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Email"
          btnIcon={faMailBulk}
          onClick={() => {
            const emailAddress =
              artist === null ? "user@example.com" : `${artist.email}`
            window.open(
              `mailto:${emailAddress}?subject=Information&body=Hello%21%20I%20would%20like%20to...`
            )
          }}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Manage Addresses"
          btnIcon={faBuilding}
          onClick={() => navigate("/addresses")}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Edit Avatar & Banner"
          btnIcon={faImage}
          onClick={() => handleEditAvatarBanner(artist)}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Manage Store"
          btnIcon={faStoreAlt}
          onClick={() => handleCreateManageStore(artist)}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
      </div>
    </div>
  )
}
