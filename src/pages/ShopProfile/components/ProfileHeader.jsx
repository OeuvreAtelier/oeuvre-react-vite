import React from "react";
import IconButton from "../../../shared/components/IconButton";
import { faBrush, faBuilding, faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ProfileHeader({ artist }) {

  const handleEdit = (artist) => {
    navigate('/edit-profile', {
      state: {
        artist: artist
      }
    })
  }

  const navigate = useNavigate()
  return (
    <div className="mx-40">
      <section className="h-96 mt-10 bg-top bg-no-repeat shadow bg-[url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
        <div className="flex flex-row items-end">
          <div className="bg-white ms-20 size-32 mb-5 rounded-full p-1">
            <img
              src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
              alt="profile"
            />
          </div>
          <div className="h-96 ps-6 pb-2 max-w-screen-xl flex flex-col items-start justify-end">
            <h1 className="text-3xl font-semibold bg-white tracking-wide leading-none text-gray-800 p-4 rounded-lg">
              {artist.displayName}
            </h1>
            <p onClick={() => handleEdit(artist)}
            className="border my-4 text-md font-semibold bg-gray-800 tracking-wide leading-none text-white p-3 rounded-lg hover:cursor-pointer hover:bg-gray-800">
              Edit Profile
            </p>
          </div>
        </div>
      </section>
      <div className="card-border-shadow-bottom p-6 mb-6">
        <p className="md-semibold-black mb-8">
          Welcome to {artist.displayName}'s Atelier 🎨 Explore a curated collection of my illustrations, meticulously crafted to ignite imagination and evoke emotions. Each piece is a reflection of my passion for Pixel Art and Anime, meticulously detailed and ready to bring beauty into your space. Whether you're a collector or seeking the perfect artwork, find your next masterpiece here. Start your journey into artistry today! ✨
        </p>
        {/* Profile buttons */}
        <IconButton
          btnName="Pixiv"
          btnIcon={faBrush}
          onClick={() => window.open('https://www.pixiv.net/en/users/431873')}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Twitter"
          btnIcon={faKiwiBird}
          onClick={() => window.open('https://x.com/hololive_Id')}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
        <IconButton
          btnName="Manage Addresses"
          btnIcon={faBuilding}
          onClick={() => navigate('/addresses')}
          color="bg-white"
          hoverColor="bg-slate-100"
          textColor="text-gray-600"
        />
      </div>
    </div>
  );
}
