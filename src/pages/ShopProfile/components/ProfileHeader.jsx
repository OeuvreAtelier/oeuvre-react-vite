import React from "react"
import IconButton from "../../../shared/components/IconButton"
import {
  faBrush,
  faBuilding,
  faImage,
  faKiwiBird,
  faPerson,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function ProfileHeader({ artist }) {
  const navigate = useNavigate()
  console.log("Artist Profile Header:", artist)

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

  return (
    <div className="mx-40">
      <section
        className="dynamic-bg"
        style={{
          backgroundImage: `url(${artist.imageBanner ? artist.imageBanner.path : "https://i.imgur.com/LGvqTph.jpeg"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row items-end">
          {console.log("Artist:", artist)}
          <img
            className="bg-white ms-20 size-32 mb-5 rounded-full p-1 object-cover"
            src={artist.imageBanner ? artist.imagePicture.path : "https://i.imgur.com/LGvqTph.jpeg"}
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
          Welcome to {artist.displayName}'s Atelier 🎨 Explore a curated
          collection of my illustrations, meticulously crafted to ignite
          imagination and evoke emotions. Each piece is a reflection of my
          passion for Pixel Art and Anime, meticulously detailed and ready to
          bring beauty into your space. Whether you're a collector or seeking
          the perfect artwork, find your next masterpiece here. Start your
          journey into artistry today! ✨
        </p>
        {/* Profile buttons */}
        <IconButton
          btnName="Pixiv"
          btnIcon={faBrush}
          onClick={() => window.open("https://www.pixiv.net/en/users/431873")}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Twitter"
          btnIcon={faKiwiBird}
          onClick={() => window.open("https://x.com/hololive_Id")}
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
      </div>
    </div>
  )
}
