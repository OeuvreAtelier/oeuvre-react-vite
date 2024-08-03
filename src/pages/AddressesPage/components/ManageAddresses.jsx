import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import CardText from "../../../shared/components/CardText"
import ConfirmationModal from "../../../shared/components/ConfirmationModal"
import {
  deleteAddress,
  fetchAddressesByUserId,
} from "../../../redux/features/addressSlice"
import FloatingActionButton from "../../../shared/components/FloatingActionButton"
import Animation from "../../../assets/location.json"
import EmptyContent from "../../../shared/components/EmptyContent"

export default function ManageAddresses({ artist, addresses }) {
  const [openModal, setOpenModal] = useState(false)
  const [deleteId, setDeleteId] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAddressesByUserId(artist.id))
  }, [dispatch, artist.id])

  const handleAdd = (artist) => {
    navigate("/address-form", {
      state: {
        artist: artist,
      },
    })
  }

  const handleEdit = (artist, address) => {
    navigate("/address-form", {
      state: {
        address: address,
        artist: artist,
      },
    })
  }

  const handleDeleteModal = (id) => {
    setOpenModal(true)
    setDeleteId(id)
  }

  const handleDelete = () => {
    dispatch(deleteAddress(deleteId))
      .unwrap()
      .then(() => {
        dispatch(fetchAddressesByUserId(artist.id))
      })
      .catch((error) => console.error("Deletion failed:", error))
    setOpenModal(false)
  }

  return (
    <>
      <ConfirmationModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        text="Do you want to delete this address?"
        leftClick="Yes"
        rightClick="No"
        onLeftClick={handleDelete}
        onRightClick={() => setOpenModal(false)}
        isHidden={false}
      />
      {addresses.length === 0 ? (
        <div className="bg-slate-100 pt-28">
          <EmptyContent
            title={"There's nothing in here..."}
            middleText={
              "How about you add some stuff by clicking the button on the bottom after these paragraphs?"
            }
            lowerText={
              "With merchandises available here, you can connect to the entire world by showing off your creative skills, or just selling some items that people loved."
            }
            onClick={() => handleAdd(artist)}
            btnTitle={"Add Address"}
            animation={Animation}
          />
        </div>
      ) : (
        <div className="bg-slate-100 flex flex-col justify-center items-center mb-10">
          {addresses.length < 5 ? (
            <FloatingActionButton
              btnName="Add Address"
              onClick={() => handleAdd(artist)}
            />
          ) : null}

          <h1 className="xxl-semibold-black mt-28 mb-2">My Saved Addresses</h1>
          <p className="sm-semibold-gray mb-7">Note: You can only save up to 5 addresses.</p>
          <div className="grid grid-cols-5 grid-rows-1 gap-3 px-10">
            {addresses.map((address) => (
              <CardText
                key={address.id}
                heading={address.detail}
                upperText={address.city}
                middleText={`${address.state}, ${address.country} ${address.postalCode}`}
                lowerText={address.phoneNumber}
                onEdit={() => handleEdit(artist, address)}
                onDelete={() => handleDeleteModal(address.id)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
